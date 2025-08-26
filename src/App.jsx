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

  const rodLength = originalLength;
  const tipLength = originalTipLength * .6;
  const tipRadius = originalTipRadius * .6;
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



function BaseballModel({ spinRate, playing, spinAxis, currentSeamLat, currentSeamLon, useSeamOrientation }) {
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

  // Direct seam orientation from lat/lon values
  useEffect(() => {
    if (!modelGroupRef.current) return;

    // Start from identity
    modelGroupRef.current.quaternion.identity();

    // Apply seam orientation directly from current lat/lon values
    if (
      useSeamOrientation &&
      currentSeamLat != null &&
      currentSeamLon != null &&
      !isNaN(currentSeamLat) &&
      !isNaN(currentSeamLon)
    ) {
      const lat = THREE.MathUtils.degToRad(currentSeamLat);
      const lon = THREE.MathUtils.degToRad(currentSeamLon);

      const x = Math.cos(lat) * Math.sin(lon);
      const y = Math.sin(lat);
      const z = Math.cos(lat) * Math.cos(lon);

      const surfaceVector = new THREE.Vector3(-x, y, z).normalize();
      const defaultRodVector = new THREE.Vector3(1, 0, 0);

      const quat = new THREE.Quaternion().setFromUnitVectors(
        defaultRodVector,
        surfaceVector
      );

      modelGroupRef.current.quaternion.copy(quat);
    }

    invalidate();
  }, [useSeamOrientation, currentSeamLat, currentSeamLon, invalidate]);

  // Updated spin axis rod orientation
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

  // Spin animation
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
  const [currentSeamLat, setCurrentSeamLat] = useState(0);
  const [currentSeamLon, setCurrentSeamLon] = useState(0);

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
      }
      else if (e.data?.type === "slider_update") {
        // Receive the calculated spin vector from R
        if ('spinVectorX' in e.data && 'spinVectorY' in e.data && 'spinVectorZ' in e.data) {
          const newSpinAxis = new THREE.Vector3(
            e.data.spinVectorX,
            e.data.spinVectorY,
            e.data.spinVectorZ
          ).normalize();

          console.log("Received spin vector - Tilt:", e.data.spinTilt, "Gyro:", e.data.spinGyro, "Vector:", newSpinAxis);
          setCurrentSpinAxis(newSpinAxis);
        }

        // Update seam orientation directly with lat/lon values
        if ('ballX' in e.data) setCurrentSeamLon(e.data.ballX); // ballX controls longitude
        if ('ballY' in e.data) setCurrentSeamLat(e.data.ballY);  // ballY controls latitude
      }
      else if (e.data?.type === "play_toggle") {
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

  // Initialize both spin axis and seam orientation when pitch changes
  useEffect(() => {
    if (selectedPitch) {
      // Initialize spin axis
      const initialVector = new THREE.Vector3(
        selectedPitch.spin_backspin,
        selectedPitch.spin_sidespin,
        -selectedPitch.spin_gyrospin
      ).normalize();
      setCurrentSpinAxis(initialVector);

      // Initialize seam orientation
      setCurrentSeamLat(selectedPitch.seam_orientation_lat || 0);
      setCurrentSeamLon(selectedPitch.seam_orientation_lon || 0);
    }
  }, [selectedPitch]);

  const spinRateRPM = 50;
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0.55], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />

        {/* ground */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.14, -4]}>
          <planeGeometry args={[20, 16]} />
          <meshPhongMaterial color="#489147" />
        </mesh>

        {/* Dirt circle around home plate */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.139, -5.76]}>
          <circleGeometry args={[1, 64]} />
          <meshPhongMaterial color="#DEB887" />
        </mesh>

      {/* Home plate (point faces into the field) */}
      <mesh rotation={[-Math.PI / 2, 0, Math.PI]} position={[0, -1.138, -5.6]}>
        <shapeGeometry args={[
          (() => {
            const s = new THREE.Shape();
            s.moveTo(-0.2, 0.2);
            s.lineTo(0.2, 0.2);
            s.lineTo(0.2, -0.24);
            s.lineTo(0.00, -0.56);   // point into the screen/field
            s.lineTo(-0.2, -0.24);
            s.lineTo(-0.2, 0.2);
            return s;
          })()
        ]} />
        <meshBasicMaterial color="white" />
      </mesh>

        {/* First base line (starts from outside corner of right batter's box closest to viewer) */}
        <mesh rotation={[-Math.PI / 2, 0, -Math.PI / 4]} position={[-3, -1.049, -2.3]}>
          <planeGeometry args={[0.02, 7]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Third base line (starts from outside corner of left batter's box closest to viewer) */}
        <mesh rotation={[-Math.PI / 2, 0, Math.PI / 4]} position={[3, -1.049, -2.3]}>
          <planeGeometry args={[0.02, 7]} />
          <meshBasicMaterial color="white" />
        </mesh>

        {/* Right batter's box outline (narrower) */}
        <group position={[0.45, -1.137, -5.6]}>
          {/* Top edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Bottom edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Left edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Right edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>

        {/* Left batter's box outline (narrower) */}
        <group position={[-0.45, -1.137, -5.6]}>
          {/* Top edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Bottom edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.4]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Left edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
          {/* Right edge */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.15, 0, 0]}>
            <planeGeometry args={[0.02, 0.8]} />
            <meshBasicMaterial color="white" />
          </mesh>
        </group>

        {/* Baseball + spin axis rod */}
        <BaseballModel
          spinRate={spinRateRPM}
          playing={playing}
          spinAxis={currentSpinAxis}
          currentSeamLat={currentSeamLat}
          currentSeamLon={currentSeamLon}
          useSeamOrientation={true}
        />
      </Canvas>
    </div>
  );

}

export default App;
