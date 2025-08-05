import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


// -- Rod visual --
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

// -- Main 3D Visual --
function BaseballModel({ spinRate, playing, seamOrientation, spinAxis, useSeamOrientation }) {
  const gltf = useLoader(GLTFLoader, "/models/baseball.gltf");
  const spinGroupRef = useRef();
  const modelGroupRef = useRef();
  const rodGroupRef = useRef();

  // Align ball on mount
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

  // Apply ball orientation
  useEffect(() => { 
    if (modelGroupRef.current) {
      if (useSeamOrientation && seamOrientation) {
        const m4 = new THREE.Matrix4();
        m4.set(
          seamOrientation.xx, -seamOrientation.yx, -seamOrientation.zx, 0,
          seamOrientation.xy, -seamOrientation.yy, -seamOrientation.zy, 0,
          seamOrientation.xz, -seamOrientation.yz, -seamOrientation.zz, 0,
          0, 0, 0, 1
        );
        const q = new THREE.Quaternion();
        q.setFromRotationMatrix(m4);
        modelGroupRef.current.quaternion.copy(q);
      } else {
        modelGroupRef.current.quaternion.identity();
        modelGroupRef.current.rotation.set(0, 0, 0);
      }
    }
  }, [useSeamOrientation, seamOrientation]);

  // Align rod with spinAxis
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
  }, [spinAxis, useSeamOrientation]);


  // Spin ball animation
  useFrame((state, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = 5; //(spinRate * 2 * Math.PI) / 60;
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

// Utility to strip seamOrientation matrix from pitch object 
function getSeamOrientationObj(pitch) {
  if (!pitch) return null;
  return {
    xx: pitch.seam_orientation_xx,
    xy: pitch.seam_orientation_xy,
    xz: pitch.seam_orientation_xz,
    yx: pitch.seam_orientation_yx,
    yy: pitch.seam_orientation_yy,
    yz: pitch.seam_orientation_yz,
    zx: pitch.seam_orientation_zx,
    zy: pitch.seam_orientation_zy,
    zz: pitch.seam_orientation_zz,
  };
}

// App root 
function App() {
  const [pitches, setPitches] = useState([]);
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(0);

  // Listen for messages from Shiny (selectedPitchIdx)
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "pitch_idx") {
        setSelectedPitchIdx(Number(e.data.value));
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // Load pitch data from local file
  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then(res => res.json())
      .then(data => setPitches(data || []));
  }, []);

  const selectedPitch = pitches[selectedPitchIdx] || null;
  const seamOrientation = getSeamOrientationObj(selectedPitch);

  // This assumes spin_x, spin_y, spin_z in data, or adjust below
  const spinAxis = selectedPitch
    ? new THREE.Vector3(
        -selectedPitch.spin_x,
        selectedPitch.spin_z,
        selectedPitch.spin_y
      )
    : new THREE.Vector3(1, 0, 0);

  const spinRate = 10 // selectedPitch?.SpinRate ?? 10;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel
          spinRate={spinRate}
          playing={true} 
          seamOrientation={seamOrientation}
          spinAxis={spinAxis}
          useSeamOrientation={true}
        />
      </Canvas>
    </div>
  );
}

export default App;