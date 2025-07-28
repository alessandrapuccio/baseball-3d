import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PlayButton from "./components/PlayButton";
import * as THREE from "three";

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

function BaseballModel({
  spinRate, // spin rpm
  playing,
  seamOrientation,
  useSeamOrientation,
  spinAxis,
}) {
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

  // Helper to extract seam orientation matrix
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

  // Spin axis vector for spin and rod orientation
  const spinAxisVector = selectedPitch
    ? new THREE.Vector3(-selectedPitch.spin_x, selectedPitch.spin_z, selectedPitch.spin_y).normalize()
    : new THREE.Vector3(1, 0, 0); // fallback X axis

  // Spin rate (RPM) from rotX state or any default RPM; here just a constant or you can add control later
  const spinRateRPM = 50; // example fixed spin rate

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
        <axesHelper />
      </Canvas>

      {/* Bottom-right info panel */}
      {selectedPitch && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            background: "rgba(255,255,255,0.96)",
            padding: 18,
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
            fontFamily: "monospace",
            fontSize: 14,
            zIndex: 99,
            minWidth: 360,
            whiteSpace: "pre-wrap",
            lineHeight: 1.5,
            textAlign: "left",
          }}
        >
          <b>Pitch Number:</b> {selectedPitch.PitchNumber}
          <br />
          <b>Pitch Type:</b> {selectedPitch.PitchType}
          <br />
          <b>Pitch Group:</b> {selectedPitch.PitchGroup}
          <br />
          <b>Spin Axis Angle (deg):</b> {selectedPitch.spinaxis_meas ?? "n/a"}
          <br />
          <b>Spin Vector:</b>{" "}
          {`x: ${selectedPitch.spin_x?.toFixed(4) ?? "n/a"}, y: ${
            selectedPitch.spin_y?.toFixed(4) ?? "n/a"
          }, z: ${selectedPitch.spin_z?.toFixed(4) ?? "n/a"}`}
          <br />
          <b>Seam Orientation Matrix:</b>
          <br />
          {[
            "seam_orientation_xx",
            "seam_orientation_xy",
            "seam_orientation_xz",
            "seam_orientation_yx",
            "seam_orientation_yy",
            "seam_orientation_yz",
            "seam_orientation_zx",
            "seam_orientation_zy",
            "seam_orientation_zz",
          ].map((key) => (
            <div key={key}>
              {key}:{" "}
              {selectedPitch[key] !== undefined
                ? Number(selectedPitch[key]).toFixed(5)
                : "n/a"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
