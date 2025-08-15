
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import RotationSliders from './components/RotationSliders';
import PlayButton from './components/PlayButton';

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
    <group rotation={[Math.PI / 2, 0, 0]}>
      {/* Rod */}
      <mesh>
        <cylinderGeometry args={[rodRadius, rodRadius, rodLength, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Arrowhead on left */}
      <mesh position={[0, -0.15, 0]} rotation={[Math.PI, Math.PI, 0]}> 
        <coneGeometry args={[tipRadius, tipLength, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

function BaseballModel({ rotX, rotY, orientation, spinRate, playing }) {
  const gltf = useGLTF('/models/baseball.gltf');
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (playing && groupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
      groupRef.current.rotation.z += radPerSec * delta * -1;
    }
  });
  return (
  <group rotation={[Math.PI / 2, 3 * Math.PI / 2, 0]}>
    {/* Applies ball grip orientation */}
    <group rotation={orientation}>
      {/*  TILT GROUP: Rotates about Y (Spin Axis)  */}
      <group rotation={[0, -rotY * Math.PI / 180, 0]}>
        {/*  GYRO GROUP: Rotates about (tilted) X (Perpendicular to Tilt) */}
        <group rotation={[-rotX * Math.PI / 180, 0, 0]}>
          {/* Rod along X */}
          <Rod />
          {/* SPIN GROUP: Rotates about local Z; animated */}
          <group ref={groupRef}>
            <primitive object={gltf.scene} scale={2} />
          </group>
        </group>
      </group>
    </group>
  </group>
);

  // return (
  //   <group rotation={[Math.PI / 2, 3 * Math.PI / 2, 0]}>
  //     <group rotation={rotation}> {/* Gyro + Tilt */}
  //       <Rod />
  //       <group ref={groupRef}> {/* Spin group — rotates around rod */}
  //         <group rotation={orientation}> {/* Ball grip orientation */}
  //           <primitive object={gltf.scene} scale={2} />
  //         </group>
  //       </group>
  //     </group>
  //   </group>
  // );
}


function App() {
  const [orientX, setOrientX] = useState(0);
  const [orientY, setOrientY] = useState(0);

  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [rotZ, setRotZ] = useState(3);
  
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

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 20 }}>
        <PlayButton
          playing={playing}
          onClick={() => setPlaying(p => !p)}
        />
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
        <svg
          width="500"
          height="500"
          viewBox="-150 -150 300 300"
        >
          {/* Clock numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = ((i + 1) / 12) * 2 * Math.PI;
            const radius = 130;
            const x = radius * Math.sin(angle);
            const y = -radius * Math.cos(angle);
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="16"
                fill="black"
              >
                {i + 1}
              </text>
            );
          })}
          <circle cx="0" cy="-2" r="140" stroke="black" fill="none" strokeWidth="1.5" />
        </svg>
      </div>

      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel
          rotY={rotY}        // Y "tilt" axis (degrees)
          rotX={rotX}        // X "gyro" axis (degrees)
          orientation={orientation}
          spinRate={rotZ}
          playing={playing}
        />

        {/* <BaseballModel rotation={rotation} orientation={orientation} spinRate={rotZ} playing={playing} /> */}
        <OrbitControls />
        <axesHelper />
      </Canvas>
    </div>
  );
}

export default App;
