import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import PlayButton from "./components/PlayButton";
import * as THREE from "three";
import SpinAxisSliders from "./components/SpinAxisSliders";
import PitchInfoPanels from "./components/PitchInfoPanels";
import BallOrientationSliders from "./components/BallOrientationSliders";


// If propValue is undefined, use local state; if propValue is set, always use it (true controlled pattern)
function useHybridState(propValue, setPropValue, defaultValue) {
  const [state, setState] = useState(defaultValue);
  // Keep local state in sync if parent changes the prop
  useEffect(() => {
    if (propValue !== undefined) setState(propValue);
  }, [propValue]);
  // Use prop setter if provided, else local setState
  const set = setPropValue || setState;
  // Always return the actual current value (props win if supplied)
  return [propValue !== undefined ? propValue : state, set];
}


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

function pitchSeamToMatrix4(seam) {
  if (!seam) return new THREE.Matrix4();
  const elements = [
    seam.xx, seam.xy, seam.xz, 0,
    seam.yx, seam.yy, seam.yz, 0,
    seam.zx, seam.zy, seam.zz, 0,
    0,      0,      0,     1
  ];
  const m = new THREE.Matrix4();
  m.set(...elements);
  return m;
}

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



// export default App;
function App(props) {
  // --- 1. Data loading (always fetch from JSON, as per your requirement)
  const [pitches, setPitches] = useState([]);
  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then(res => res.json())
      .then(data => setPitches(data || []));
  }, []);

  // --- 2. Hybrid state for each top-level input
  // selected pitch index
  const [selectedPitchIdx, setSelectedPitchIdx] = useHybridState(
    props.selectedPitchIdx,
    props.setSelectedPitchIdx,
    0
  );
  // UI playing/not
  const [playing, setPlaying] = useHybridState(
    props.playing,
    props.setPlaying,
    false
  );
  // User-adjusted spin axis vector (THREE.Vector3 or null)
  const [userSpinAxis, setUserSpinAxis] = useHybridState(
    props.userSpinAxis,
    props.setUserSpinAxis,
    null
  );
  // User seam orientation adjustment (THREE.Matrix4 or null)
  const [userSeamOrientationMatrix, setUserSeamOrientationMatrix] = useHybridState(
    props.userSeamOrientationMatrix,
    props.setUserSeamOrientationMatrix,
    null
  );

  // --- 3. Derived values
  const selectedPitch = pitches[selectedPitchIdx] || null;
  const seamOrientation = getSeamOrientationObj(selectedPitch);
  console.log(seamOrientation)

  // -- SPIN AXIS vector (either: user override, or from pitch)
  const spinAxisVector = useMemo(() => {
    if (userSpinAxis) return userSpinAxis;
    if (!selectedPitch) return new THREE.Vector3(1, 0, 0);
    return new THREE.Vector3(
      -selectedPitch.spin_x || 0,
      selectedPitch.spin_z || 0,
      selectedPitch.spin_y || 0
    ).normalize();
  }, [selectedPitch, userSpinAxis]);

  // -- SPIN RATE (could be hybrid controlled. If you want: add as prop/useHybridState)
  // Here, let’s just use a constant
  const spinRateRPM =  10;

  // -- Seam orientation matrix (from pitch)
  const baseSeamMatrix = useMemo(
    () => pitchSeamToMatrix4(seamOrientation),
    [seamOrientation]
  );

  // -- Matrix after optional user adjustment
  const adjustedPitchMatrix = useMemo(() => {
    console.log("baseSeamMatrix elements:", baseSeamMatrix.elements);
    console.log("userSeamOrientationMatrix elements:", userSeamOrientationMatrix ? userSeamOrientationMatrix.elements : "null or undefined");

    const m = baseSeamMatrix.clone();
    if (userSeamOrientationMatrix) {
      m.multiply(userSeamOrientationMatrix);
    }
    console.log("adjustedPitchMatrix elements:", m.elements);

    return m;
  }, [baseSeamMatrix, userSeamOrientationMatrix]);

  // -- Plain seam orientation object for use in rendering/model
  const adjustedPitchSeamObj = convertMatrix4ToSeamOrientation(adjustedPitchMatrix);

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

  // --- Render
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>


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
      </Canvas>
    </div>
  );
}

export default App;