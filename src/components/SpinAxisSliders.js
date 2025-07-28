// SpinAxisSliders.js
import React, { useEffect, useState } from "react";
import * as THREE from "three";

// Converts spin axis vector to tilt/gyro
function spinAxisToTiltGyro(spinAxis) {
  const normalized = spinAxis.clone().normalize();
  const x = normalized.x;
  const y = normalized.y;
  const z = normalized.z;

  const tilt = Math.acos(x); // from +X
  const gyro = Math.atan2(y, z); // rotation around X

  return {
    tiltDeg: THREE.MathUtils.radToDeg(tilt),
    gyroDeg: (THREE.MathUtils.radToDeg(gyro) + 360) % 360,
  };
}

// Converts tilt + gyro back to vector
function tiltGyroToSpinAxis(tiltDeg, gyroDeg) {
  const tilt = THREE.MathUtils.degToRad(tiltDeg);
  const gyro = THREE.MathUtils.degToRad(gyroDeg);

  const x = Math.cos(tilt);
  const y = Math.sin(tilt) * Math.sin(gyro);
  const z = Math.sin(tilt) * Math.cos(gyro);

  return new THREE.Vector3(x, y, z).normalize();
}

export default function SpinAxisSliders({ initialSpinAxis, pitchKey, onSpinAxisChange }) {
  const [tiltDeg, setTiltDeg] = useState(120);
  const [gyroDeg, setGyroDeg] = useState(0);
  const [userHasAdjusted, setUserHasAdjusted] = useState(false);
  const [lastPitchKey, setLastPitchKey] = useState(null);




  /// detect new pitch has been selected
    useEffect(() => {
    if (pitchKey !== lastPitchKey && initialSpinAxis) {
        const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
        setTiltDeg(tiltDeg);
        setGyroDeg(gyroDeg);
        setUserHasAdjusted(false);  //  clear adjustments
        setLastPitchKey(pitchKey);  // remember this pitch
    }
    }, [pitchKey, initialSpinAxis, lastPitchKey]);

  // Only reset tilt/gyro when new pitch selected AND user hasn't made adjustments
  useEffect(() => {
    if (!userHasAdjusted && initialSpinAxis) {
      const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
      setTiltDeg(tiltDeg);
      setGyroDeg(gyroDeg);
    }
  }, [initialSpinAxis, userHasAdjusted]);

  // Update spin axis when sliders change
  useEffect(() => {
    const newSpinAxis = tiltGyroToSpinAxis(tiltDeg, gyroDeg);
    onSpinAxisChange(newSpinAxis);
  }, [tiltDeg, gyroDeg]);

  const handleTiltChange = (value) => {
    setUserHasAdjusted(true);
    setTiltDeg(value);
  };

  const handleGyroChange = (value) => {
    setUserHasAdjusted(true);
    setGyroDeg(value);
  };

  const handleReset = () => {
    if (initialSpinAxis) {
      const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
      setTiltDeg(tiltDeg);
      setGyroDeg(gyroDeg);
      setUserHasAdjusted(false);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 100,
        left: 20,
        zIndex: 20,
        background: "rgba(255,255,255,0.96)",
        padding: 16,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
        width: 300,
      }}
    >
      <h4>Tilt (Clock Face)</h4>
      <input
        type="range"
        min={0}
        max={360}
        value={tiltDeg}
        onChange={(e) => handleTiltChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <div>{tiltDeg.toFixed(1)}°</div>

      <h4 style={{ marginTop: 20 }}>Gyro</h4>
      <input
        type="range"
        min={0}
        max={360}
        value={gyroDeg}
        onChange={(e) => handleGyroChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <div>{gyroDeg.toFixed(1)}°</div>

      <button
        onClick={handleReset}
        style={{
          marginTop: 20,
          padding: "6px 12px",
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "#f5f5f5",
          cursor: "pointer",
        }}
      >
        Reset to Pitch
      </button>
    </div>
  );
}
