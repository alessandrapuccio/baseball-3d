import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PlayButton from "./components/PlayButton";
import * as THREE from "three";
import SpinAxisSliders from "./components/SpinAxisSliders";
import PitchInfoPanels from "./components/PitchInfoPanels";
import BallOrientationSliders from "./components/BallOrientationSliders";
import { AxesHelper } from 'three';

function Rod() {
  // og
  const originalLength = 0.3;
  const originalTipLength = 0.05;
  const originalTipRadius = 0.015;
  const originalRodRadius = 0.0075;

  // Scaled values
  const rodLength = originalLength * 15;
  const tipLength = originalTipLength * 8;
  const tipRadius = originalTipRadius * 8;
  const rodRadius = originalRodRadius * 8;
  const tipPositionX = rodLength / 2;

  return (
    <group>
      {/* Rod along X axis (rotated from Z by default) */}
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

function BaseballModel({ spinRate, playing, spinAxis, seam_orientation_lat, seam_orientation_lon, userRotX, userRotY }) {
  const gltf = useGLTF("/models/baseball.gltf");
  const spinGroupRef = useRef();
  const modelGroupRef = useRef();
  const rodGroupRef = useRef();

  /////making purple dt
  // Convert lat/lon to radians
  const latRad = (seam_orientation_lat * Math.PI) / 180;
  const lonRad = (seam_orientation_lon * Math.PI) / 180;
 
  // Find the  point on a unit sphere (radius = 1)
  const markerPosition = useMemo(() => {
    const x = Math.cos(latRad) * Math.cos(lonRad); // X = cos(lat) * cos(lon)
    const y = Math.sin(latRad);                    // Y = sin(lat)
    const z = Math.cos(latRad) * Math.sin(lonRad); // Z = cos(lat) * sin(lon)
    console.log("x: ", x, " y: ", y," z: ", z)
    return new THREE.Vector3(x, y, z);
  }, [seam_orientation_lat, seam_orientation_lon]);

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

useEffect(() => {
  if (!modelGroupRef.current) return;

  // STEP 1 — Start from identity
  modelGroupRef.current.quaternion.identity();

  // --- PHASE 1: Apply pitch's starting seam orientation from lat/lon ---
  if (
    seam_orientation_lat != null &&
    seam_orientation_lon != null &&
    spinAxis
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
  // "Top" = spin about vertical axis (Y)
  const topRad = THREE.MathUtils.degToRad(userRotX);
  const qTop = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(0, 1, 0),
    topRad
  );

  // "Front" = tilt about horizontal axis (X)
  const frontRad = THREE.MathUtils.degToRad(userRotY);
  const qFront = new THREE.Quaternion().setFromAxisAngle(
    new THREE.Vector3(1, 0, 0),
    frontRad
  );

  // Multiply in order: basePitch -> top -> front
  modelGroupRef.current.quaternion.multiply(qTop).multiply(qFront);

}, [seam_orientation_lat, seam_orientation_lon, spinAxis, userRotX, userRotY]);

  // Spin axis rod orientation (SAME AS B4)
  useEffect(() => {
    if (rodGroupRef.current) {
      if (spinAxis) {
        const defaultAxis = new THREE.Vector3(1, 0, 0);
        const q = new THREE.Quaternion().setFromUnitVectors(
          defaultAxis,
          spinAxis.clone().normalize()
        );
        rodGroupRef.current.quaternion.copy(q);
      } else {
        rodGroupRef.current.quaternion.identity();
      }
    }
  }, [spinAxis]);

  // Spin animation around spinAxis
  useFrame((state, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
      const angle = radPerSec * delta;
      const localX = new THREE.Vector3(1, 0, 0);
      const qSpin = new THREE.Quaternion();
      qSpin.setFromAxisAngle(localX, angle);
      spinGroupRef.current.quaternion.multiplyQuaternions(qSpin, spinGroupRef.current.quaternion);
    }
  });

  const axesHelper = new AxesHelper(1);
  axesHelper.setColors(0xff00ff, 0x00ffff, 0x00ff00);

  return (
    <group>
      <group ref={rodGroupRef}>
        <Rod />
        <group ref={spinGroupRef}> 
          <group ref={modelGroupRef}>
            <primitive object={gltf.scene} scale={28} />
            <primitive object={axesHelper} />
          </group>
        </group>
      </group>
        <mesh position={markerPosition}>
          <sphereGeometry args={[0.03, 16, 16]} /> 
          <meshStandardMaterial color="purple" />
        </mesh>
    </group>
  );  
}

function App() {
  const [userRotX, setUserRotX] = useState(0);
  const [userRotY, setUserRotY] = useState(0);
  const [pitches, setPitches] = useState([]);
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(0);
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    fetch("/gilbert_augEighth.json").then((res) => res.json()).then((data) => setPitches(data || []));
  }, []);

  const selectedPitch = pitches[selectedPitchIdx] || null;

  const [userSpinAxis, setUserSpinAxis] = useState(null);

  // get lat/lon from pitch/user 
  const seam_orientation_lat = selectedPitch?.seam_orientation_lat ?? 0;
  const seam_orientation_lon = selectedPitch?.seam_orientation_lon ?? 0;
 
  const spinAxisVector = useMemo(() => {
    if (userSpinAxis) return userSpinAxis;
    if (!selectedPitch) return new THREE.Vector3(1, 0, 0);
    return new THREE.Vector3(
      selectedPitch.spin_backspin,
      selectedPitch.spin_sidespin,
      -selectedPitch.spin_gyrospin
      // -selectedPitch.spin_x, 
      // selectedPitch.spin_z,
      // selectedPitch.spin_y,
    ).normalize();
  }, [selectedPitch, userSpinAxis]);

  const spinRateRPM = 50;

  const axesHelper = new AxesHelper(5);
  axesHelper.setColors(0x000000, 0x0000d8, 0x873e23);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", top: 20, right: 20, zIndex: 20 }}>
        <PlayButton playing={playing} onClick={() => setPlaying((p) => !p)} />
      </div>
      <div style={{ position: "absolute", top: 20, left: 20, zIndex: 20 }}>
        {pitches.length > 0 && (
          <select
            value={selectedPitchIdx}
            onChange={(e) => setSelectedPitchIdx(Number(e.target.value))}
            style={{
              padding: 8,
              borderRadius: 6,
              fontFamily: "sans-serif",
              fontSize: 16,
              minWidth: 300,
            }}
          >
            {pitches.map((pitch, idx) => (
              <option key={idx} value={idx}>
                Pitch: {pitch.PitchNumber} Pitch Type: {pitch.PitchType}
              </option>
            ))}
          </select>
        )}
      </div>

      <BallOrientationSliders
        onOrientationChange={({ rotX, rotY }) => {
          setUserRotX(rotX);
          setUserRotY(rotY);
        }}
        pitchKey={
          selectedPitch && selectedPitch.PitchUID != null
            ? selectedPitch.PitchUID
            : ""
        }
      />

      <SpinAxisSliders
        initialSpinAxis={
          selectedPitch
            ? new THREE.Vector3(
                selectedPitch.spin_backspin,
                selectedPitch.spin_sidespin,
                -selectedPitch.spin_gyrospin
                // -selectedPitch.spin_x,
                // selectedPitch.spin_z,
                // selectedPitch.spin_y,
              ).normalize() 
            : new THREE.Vector3(1, 0, 0)
        }
        pitchKey={selectedPitch && selectedPitch.PitchUID != null ? selectedPitch.PitchUID : ""}
        onSpinAxisChange={setUserSpinAxis}
      />
      <PitchInfoPanels
        selectedPitch={selectedPitch}
        userSpinAxis={userSpinAxis}
        // orientation panel omitted
      />
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />

        <BaseballModel
          spinRate={spinRateRPM}
          playing={playing}
          spinAxis={spinAxisVector}
          seam_orientation_lat={seam_orientation_lat}
          seam_orientation_lon={seam_orientation_lon}
          userRotX={userRotX}
          userRotY={userRotY}
        />

        <OrbitControls />
        <primitive object={axesHelper} />
      </Canvas>
    </div>
  );
}

export default App;
