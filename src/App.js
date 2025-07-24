
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

function BaseballModel({ rotX, rotZ, rotY, orientation, spinRate, playing }) {
  const gltf = useGLTF('/models/baseball.gltf');
  const spinGroupRef = useRef();

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, 3 * Math.PI / 2, 0);
    }
  }, [gltf]);

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
            {/* Orientation affects ONLY the ball model now */}
            <group rotation={orientation}>
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
          rotZ={rotZ}
          rotY={rotY}        // Y "tilt" axis (degrees)
          rotX={rotX}        // X "gyro" axis (degrees)
          orientation={orientation}
          spinRate={rotX}
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
