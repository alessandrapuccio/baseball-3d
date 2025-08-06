// src/App.jsx
import React, { useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

import BallOrientationSliders from "./components/BallOrientationSliders"; 
import SpinAxisSliders from "./components/SpinAxisSliders";            

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

function BaseballModel({ spinRate, playing, seamOrientation, spinAxis, useSeamOrientation }) {
  const gltf = useLoader(GLTFLoader, "/models/baseball.gltf");
  const spinGroupRef = React.useRef();
  const modelGroupRef = React.useRef();
  const rodGroupRef = React.useRef();
  const { invalidate } = useThree();


  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.rotation.set(Math.PI / 2, (3 * Math.PI) / 2, 0);
    }
  }, [gltf]);

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
    invalidate();
  }, [useSeamOrientation, seamOrientation, invalidate]);

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
    invalidate();
  }, [spinAxis, useSeamOrientation, invalidate]);

  useFrame((_, delta) => {
    if (playing && spinGroupRef.current) {
      const radPerSec = (spinRate * 2 * Math.PI) / 60;
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

function convertMatrix4ToSeamOrientation(matrix) {
  const e = matrix.elements;
  return {
    seam_orientation_xx: e[0],
    seam_orientation_xy: e[1],
    seam_orientation_xz: e[2],
    seam_orientation_yx: e[4],
    seam_orientation_yy: e[5],
    seam_orientation_yz: e[6],
    seam_orientation_zx: e[8],
    seam_orientation_zy: e[9],
    seam_orientation_zz: e[10],
  };
}

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

function App() {
  const [pitches, setPitches] = useState([]);
  const [selectedPitchIdx, setSelectedPitchIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  const [userSpinAxis, setUserSpinAxis] = useState(null);
  const [userSeamOrientationMatrix, setUserSeamOrientationMatrix] = useState(null);

  useEffect(() => {
    fetch("/gilbert_augEighth.json")
      .then(res => res.json())
      .then(data => setPitches(data || []));
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "pitch_idx") {
        setSelectedPitchIdx(Number(e.data.value));
      }
      else if (e.data?.type === "slider_update") {
        // Expect payload to be keyed like {spinTilt, spinGyro, ballX, ballY}
        if ('spinTilt' in e.data && 'spinGyro' in e.data) {
          // Convert Tilt + Gyro to spin axis vector
          const tilt = THREE.MathUtils.degToRad(e.data.spinTilt);
          const gyro = THREE.MathUtils.degToRad(e.data.spinGyro);
          const x = Math.cos(tilt);
          const y = Math.sin(tilt) * Math.sin(gyro);
          const z = Math.sin(tilt) * Math.cos(gyro);
          setUserSpinAxis(new THREE.Vector3(x, y, z).normalize());
        }
        if ('ballX' in e.data && 'ballY' in e.data) {
          const mat = new THREE.Matrix4();
          mat.makeRotationFromEuler(new THREE.Euler(
            THREE.MathUtils.degToRad(e.data.ballX),
            THREE.MathUtils.degToRad(e.data.ballY),
            0,
            "XYZ"
          ));
          setUserSeamOrientationMatrix(mat);
        }
      } else if (e.data?.type === "play_toggle"){
        setPlaying(Boolean(e.data.value));
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const selectedPitch = pitches[selectedPitchIdx] || null;
  const seamOrientation = getSeamOrientationObj(selectedPitch);

  // Reference for last selected pitch index to detect pitch changes
  const lastPitchIndexRef = useRef(null);

  useEffect(() => {
    if (lastPitchIndexRef.current !== selectedPitchIdx) {
      lastPitchIndexRef.current = selectedPitchIdx;

      // Compute tilt and gyro for spin axis from pitch spin vector
      if (selectedPitch) {
        const spinVec = new THREE.Vector3(
          -selectedPitch.spin_x,
          selectedPitch.spin_z,
          selectedPitch.spin_y
        ).normalize();

        const tilt = THREE.MathUtils.radToDeg(Math.acos(spinVec.x));

        const gyro = (THREE.MathUtils.radToDeg(Math.atan2(spinVec.y, spinVec.z)) + 360) % 360;

        // Ball orientation X, Y default 0
        const ballX = 0;
        const ballY = 0;

        // Send these defaults *to* Shiny (window.Shiny is available only if in browser)
        if (window.Shiny && window.Shiny.setInputValue) {
          // Using Shiny.setInputValue directly for smoother interaction
          window.Shiny.setInputValue("spinTilt", tilt, { priority: "event" });
          window.Shiny.setInputValue("spinGyro", gyro, { priority: "event" });
          window.Shiny.setInputValue("ballX", ballX, { priority: "event" });
          window.Shiny.setInputValue("ballY", ballY, { priority: "event" });

          // Also reset playing state to true when pitch changes?
          window.Shiny.setInputValue("playing", true, { priority: "event" });
        }
      }
    }
  }, [selectedPitch, selectedPitchIdx]);



  const spinAxisVector = useMemo(() => {
    if (userSpinAxis) return userSpinAxis;
    if (!selectedPitch) return new THREE.Vector3(1, 0, 0);
    return new THREE.Vector3(
      -selectedPitch.spin_x,
      selectedPitch.spin_z,
      selectedPitch.spin_y
    ).normalize();
  }, [selectedPitch, userSpinAxis]);

  const baseSeamMatrix = useMemo(() => pitchSeamToMatrix4(seamOrientation), [seamOrientation]);

  const adjustedPitchMatrix = useMemo(() => {
    const m = baseSeamMatrix.clone();
    if (userSeamOrientationMatrix) {
      m.multiply(userSeamOrientationMatrix);
    }
    return m;
  }, [baseSeamMatrix, userSeamOrientationMatrix]);

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

  const spinRateRPM = 50;

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
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
      </Canvas>
    </div>
  );
}

export default App;
