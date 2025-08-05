import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PlayButton from "./components/PlayButton";
import * as THREE from "three";
import SpinAxisSliders from "./components/SpinAxisSliders";
import PitchInfoPanels from "./components/PitchInfoPanels";
import BallOrientationSliders from "./components/BallOrientationSliders";


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

function convertMatrix4ToSeamOrientation(matrix4) {
  const e = matrix4.elements; // column order: e[0], e[4], e[8] are first row elements
  
  return {
    seam_orientation_xx: e[0],  // M11
    seam_orientation_xy: e[4],  // M12 (second column, first row)
    seam_orientation_xz: e[8],  // M13 (third column, first row)

    seam_orientation_yx: e[1],  // M21 (first column, second row)
    seam_orientation_yy: e[5],  // M22
    seam_orientation_yz: e[9],  // M23

    seam_orientation_zx: e[2],  // M31
    seam_orientation_zy: e[6],  // M32
    seam_orientation_zz: e[10], // M33
  };
}


function App() {
  const [pitches, setPitches] = useState([]);
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  // Load pitch data
  useEffect(() => {
    fetch("/gilbert_augEighth.json").then((res) => res.json()).then((data) => setPitches(data || []));
  }, []);

  const selectedPitch = pitches[selectedPitchIdx] || null;
  
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
  const [userSeamOrientationMatrix, setUserSeamOrientationMatrix] = useState(null);

  /// spin axis with user adjust attempt - usememo only re renders if dependencies change
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

  // Use pitch's seam orientation matrix as base \
  function pitchSeamToMatrix4(seam) {
      if (!seam) return new THREE.Matrix4();
      const elements = [
          seam.xx, seam.xy, seam.xz, 0,
          seam.yx, seam.yy, seam.yz, 0,
          seam.zx, seam.zy, seam.zz, 0,
          0, 0, 0, 1
      ];
      const m = new THREE.Matrix4();
      m.set(...elements);
      return m;
  }

  // const adjustedPitchSeamObj = convertMatrix4ToSeamOrientation(adjustedPitchMatrix);
  const baseSeamMatrix = useMemo(() => pitchSeamToMatrix4(seamOrientation), [seamOrientation]);

  const adjustedPitchMatrix = useMemo(() => {
  const m = baseSeamMatrix.clone();
  if (userSeamOrientationMatrix) {
      m.multiply(userSeamOrientationMatrix); // Apply adjustment!
    }
    console.log("baseSeamMatrix", baseSeamMatrix.elements);
    console.log(" userSeamOrientationMatrix", userSeamOrientationMatrix?.elements);
    console.log("multiplied adjustedPitchMatrix", m.elements);

    return m;
  }, [baseSeamMatrix, userSeamOrientationMatrix]);

  const adjustedPitchSeamObjfirst = adjustedPitchMatrix; // already a Matrix4

  const adjustedPitchSeamObj = convertMatrix4ToSeamOrientation(adjustedPitchSeamObjfirst)
  const strippedSeamOrientation = {
    xx: adjustedPitchSeamObj.seam_orientation_xx,
    xy: adjustedPitchSeamObj.seam_orientation_xy,
    xz: adjustedPitchSeamObj.seam_orientation_xz,
    yx: adjustedPitchSeamObj.seam_orientation_yx,
    yy: adjustedPitchSeamObj.seam_orientation_yy,
    yz: adjustedPitchSeamObj.seam_orientation_yz,
    zx: adjustedPitchSeamObj.seam_orientation_zx,
    zy: adjustedPitchSeamObj.seam_orientation_zy,
    zz: adjustedPitchSeamObj.seam_orientation_zz,
  };
  console.log("🧩 converted seam matrix is plain object:", typeof adjustedPitchSeamObj === "object" && ! (adjustedPitchSeamObj instanceof THREE.Matrix4));
  console.log("🧩 adjustedPitchSeamObj is valid:", adjustedPitchSeamObj instanceof THREE.Matrix4); // should be true


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
      
      <BallOrientationSliders
          onOrientationMatrixChange={setUserSeamOrientationMatrix}
          initialMatrix={new THREE.Matrix4()} // always reset to identity
          pitchKey={selectedPitch && selectedPitch.PitchUID != null ? selectedPitch.PitchUID : ""}

          // pitchKey={selectedPitch?.PitchUID}
      />

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
        pitchKey={selectedPitch && selectedPitch.PitchUID != null ? selectedPitch.PitchUID : ""}
        onSpinAxisChange={setUserSpinAxis}
      />
      
      {/* Panels that display the pitch info for slsected pitch and adjusted pitch  */}
      <PitchInfoPanels
          selectedPitch={selectedPitch}
          userSpinAxis={userSpinAxis}
          adjustedSeamMatrix={adjustedPitchSeamObj}
          
      />
    
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 0.45], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />
        <BaseballModel
          spinRate={spinRateRPM}
          playing={playing}
          seamOrientation={strippedSeamOrientation}
          spinAxis={spinAxisVector}
          useSeamOrientation={true}
        />

        <OrbitControls />
        {/* <axesHelper /> */}
      </Canvas>

    </div>
  );
}

export default App;