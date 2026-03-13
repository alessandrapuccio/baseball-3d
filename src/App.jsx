// src/App.jsx
import React, { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import Clock from './components/Clock';
import Field from './components/Field';
import BaseballLoading from './components/BaseballLoading';
import { Edges, OrbitControls } from '@react-three/drei';

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

function BaseballModel({ spinRate, playing, spinAxis, currentSeamLat, currentSeamLon, useSeamOrientation, resetSpin, showRod, showStencil, showStamp, gyro_degree }) {
  const gltf = useLoader(
    GLTFLoader,
    "/models/baseball-v2.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );

  const stencil = useLoader(
    GLTFLoader,
    "/models/seam_stamper.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );

  const small_stamp = useLoader(
    GLTFLoader,
    "/models/angled_stamp_ring.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );

  const large_stamp = useLoader(
    GLTFLoader,
    "/models/larger_stamp_ring.glb",
    (loader) => {
      loader.setMeshoptDecoder(MeshoptDecoder);
    }
  );

  const spinGroupRef = React.useRef();
  const modelGroupRef = React.useRef();
  const rodGroupRef = React.useRef();
  const stencilGroupRef = React.useRef();
  const { invalidate } = useThree();

  // just sets the colors there's definitely a better way to do this
 useEffect(() => {
    if (stencil.scene) {
      stencil.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color.set('#686868');
          child.material.needsUpdate = true;
        }
      });
    }
    if (small_stamp.scene) {
      small_stamp.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color.set('#6894a8');
          child.material.needsUpdate = true;
        }
      });
    }
    if (large_stamp.scene) {
      large_stamp.scene.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.color.set('#6894a8');
          child.material.needsUpdate = true;
        }
      });
    }
  }, [stencil, small_stamp]);

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

  // stencil group rotation
  useEffect(() => {
    if (stencilGroupRef.current) {
      stencilGroupRef.current.quaternion.identity();
      
      // Rotate 90 degrees around y axis if gyro_degree is outside +/-45 range
      if (gyro_degree != null && gyro_degree < -45) {
        const gyroQuat = new THREE.Quaternion();
        // gyroQuat.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2); // rotaties around the rod 90
        gyroQuat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2); // rotaties around the rod 90
        stencilGroupRef.current.quaternion.copy(gyroQuat);
      }
      else if (gyro_degree != null && gyro_degree > 45) {
        const gyroQuat = new THREE.Quaternion();
        // gyroQuat.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2); // rotaties around the rod 90
        gyroQuat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2); // rotaties around the rod 90
        stencilGroupRef.current.quaternion.copy(gyroQuat);
      }
      
      invalidate();
    }
  }, [gyro_degree, invalidate]);

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

          <group ref={stencilGroupRef}>
            {showStencil && <primitive object={stencil.scene} scale={.002} />}
          </group>

          {/* <primitive object={small_stamp.scene} scale={.0019} rotation={[0, -Math.PI / 2, 0]}/> */}
          {showStamp && gyro_degree < -45  && <primitive object={small_stamp.scene} scale={.0019} rotation={[0, -Math.PI / 2, 0]} />}
          {showStamp && gyro_degree > 45  && <primitive object={small_stamp.scene} scale={.0019} rotation={[0, Math.PI / 2, 0]} />}
          {showStamp && (gyro_degree < 45 && gyro_degree > -45 ) && <primitive object={large_stamp.scene} scale={.00202} rotation={[0, -Math.PI / 2, 0]} />}
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
  const [showStencil, setShowStencil] = useState(false);
  const [showStamp, setShowStamp] = useState(false);
  const [resetRodDrag, setResetRodDrag] = useState(false)

  const [pitches, setPitches] = useState([]);
  const [selectedPitchUID, setSelectedPitchUID] = useState(null);
  const [playing, setPlaying] = useState(false);

  const [currentSpinAxis, setCurrentSpinAxis] = useState(new THREE.Vector3(1, 0, 0));
  const [currentSeamLat, setCurrentSeamLat] = useState(0);
  const [currentSeamLon, setCurrentSeamLon] = useState(0);
  const [resetSpin, setResetSpin] = useState(false); // New state for reset trigger
  const [gyroDegree, setGyroDegree] = useState(0)
  

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

              setGyroDegree(e.data.spinGyro)

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
          else if (e.data?.type === "stamp_toggle") {
            setShowStamp(Boolean(e.data.value));
          }
          else if (e.data?.type === "stencil_toggle") {
            setShowStencil(Boolean(e.data.value));
          }
          else if (e.data?.type === "reset_ball_drag") {
            setResetRodDrag(Boolean(e.data.value));
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
  const baseballGroupRef = React.useRef();
  const [mouseDown, setMouseDown] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const rotationRef = React.useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setMouseDown(true);
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!mouseDown || !baseballGroupRef.current) return;

    setResetRodDrag(false)

    const deltaX = e.clientX - mousePos.x;
    const deltaY = e.clientY - mousePos.y;

    rotationRef.current.y += deltaX * 0.01;
    rotationRef.current.x += deltaY * -0.01;

    baseballGroupRef.current.rotation.order = 'YXZ';
    baseballGroupRef.current.rotation.y = rotationRef.current.y;
    baseballGroupRef.current.rotation.x = rotationRef.current.x;

    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  useEffect(() => {
    if (resetRodDrag) {
      rotationRef.current = { x: 0, y: 0 };
      if (baseballGroupRef.current) {
        baseballGroupRef.current.rotation.x = 0;
        baseballGroupRef.current.rotation.y = 0;
      }
      setResetRodDrag(false);
    }
  }, [resetRodDrag]);

  return (
    <div 
      style={{ width: "100%", height: "100vh", position: "relative" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <Canvas 
        camera={{ position: [0, 0, 0.47], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        onCreated={({ gl, camera }) => {
          const parent = gl.domElement.parentElement;
          gl.setSize(parent.clientWidth, parent.clientHeight);
          camera.aspect = parent.clientWidth / parent.clientHeight;
          camera.updateProjectionMatrix();
        }}
      >

        {/* Sky */}
        <mesh scale={[50, 50, 50]}>   
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#000000" side={THREE.BackSide} />
        </mesh>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />

        {showField && <Field />}
        {showClock && <Clock />}

        {/* <group ref={baseballGroupRef}> */}
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
              showStencil={showStencil}
              showStamp={showStamp}
              gyro_degree={gyroDegree}
            />
          </Suspense>
        {/* </group> */}

      </Canvas>
    </div>
  );
}

export default App;