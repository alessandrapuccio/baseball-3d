
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import RotationSliders from './components/RotationSliders';
import PlayButton from './components/PlayButton';
import * as THREE from "three";

function Rod() {
  return (
    <group>
      {/* Rod along X axis */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.0075, 0.0075, 0.3, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Arrowhead on left (negative X direction) */}
      <mesh position={[-0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.015, 0.05, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

function BaseballModel({
  rotX, rotZ, rotY, orientation, spinRate, playing,
  seamOrientation, useSeamOrientation
}) {
  const gltf = useGLTF('/models/baseball.gltf');
  const spinGroupRef = useRef();
  const modelGroupRef = useRef();

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
    }
  }, [gltf]);

  // Apply seams (Hawk-Eye matrix → quaternion) OR user controls
  useEffect(() => {
    if (modelGroupRef.current) {
      if (useSeamOrientation && seamOrientation) {
        // Build Hawk-Eye Quaternion from matrix
        const m4 = new THREE.Matrix4();
        m4.set(
          seamOrientation.xx, seamOrientation.xy, seamOrientation.xz, 0,
          seamOrientation.yx, seamOrientation.yy, seamOrientation.yz, 0,
          seamOrientation.zx, seamOrientation.zy, seamOrientation.zz, 0,
          0, 0, 0, 1
        );
        const q = new THREE.Quaternion();
        q.setFromRotationMatrix(m4);
        modelGroupRef.current.quaternion.copy(q);
      } else {
        // Use user orientation controls: Euler angles (radians)
        // Note: orientation = [x, y, z] in radians
        modelGroupRef.current.rotation.set(...orientation);
        modelGroupRef.current.quaternion.identity(); // Clear any previous quaternion
      }
    }
  }, [useSeamOrientation, seamOrientation, orientation]);

  // Spin logic stays the same
  useFrame((state, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = (-spinRate * 2 * Math.PI) / 60;
      spinGroupRef.current.rotation.x += radPerSec * delta * -1;
    }
  });

  return (
    <group>
      {/* TILT GROUP: rotates around Z (Spin Axis) */}
      <group rotation={[0, 0, -rotZ * Math.PI / 180]}>
        {/* GYRO GROUP: rotates around Y (perpendicular to tilt) */}
        <group rotation={[0, -rotY * Math.PI / 180, 0]}>
          <Rod />
          {/* SPIN GROUP: spins about X */}
          <group ref={spinGroupRef}>
            {/* This group handles either orientation or seamOrientation */}
            <group ref={modelGroupRef}>
              <primitive object={gltf.scene} scale={2} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function App() {
  const [orientX, setOrientX] = useState(0);
  const [orientY, setOrientY] = useState(0);

  const [rotX, setRotX] = useState(3);
  const [rotY, setRotY] = useState(0);
  const [rotZ, setRotZ] = useState(0);

  const [playing, setPlaying] = useState(false);

  const orientation = [
    (orientX * Math.PI) / 180,
    (orientY * Math.PI) / 180,
    0,
  ];

  const rotation = [
    -(rotX * Math.PI) / 180,
    -(rotY * Math.PI) / 180,
    0,
  ];

  {/* SeamO True False */ }
  const [useSeamOrientation, setUseSeamOrientation] = useState(false);
  {/* SeamO Coordinates */ }
  const [seamOrientation, setSeamOrientation] = useState(null);
  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then(res => res.json())
      .then(data => {
        const pitch = data[0];
        const orientation = {
          xx: pitch.seam_orientation_xx,
          xy: pitch.seam_orientation_xy,
          xz: pitch.seam_orientation_xz,
          yx: pitch.seam_orientation_yx,
          yy: pitch.seam_orientation_yy,
          yz: pitch.seam_orientation_yz,
          zx: pitch.seam_orientation_zx,
          zy: pitch.seam_orientation_zy,
          zz: pitch.seam_orientation_zz
        };
        setSeamOrientation(orientation);
      });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 20 }}>
        <PlayButton
          playing={playing}
          onClick={() => setPlaying(p => !p)}
        />
      </div>

    {/* SeamO data button */}
    <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 11 }}>
      {/* SeamO data button */}
      <button
        style={{
          marginBottom: 8,
          padding: 8,
          borderRadius: 6,
          background: useSeamOrientation ? "#4caf50" : "#eee",
          color: useSeamOrientation ? "#fff" : "#000",
          fontFamily: 'sans-serif',
        }}
        onClick={() => setUseSeamOrientation(v => !v)}
      >
        {useSeamOrientation ? 'Using Hawk-Eye Pitch Orientation' : 'Using Manual Controls'}
      </button>
    </div>

      <RotationSliders // passing in the fucntions so that within the slider component the functions can be called w the info from the sliders. need access to them over there. i am not passing in values here.
        rotX={rotX} setRotX={setRotX}
        rotY={rotY} setRotY={setRotY}
        rotZ={rotZ} setRotZ={setRotZ}
        orientX={orientX} setOrientX={setOrientX}
        orientY={orientY} setOrientY={setOrientY}
        playing={playing} setPlaying={setPlaying}
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allows interaction to pass through to canvas
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      }}>

      </div>

        <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 0, 0.3]} intensity={1} />
          <BaseballModel
            rotZ={rotZ}
            rotY={rotY}       
            rotX={rotX}   // spin action     
            orientation={orientation}
            spinRate={rotX}
            playing={playing}
            seamOrientation={seamOrientation}
            useSeamOrientation={useSeamOrientation}
          />

          {/* <BaseballModel rotation={rotation} orientation={orientation} spinRate={rotZ} playing={playing} /> */}
          <OrbitControls />
          <axesHelper />
        </Canvas>
      </div>
    );
  }

  // return (
  //   <div style={{ width: '100vw', height: '100vh' }}>
  //     {/* Play button in top-right */}
  //     <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 20 }}>
  //       <PlayButton
  //         playing={playing}
  //         onClick={() => setPlaying(p => !p)}
  //       />
  //     </div>

  //     {/* SeamO toggle button + sliders in top-left */}
  //     <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
  //       {/* SeamO data toggle button */}
  //       <button
  //         style={{
  //           marginBottom: 8,
  //           padding: 8,
  //           borderRadius: 6,
  //           background: useSeamOrientation ? "#4caf50" : "#eee",
  //           color: useSeamOrientation ? "#fff" : "#000",
  //           fontFamily: 'sans-serif',
  //           fontSize: 14,
  //           width: '100%',
  //         }}
  //         onClick={() => setUseSeamOrientation(v => !v)}
  //       >
  //         {useSeamOrientation ? 'Using Hawk-Eye Pitch Orientation' : 'Using Manual Controls'}
  //       </button>

  //       {/* Rotation sliders */}
  //       <RotationSliders
  //         rotX={rotX} setRotX={setRotX}
  //         rotY={rotY} setRotY={setRotY}
  //         rotZ={rotZ} setRotZ={setRotZ}
  //         orientX={orientX} setOrientX={setOrientX}
  //         orientY={orientY} setOrientY={setOrientY}
  //         playing={playing} setPlaying={setPlaying}
  //       />
  //     </div>

  //     {/* Transparent overlay (centered content if needed) */}
  //     <div style={{
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%',
  //       height: '100%',
  //       pointerEvents: 'none',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       zIndex: 10,
  //     }}>
  //       {/* Add any centered UI here if needed */}
  //     </div>

  //     {/* 3D Canvas */}
  //     <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
  //       <ambientLight intensity={1} />
  //       <directionalLight position={[0, 0, 0.3]} intensity={1} />
  //       <BaseballModel
  //         rotZ={rotZ}
  //         rotY={rotY}
  //         rotX={rotX}
  //         orientation={orientation}
  //         spinRate={rotX}
  //         playing={playing}
  //         seamOrientation={seamOrientation}
  //         useSeamOrientation={useSeamOrientation}
  //       />
  //       <OrbitControls />
  //       <axesHelper />
  //     </Canvas>
  //   </div>
  // );}

  export default App;
