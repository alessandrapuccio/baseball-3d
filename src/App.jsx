import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader} from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Rod() {
  return (
    <group>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.0075, 0.0075, 0.3, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0.15, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.015, 0.05, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}

// BaseballModel loads the baseball gltf and spins it
function BaseballModel({ spinRate = 10 }) {
  const gltf = useLoader(GLTFLoader, "/models/baseball.gltf");
  const spinGroupRef = useRef();

  useFrame((state, delta) => {
    if (spinGroupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
      spinGroupRef.current.rotation.x += radPerSec * delta;
    }
  });

  return (
    <group ref={spinGroupRef} rotation={[Math.PI / 2, (3 * Math.PI) / 2, 0]}>
      <primitive object={gltf.scene} scale={2} />
    </group>
  );
}

function App() {
  const spinRateRPM = 10;

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel spinRate={spinRateRPM} />
      </Canvas>
    </div>
  );
}

export default App;
