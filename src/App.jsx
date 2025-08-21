// src/App.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function Rod() {
  const originalLength = 0.3;
  const originalTipLength = 0.05;
  const originalTipRadius = 0.015;
  const originalRodRadius = 0.0075;

  const rodLength = originalLength ;
  const tipLength = originalTipLength *.6;
  const tipRadius = originalTipRadius *.6;
  const rodRadius = originalRodRadius * .4;
  const tipPositionX = rodLength / 2;
  return (
    <group>
      {/* Rod along X axis */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[rodRadius, rodRadius, rodLength, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Arrowhead on right (positive X direction) */}
      <mesh position={[tipPositionX, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[tipRadius, tipLength, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

function BaseballModel({ spinRate, playing, spinAxis, seam_orientation_lat, seam_orientation_lon, userRotX, userRotY, useSeamOrientation }) {
  const gltf = useLoader(GLTFLoader, "/models/baseball.gltf");
  const spinGroupRef = React.useRef();
  const modelGroupRef = React.useRef();
  const rodGroupRef = React.useRef();
  const { invalidate } = useThree();

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

  // TWO-PHASE ROTATION LOGIC
  useEffect(() => {
    if (!modelGroupRef.current) return;

    // STEP 1 — Start from identity
    modelGroupRef.current.quaternion.identity();

    // --- PHASE 1: Apply pitch's starting seam orientation from lat/lon ---
    if (
      useSeamOrientation &&
      seam_orientation_lat != null &&
      seam_orientation_lon != null &&
      spinAxis &&
      !isNaN(seam_orientation_lat) &&
      !isNaN(seam_orientation_lon)
    ) {
      const lat = THREE.MathUtils.degToRad(seam_orientation_lat);
      const lon = THREE.MathUtils.degToRad(seam_orientation_lon);

      const x = Math.cos(lat) * Math.sin(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);

      const surfaceVector = new THREE.Vector3(-x, y, z).normalize();
      const defaultRodVector = new THREE.Vector3(1, 0, 0);

      const pitchQuat = new THREE.Quaternion().setFromUnitVectors(
        defaultRodVector,
        surfaceVector
      );

      // Apply pitch's initial orientation
      modelGroupRef.current.quaternion.copy(pitchQuat);
    }

    // --- PHASE 2: Apply user adjustments in yaw–pitch style ---
    if (userRotX !== 0 || userRotY !== 0) {
      // "Top" = spin about vertical axis (Y) - maps to userRotX
      const topRad = THREE.MathUtils.degToRad(userRotX);
      const qTop = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        topRad
      );

      // "Front" = tilt about horizontal axis (X) - maps to userRotY  
      const frontRad = THREE.MathUtils.degToRad(userRotY);
      const qFront = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        frontRad
      );

      // Multiply in order: basePitch -> top -> front
      modelGroupRef.current.quaternion.multiply(qTop).multiply(qFront);
    }

    invalidate();
  }, [useSeamOrientation, seam_orientation_lat, seam_orientation_lon, spinAxis, userRotX, userRotY, invalidate]);

  // Updated spin axis rod orientation - now uses direct vector from tilt/gyro
  useEffect(() => {
    if (rodGroupRef.current && spinAxis) {
      const defaultAxis = new THREE.Vector3(1, 0, 0);
      const q = new THREE.Quaternion().setFromUnitVectors(
        defaultAxis,
        spinAxis.clone().normalize()
      );
      rodGroupRef.current.quaternion.copy(q);
      invalidate();
    }
  }, [spinAxis, invalidate]);

  // Spin animation (unchanged)
  useFrame((_, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
      const angle = radPerSec * delta;
      const localX = new THREE.Vector3(1, 0, 0);
      const qSpin = new THREE.Quaternion();
      qSpin.setFromAxisAngle(localX, angle);
      spinGroupRef.current.quaternion.multiplyQuaternions(qSpin, spinGroupRef.current.quaternion);
    }
  });

  return (
    <group>
      <group ref={rodGroupRef}>
        <Rod />
        <group ref={spinGroupRef}>
          <group ref={modelGroupRef}>
            <primitive object={gltf.scene} scale={2} />
          </group>
        </group>
      </group>
    </group>
  );
}

function App() {
  const [pitches, setPitches] = useState([]);
  const [selectedPitchUID, setSelectedPitchUID] = useState(null);
  const [playing, setPlaying] = useState(true);

  const [currentSpinAxis, setCurrentSpinAxis] = useState(new THREE.Vector3(1, 0, 0));
  const [userRotX, setUserRotX] = useState(0);
  const [userRotY, setUserRotY] = useState(0);

  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then(res => res.json())
      .then(data => {
        setPitches(data || []);
        if (data && data.length > 0) {
          setSelectedPitchUID(data[0].PitchUID);
        }
      });
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "pitch_uid") {
        console.log("Pitch UID changed:", e.data.value);
        setSelectedPitchUID(e.data.value);
        setUserRotX(0);
        setUserRotY(0);
      }
      else if (e.data?.type === "slider_update") {
        // Only receive the calculated spin vector from R - no calculations here
        if ('spinVectorX' in e.data && 'spinVectorY' in e.data && 'spinVectorZ' in e.data) {
          const newSpinAxis = new THREE.Vector3(
            e.data.spinVectorX,
            e.data.spinVectorY, 
            e.data.spinVectorZ
          ).normalize();
          
          console.log("Received spin vector - Tilt:", e.data.spinTilt, "Gyro:", e.data.spinGyro, "Vector:", newSpinAxis);
          setCurrentSpinAxis(newSpinAxis);
        }
        
        // Update ball orientation controls
        if ('ballX' in e.data) setUserRotX(e.data.ballX);
        if ('ballY' in e.data) setUserRotY(e.data.ballY);
      } 
      else if (e.data?.type === "play_toggle"){
        setPlaying(Boolean(e.data.value));
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const selectedPitch = useMemo(() => {
    if (!selectedPitchUID || !pitches.length) return null;
    return pitches.find(pitch => pitch.PitchUID === selectedPitchUID) || null;
  }, [selectedPitchUID, pitches]);

  // Initialize spin axis from pitch data when pitch changes
  useEffect(() => {
    if (selectedPitch) {
      const initialVector = new THREE.Vector3(
        selectedPitch.spin_backspin,
        selectedPitch.spin_sidespin,
        -selectedPitch.spin_gyrospin
      ).normalize();
      setCurrentSpinAxis(initialVector);
    }
  }, [selectedPitch]);

  const seam_orientation_lat = selectedPitch?.seam_orientation_lat ?? null;
  const seam_orientation_lon = selectedPitch?.seam_orientation_lon ?? null;

  const spinRateRPM = 50;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel
          spinRate={spinRateRPM}
          playing={playing}
          spinAxis={currentSpinAxis}
          seam_orientation_lat={seam_orientation_lat}
          seam_orientation_lon={seam_orientation_lon}
          userRotX={userRotX}
          userRotY={userRotY}
          useSeamOrientation={true}
        />
      </Canvas>
    </div>
  );
}

export default App;
