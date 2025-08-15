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
        <meshStandardMaterial color="blue" />
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

  // NEW TWO-PHASE ROTATION LOGIC
  useEffect(() => {
    if (!modelGroupRef.current) return;

    console.log("Applying rotation - Lat:", seam_orientation_lat, "Lon:", seam_orientation_lon, "UserRotX:", userRotX, "UserRotY:", userRotY);

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
      console.log("Applying Phase 1 - seam orientation");
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
      console.log("Phase 1 applied - surface vector:", surfaceVector);
    } else {
      console.log("Skipping Phase 1 - missing seam orientation data");
    }

    // --- PHASE 2: Apply user adjustments in yaw–pitch style ---
    if (userRotX !== 0 || userRotY !== 0) {
      console.log("Applying Phase 2 - user adjustments");
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

  // Spin axis rod orientation (unchanged)
  useEffect(() => {
    if (rodGroupRef.current) {
      if (useSeamOrientation && spinAxis) {
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
    invalidate();
  }, [spinAxis, useSeamOrientation, invalidate]);

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

  const [userSpinAxis, setUserSpinAxis] = useState(null);
  const [userRotX, setUserRotX] = useState(0);
  const [userRotY, setUserRotY] = useState(0);

  const [lastSliderUpdate, setLastSliderUpdate] = useState(null);

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

  // NEW: handle dropdown change
  const handlePitchChange = (e) => {
    const uid = e.target.value;
    setSelectedPitchUID(uid);
    setUserSpinAxis(null);
    setUserRotX(0);
    setUserRotY(0);
    setLastSliderUpdate(null);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "pitch_uid") {
        setSelectedPitchUID(e.data.value);
        setUserSpinAxis(null);
        setUserRotX(0); 
        setUserRotY(0);
        setLastSliderUpdate(null);
      }
      else if (e.data?.type === "slider_update") {
        console.log("beep ========== beeep ============")
        setLastSliderUpdate(Date.now());
        if ('spinTilt' in e.data && 'spinGyro' in e.data) {
          console.log("beepING ========== beeepING ============")
          // const tilt = THREE.MathUtils.degToRad(e.data.spinTilt);
          // const gyro = THREE.MathUtils.degToRad(e.data.spinGyro);
          // const x = Math.cos(tilt);
          // const y = Math.sin(tilt) * Math.sin(gyro);
          // const z = Math.sin(tilt) * Math.cos(gyro);
          // setUserSpinAxis(new THREE.Vector3(x, y, z).normalize());
          
          // FIXED CONVERSION: Match the R calculation logic
          const tiltRad = THREE.MathUtils.degToRad(e.data.spinTilt);
          const gyroRad = THREE.MathUtils.degToRad(e.data.spinGyro);
          // This matches your R logic: tilt = acos(x), gyro = atan2(y,z)
          const x = Math.cos(tiltRad);
          const r_perp = Math.sin(tiltRad);
          const y = r_perp * Math.sin(gyroRad);
          const z = r_perp * Math.cos(gyroRad);
          
          setUserSpinAxis(new THREE.Vector3(x, y, z).normalize());
        }
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

  // const spinAxisVector = useMemo(() => {
  //   if (userSpinAxis) return userSpinAxis;
  //   if (!selectedPitch) return new THREE.Vector3(1, 0, 0);
  //   return new THREE.Vector3(
  //     selectedPitch.spin_backspin,
  //     selectedPitch.spin_sidespin,
  //     -selectedPitch.spin_gyrospin
  //     // -selectedPitch.spin_x,
  //     // selectedPitch.spin_z,
  //     // selectedPitch.spin_y,
  //   ).normalize();
  // }, [selectedPitch, userSpinAxis]);
  const spinAxisVector = useMemo(() => {
    if (userSpinAxis) return userSpinAxis;
    if (!selectedPitch) return new THREE.Vector3(1, 0, 0);
    
    // Convert from MLB coordinates to ThreeJS coordinates
    const mlb_x = selectedPitch.spin_backspin;
    const mlb_y = selectedPitch.spin_sidespin;
    const mlb_z = -selectedPitch.spin_gyrospin;
    
    // MLB: -y is up, -z is toward pitcher, x is same
    // ThreeJS: +y is up, +z is toward pitcher, x is same  
    const threejs_x = mlb_x;
    const threejs_y = mlb_y;  // Flip Y
    const threejs_z = mlb_z;  // Flip Z
    
    return new THREE.Vector3(threejs_x, threejs_y, threejs_z).normalize();
  }, [selectedPitch, userSpinAxis]);
  

  const seam_orientation_lat = selectedPitch?.seam_orientation_lat ?? null;
  const seam_orientation_lon = selectedPitch?.seam_orientation_lon ?? null;

  const spinRateRPM = 50;

  return (
    // dropdown
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1 }}>
         <select value={selectedPitchUID || ""} onChange={handlePitchChange}>
           {pitches.map(p => ( 
             <option key={p.PitchUID} value={p.PitchUID}>
               Pitch #{p.PitchNumber} – {p.PitchType}
             </option>
           ))}
         </select> 
        </div>

      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
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
          useSeamOrientation={true}
        />
      </Canvas>
    </div>
  );
}

export default App;