// src/App.jsx
import React, { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Clock from './components/Clock';
import Field from './components/Field';
import BaseballLoading from './components/BaseballLoading';
import BaseballModel from './components/BaseballModel';

function App() {
  const [showClock, setShowClock] = useState(true);
  const [showField, setShowField] = useState(true);
  const [showRod, setShowRod] = useState(true);
  
  const [pitches, setPitches] = useState([]);
  const [selectedPitchUID, setSelectedPitchUID] = useState(null);
  const [playing, setPlaying] = useState(false);

  const [currentSpinAxis, setCurrentSpinAxis] = useState(new THREE.Vector3(1, 0, 0));
  const [currentSeamLat, setCurrentSeamLat] = useState(0);
  const [currentSeamLon, setCurrentSeamLon] = useState(0);
  const [resetSpin, setResetSpin] = useState(false); // New state for reset trigger
  const [path, setPath] = useState("baseball-v2.glb");
  
// '/models/baseball-v2.glb'
  useEffect(() => {
        const handler = (e) => {
          if (e.data?.type === "pitch_uid") {
            console.log("Pitch UID changed:", e.data.value);
            setSelectedPitchUID(e.data.value);
          }
          else if (e.data?.type === "slider_update") {
            // Receive the calculated spin vector from R
            if ('spinVectorX' in e.data && 'spinVectorY' in e.data && 'spinVectorZ' in e.data) {
              const newSpinAxis = new THREE.Vector3(
                e.data.spinVectorX,
                e.data.spinVectorY,
                e.data.spinVectorZ
              ).normalize();

              // console.log("Received spin vector - Tilt:", e.data.spinTilt, "Gyro:", e.data.spinGyro, "Vector:", newSpinAxis);
              setCurrentSpinAxis(newSpinAxis);
            }

            // Update seam orientation directly with lat/lon values
            if ('ballX' in e.data) setCurrentSeamLon(e.data.ballX); // ballX controls longitude
            if ('ballY' in e.data) setCurrentSeamLat(e.data.ballY);  // ballY controls latitude
          }
          else if (e.data?.type === "play_toggle") {
            setPlaying(Boolean(e.data.value));
          }
          else if (e.data?.type === "reset_spin_rotation") {
            setResetSpin(prev => !prev); // Toggle to trigger reset
          }
          else if (e.data?.type === "clock_toggle") {
            setShowClock(Boolean(e.data.value));
          }
          else if (e.data?.type === "field_toggle") {
            setShowField(Boolean(e.data.value));
          }
          else if (e.data?.type === "rod_toggle") {
            setShowRod(Boolean(e.data.value));
          }
        };
        window.addEventListener("message", handler);
        return () => window.removeEventListener("message", handler);
  }, []);


  const selectedPitch = useMemo(() => {
    if (!selectedPitchUID || !pitches.length) return null;
    return pitches.find(pitch => pitch.PitchUID === selectedPitchUID) || null;
  }, [selectedPitchUID, pitches]);

  // Initialize both spin axis and seam orientation when pitch changes
  useEffect(() => {
    if (selectedPitch) {
      // Initialize spin axis
      const initialVector = new THREE.Vector3(
        selectedPitch.spin_backspin,
        selectedPitch.spin_sidespin,
        -selectedPitch.spin_gyrospin
      ).normalize();
      setCurrentSpinAxis(initialVector);

      // Initialize seam orientation
      setCurrentSeamLat(selectedPitch.seam_orientation_lat || 0);
      setCurrentSeamLon(selectedPitch.seam_orientation_lon || 0);
    }
  }, [selectedPitch]);

  const spinRateRPM = 50;
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0.45], fov: 45 }}>
        {/* Sky */}
        <mesh scale={[50, 50, 50]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#D1DBE6" side={THREE.BackSide} />
        </mesh>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0.3]} intensity={1} />

        {(() => {
          return showField ?  <Field /> : null;
        })()}

        {(() => {
          return showClock ? <Clock /> : null;
        })()}

        <Suspense fallback={<BaseballLoading />}>
          <BaseballModel 
            spinRate={spinRateRPM} 
            playing={playing} 
            spinAxis={currentSpinAxis} 
            currentSeamLat={currentSeamLat} 
            currentSeamLon={currentSeamLon} 
            useSeamOrientation={true} 
            resetSpin={resetSpin} 
            showRod={showRod}
            path={path}
          />
        </Suspense>
      </Canvas>
    </div>
  );

}

export default App;