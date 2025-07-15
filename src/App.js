
import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import RotationSliders from './components/RotationSliders';
import PlayButton from './components/PlayButton';

function Rod() {
  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {/* Rod */}
      <mesh>
        <cylinderGeometry args={[0.0075, 0.0075, 0.3, 32]} /> {/* left width, right width, lenght, how precise the curves are*/}
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Arrowhead on right */}
      <mesh position={[0, -0.15, 0]} rotation={[0, 0, -Math.PI ]}>
        <coneGeometry args={[0.015, 0.05, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

function BaseballModel({ rotation, spinRate, playing }) {
  const gltf = useGLTF('/models/baseball.gltf');
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (playing && groupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60; // convert RPM to rad/s (fix this this is wrong fs)
      groupRef.current.rotation.z += radPerSec * delta;
    }
  });

  return (
    <group rotation={[Math.PI / 2, 3 * Math.PI / 2, 0]}>
      <group ref={groupRef} rotation={rotation}>
        <primitive object={gltf.scene} scale={2} />
        <Rod />
      </group>
    </group>
  );
}


function App() {
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [rotZ, setRotZ] = useState(0);
  const [playing, setPlaying] = useState(false);

  const rotation = [
    -(rotX * Math.PI) / 180,
    -(rotY * Math.PI) / 180,
    (rotZ * Math.PI) / 180,
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
        playing={playing} setPlaying={setPlaying}
      />
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel rotation={rotation} spinRate={rotZ} playing={playing} />
        <OrbitControls />
        <axesHelper />


      </Canvas>
    </div>
  );
}

export default App;
