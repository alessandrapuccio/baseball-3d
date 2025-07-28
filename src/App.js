import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PlayButton from "./components/PlayButton";
import * as THREE from "three";
import SpinAxisSliders from "./components/SpinAxisSliders";
import PitchInfoPanels from "./components/PitchInfoPanels";

function Rod() {
  return (
    <group>
      {/* Rod along X axis */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.0075, 0.0075, 0.3, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Arrowhead on right (positive X direction) */}
      <mesh position={[0.15, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.015, 0.05, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>

  );
}

function BaseballModel({spinRate, playing,seamOrientation,useSeamOrientation,spinAxis}) {
  const gltf = useGLTF("/models/baseball.gltf");
  const spinGroupRef = useRef();
  const modelGroupRef = useRef();
  const rodGroupRef = useRef();

  useEffect(() => {
    if (gltf.scene) {
      // Align model correctly on load (kept from your original)
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

  // Apply ball orientation from seamOrientation quaternion if enabled
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
        // If not using seam orientation, reset rotation
        modelGroupRef.current.quaternion.identity();
        modelGroupRef.current.rotation.set(0, 0, 0);
      }
    }
  }, [useSeamOrientation, seamOrientation]);

  // Align rod with spinAxis when using seamOrientation
  useEffect(() => {
    if (rodGroupRef.current) {
      if (useSeamOrientation && spinAxis) {
        const defaultAxis = new THREE.Vector3(1, 0, 0); // rod default along +X
        const q = new THREE.Quaternion().setFromUnitVectors(
          defaultAxis,
          spinAxis.clone().normalize()
        );
        rodGroupRef.current.quaternion.copy(q);
      } else {
        // Reset rod orientation if not using seamOrientation
        rodGroupRef.current.quaternion.identity();
      }
    }
  }, [spinAxis, useSeamOrientation]);

  // Spin animation around spinAxis
useFrame((state, delta) => {
  if (playing && spinGroupRef.current) {
    const radPerSec = (spinRate * 2 * Math.PI) / 60;
    const angle = radPerSec * delta;

    // Always spin around the local X axis (which matches rod's orientation)
    const localX = new THREE.Vector3(1, 0, 0);
    const qSpin = new THREE.Quaternion();
    qSpin.setFromAxisAngle(localX, angle);

    // Apply spin relative to rodGroup's current rotation
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
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Load pitch data on mount
  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then((res) => res.json())
      .then((data) => setPitches(data || []));
  }, []);

  const selectedPitch = pitches[selectedPitchIdx] || null;

  useEffect(() => {
    if (selectedPitch) {
      console.log("Pitch keys:", Object.keys(selectedPitch));
      console.log("PitchUID value:", selectedPitch.PitchUID);
    }
  }, [selectedPitch]);
  
  // helper to get seam orientation matrix
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

  const seamOrientation = getSeamOrientationObj(selectedPitch);

  /// user adjust attempt
  const [userSpinAxis, setUserSpinAxis] = useState(null);
  /// spin axis with user adjust attempt
  const spinAxisVector = useMemo(() => {
    if (userSpinAxis) return userSpinAxis;
    if (!selectedPitch) return new THREE.Vector3(1, 0, 0);

    return new THREE.Vector3(
      -selectedPitch.spin_x,
      selectedPitch.spin_z,
      selectedPitch.spin_y
    ).normalize();
  }, [selectedPitch, userSpinAxis]);

  const spinRateRPM = 50; 

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Play/Pause */}
      <div style={{ position: "absolute", top: 20, right: 20, zIndex: 20 }}>
        <PlayButton playing={playing} onClick={() => setPlaying((p) => !p)} />
      </div>

      {/* Pitch selector */}
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
      
      <SpinAxisSliders
        initialSpinAxis={
          selectedPitch
            ? new THREE.Vector3(
                -selectedPitch.spin_x,
                selectedPitch.spin_z,
                selectedPitch.spin_y
              ).normalize()
            : new THREE.Vector3(1, 0, 0)
        }
        pitchKey={selectedPitch.PitchUID}
        onSpinAxisChange={setUserSpinAxis}
      />
      
      {/* Panels that display the pitch info for slsected pitch and adjusted pitch  */}
      <PitchInfoPanels selectedPitch={selectedPitch} userSpinAxis={userSpinAxis} />

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel
          spinRate={spinRateRPM}
          playing={playing}
          seamOrientation={seamOrientation}
          useSeamOrientation={true}
          spinAxis={spinAxisVector}
        />
        <OrbitControls />
        {/* <axesHelper /> */}
      </Canvas>

      
    </div>
  );
}

export default App;