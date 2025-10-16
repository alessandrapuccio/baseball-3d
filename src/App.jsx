// src/App.jsx
import React, { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import Clock from './components/Clock';
import Field from './components/Field';
import BaseballLoading from './components/BaseballLoading';
import { OrbitControls } from '@react-three/drei';


function BackSpinSeamStamp() {
  const torusRadius = 0.075; // Major radius (distance from center to middle of tube)
  const tubeRadius = 0.0041; // Minor radius (thickness of the band)

  return (
    <mesh position={[-0.003, 0, 0]}>
      <torusGeometry args={[torusRadius, tubeRadius, 32, 100]} />
      <meshStandardMaterial color="#990099" />
    </mesh>
  );
}
// function BackSpinSeamStamp() {
//   const innerRadius = 0.08;  // Smaller radius
//   const outerRadius = 0.0059;   // Slightly larger for thickness

//   return (
//     <mesh>
//       <ringGeometry args={[outerRadius, innerRadius, 64]} />
//       <meshStandardMaterial color="#990099" side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function BackSpinSeamStamp({
//   ballRadius = 0.05,      // radius of your baseball
//   latDeg = 10,            // latitude in degrees (positive => above equator)
//   lonDeg = 10,            // longitude in degrees
//   innerRadius = 0.075,    // inner radius of flat ring
//   thickness = 0.006,      // radial thickness (outer - inner)
//   epsilon = 0.000        // small offset so ring sits on top of sphere
// }) {
//   const meshRef = useRef();

//   useEffect(() => {
//     // Convert degrees -> spherical coordinates
//     // theta: polar angle from +Y axis, phi: azimuth from +X
//     const lat = THREE.MathUtils.degToRad(latDeg);   // lat from equator
//     const lon = THREE.MathUtils.degToRad(lonDeg);

//     // We want the surface normal of the sphere at (lat, lon).
//     // Convert from lat/lon to Cartesian. This convention places Y as "up".
//     // theta measured from +Y: theta = (90deg - lat)
//     const theta = THREE.MathUtils.degToRad(90 - latDeg);
//     const phi = lon;

//     const x = ballRadius * Math.sin(theta) * Math.cos(phi);
//     const y = ballRadius * Math.cos(theta);
//     const z = ballRadius * Math.sin(theta) * Math.sin(phi);

//     const normal = new THREE.Vector3(x, y, z).normalize();

//     if (!meshRef.current) return;

//     // Position the ring so it's centered at the tangent point, nudged out by epsilon
//     const position = normal.clone().multiplyScalar(ballRadius + epsilon);
//     meshRef.current.position.copy(position);

//     // Align the ring's local +Z axis (default for RingGeometry) to the surface normal
//     // So the ring's plane becomes tangent to the sphere.
//     const from = new THREE.Vector3(0, 0, 1); // ring's initial normal
//     const to = normal.clone();
//     const q = new THREE.Quaternion().setFromUnitVectors(from, to);
//     meshRef.current.quaternion.copy(q);

//     // Optional: if you have a separate "rod" or other transform to match,
//     // you can further rotate the ring around the normal to match seam orientation.
//     // Example: meshRef.current.rotateOnAxis(normal, someAngleRadians);

//   }, [ballRadius, latDeg, lonDeg, epsilon]);

//   return (
//     <mesh ref={meshRef}>
//       <ringGeometry args={[innerRadius, innerRadius + thickness, 128]} />
//       <meshStandardMaterial color="#990099" side={THREE.DoubleSide} />
//     </mesh>
//   );
// }

// function BackSpinSeamStamp({
//   ballRadius = 0.08,
//   thickness = 0.003,  // how thick the marker stroke is
//   width = 0.01        // how wide the band appears
// }) {
//   const path = useMemo(() => {
//     const curve = new THREE.Curve();
//     curve.getPoint = t => {
//       const angle = t * Math.PI * 2;
//       return new THREE.Vector3(
//         Math.cos(angle) * ballRadius,
//         Math.sin(angle) * ballRadius,
//         0
//       );
//     };
//     return curve;
//   }, [ballRadius]);

//   const material = new THREE.MeshStandardMaterial({ color: "#990099" });

//   return (
//     <mesh>
//       {/* TubeGeometry(path, segments, radius, radialSegments, closed) */}
//       <tubeGeometry args={[path, 200, thickness, 16, true]} />
//       <meshStandardMaterial color="#990099" />
//     </mesh>
//   );
// }



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

function BaseballModel({ spinRate, playing, spinAxis, currentSeamLat, currentSeamLon, useSeamOrientation, resetSpin, showRod, showBackSpinSeamStamp  }) {
  // const gltf = useLoader(GLTFLoader, "/models/baseball-v2.glb");
  const gltf = useLoader(
    GLTFLoader,
    "/models/baseball-v2.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );
  const spinGroupRef = React.useRef();
  const modelGroupRef = React.useRef();
  const rodGroupRef = React.useRef();
  const { invalidate } = useThree();
 
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

  useEffect(() => {
    if (spinGroupRef.current) {
      spinGroupRef.current.quaternion.identity();
      invalidate();
    }
  }, [resetSpin, invalidate]);

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
        
          {showRod && <Rod />}
          {showBackSpinSeamStamp && <BackSpinSeamStamp />}


        <group ref={spinGroupRef}>
          <group ref={modelGroupRef}>
            <primitive object={gltf.scene} scale={2.2} />
          </group>
        </group>
      </group>
    </group>
  );
}


function App() {
  const [showClock, setShowClock] = useState(true);
  const [showField, setShowField] = useState(true);
  const [showRod, setShowRod] = useState(true);
  const [showBackSpinSeamStamp, setShowBackSpinSeamStamp] = useState(true);

  const [pitches, setPitches] = useState([]);
  const [selectedPitchUID, setSelectedPitchUID] = useState(null);
  const [playing, setPlaying] = useState(false);

  const [currentSpinAxis, setCurrentSpinAxis] = useState(new THREE.Vector3(1, 0, 0));
  const [currentSeamLat, setCurrentSeamLat] = useState(0);
  const [currentSeamLon, setCurrentSeamLon] = useState(0);
  const [resetSpin, setResetSpin] = useState(false); // New state for reset trigger

  

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

              // console.log("Received spin vector - Tilt:", e.data.spinTilt, "Gyro:", e.data.spinGyro, "Vector:", newSpinAxis);
              setCurrentSpinAxis(newSpinAxis);
            }

            // Update seam orientation directly with lat/lon values
            if ('ballX' in e.data) setCurrentSeamLon(e.data.ballX); // ballX controls longitude
            if ('ballY' in e.data) setCurrentSeamLat(e.data.ballY);  // ballY controls latitude
          }
          else if (e.data?.type === "play_toggle") {
            setPlaying(Boolean(e.data.value));
          }
          else if (e.data?.type === "reset_spin_rotation") {
            setResetSpin(prev => !prev); // Toggle to trigger reset
          }
          else if (e.data?.type === "clock_toggle") {
            setShowClock(Boolean(e.data.value));
          }
          else if (e.data?.type === "field_toggle") {
            setShowField(Boolean(e.data.value));
          }
          else if (e.data?.type === "rod_toggle") {
            setShowRod(Boolean(e.data.value));
          }
          else if (e.data?.type === "backspinseamstamp_toggle") {
            setShowBackSpinSeamStamp(Boolean(e.data.value));
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

    // Add resize listener for sidebar toggles
  useEffect(() => {
    const handleResize = () => {
      // This will trigger Three.js canvas resize
      window.dispatchEvent(new Event('resize'));
    };

    // Listen for sidebar transitions via body class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          // Delay to let sidebar animation complete
          setTimeout(handleResize, 350);
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const spinRateRPM = 50;

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Canvas 
        camera={{ position: [0, 0, 0.47], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl, camera }) => {
          // Ensure proper sizing on mount
          const parent = gl.domElement.parentElement;
          gl.setSize(parent.clientWidth, parent.clientHeight);
          camera.aspect = parent.clientWidth / parent.clientHeight;
          camera.updateProjectionMatrix();
        }}
      >

        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Sky */}
        <mesh scale={[50, 50, 50]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#000000" side={THREE.BackSide} />
        </mesh>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />

        {showField && <Field />}
        {showClock && <Clock />}

        <Suspense fallback={<BaseballLoading />}>
          <BaseballModel 
            spinRate={spinRateRPM} 
            playing={playing} 
            spinAxis={currentSpinAxis} 
            currentSeamLat={currentSeamLat} 
            currentSeamLon={currentSeamLon} 
            useSeamOrientation={true} 
            resetSpin={resetSpin} 
            showRod={showRod}
            showBackSpinSeamStamp={showBackSpinSeamStamp}
          />
        </Suspense>
      </Canvas>
    </div>
  );

}

export default App;