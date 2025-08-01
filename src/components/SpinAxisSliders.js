import React, { useEffect, useState } from "react";
import * as THREE from "three";

// Optional: import/use this hook from your utils or App.js (here for completeness)
function useHybridState(propValue, propSetter, defaultValue) {
  const [state, setState] = useState(defaultValue);
  useEffect(() => {
    if (propValue !== undefined) setState(propValue);
  }, [propValue]);
  const setter = propSetter || setState;
  return [propValue !== undefined ? propValue : state, setter];
}

// Converts spin axis vector to tilt/gyro
function spinAxisToTiltGyro(spinAxis) {
  if (!spinAxis) return { tiltDeg: 120, gyroDeg: 0 };
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





////////////// starts
export default function SpinAxisSliders({
  initialSpinAxis,
  pitchKey,

  // Add optional "controlled" props like these (all optional):
  tiltDeg: propTiltDeg,
  gyroDeg: propGyroDeg,
  setTiltDeg: propSetTiltDeg,
  setGyroDeg: propSetGyroDeg,

  // Callback to parent for spin axis changes (always called)
  onSpinAxisChange,
}) {
  // Use hybrid controlled/uncontrolled pattern for tiltDeg and gyroDeg
  const [tiltDeg, setTiltDeg] = useHybridState(
    propTiltDeg,
    propSetTiltDeg,
    120
  );
  const [gyroDeg, setGyroDeg] = useHybridState(
    propGyroDeg,
    propSetGyroDeg,
    0
  );

  // userHasAdjusted stays local UI state
  const [userHasAdjusted, setUserHasAdjusted] = useState(false);
  const [lastPitchKey, setLastPitchKey] = useState(null);

  // Reset tilt/gyro when pitchKey or initialSpinAxis changes,
  // only if user has NOT adjusted OR if uncontrolled component.
  useEffect(() => {
    if (pitchKey !== lastPitchKey && initialSpinAxis) {
      if (!userHasAdjusted && propTiltDeg === undefined && propGyroDeg === undefined) {
        const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
        setTiltDeg(tiltDeg);
        setGyroDeg(gyroDeg);
        setUserHasAdjusted(false);
      }
      setLastPitchKey(pitchKey);
    }
  }, [pitchKey, initialSpinAxis, lastPitchKey, userHasAdjusted, propTiltDeg, propGyroDeg, setTiltDeg, setGyroDeg]);

  // If initialSpinAxis changes and user hasn't adjusted, update tilt/gyro (for uncontrolled only)
  useEffect(() => {
    if (!userHasAdjusted && propTiltDeg === undefined && propGyroDeg === undefined && initialSpinAxis) {
      const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
      setTiltDeg(tiltDeg);
      setGyroDeg(gyroDeg);
    }
  }, [initialSpinAxis, userHasAdjusted, propTiltDeg, propGyroDeg, setTiltDeg, setGyroDeg]);

  // Notify whenever tilt or gyro change (compose new spin axis vector)
  useEffect(() => {
    const newSpinAxis = tiltGyroToSpinAxis(tiltDeg, gyroDeg);
    onSpinAxisChange(newSpinAxis);
  }, [tiltDeg, gyroDeg, onSpinAxisChange]);

  // Handlers update state and mark user adjusted if uncontrolled
  function handleTiltChange(value) {
    if (propSetTiltDeg) propSetTiltDeg(value);
    else {
      setUserHasAdjusted(true);
      setTiltDeg(value);
    }
  }
  function handleGyroChange(value) {
    if (propSetGyroDeg) propSetGyroDeg(value);
    else {
      setUserHasAdjusted(true);
      setGyroDeg(value);
    }
  }

  // Reset slider values to initialSpinAxis (converted), only if uncontrolled
  function handleReset() {
    if (initialSpinAxis && !propTiltDeg && !propGyroDeg) {
      const { tiltDeg, gyroDeg } = spinAxisToTiltGyro(initialSpinAxis);
      setTiltDeg(tiltDeg);
      setGyroDeg(gyroDeg);
      setUserHasAdjusted(false);
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 145,
        left: 20,
        zIndex: 20,
        background: "rgba(255,255,255,0.96)",
        padding: 12,
        borderRadius: 6,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
        width: 260,
        fontSize: 14,
      }}
    >
      <h4 style={{ margin: "4px 0 8px" }}>Tilt (Clock Face)</h4>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="range"
          min={0}
          max={360}
          value={tiltDeg}
          onChange={(e) => handleTiltChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            min={0}
            max={360}
            value={tiltDeg}
            onChange={(e) => handleTiltChange(Number(e.target.value))}
            style={{
              width: 60,
              padding: 2,
              fontSize: 13,
            }}
          />
          <span style={{ marginLeft: 2 }}>°</span>
        </div>
      </div>

      <h4 style={{ margin: "12px 0 8px" }}>Gyro</h4>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="range"
          min={0}
          max={360}
          value={gyroDeg}
          onChange={(e) => handleGyroChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            min={0}
            max={360}
            value={gyroDeg}
            onChange={(e) => handleGyroChange(Number(e.target.value))}
            style={{
              width: 60,
              padding: 2,
              fontSize: 13,
            }}
          />
          <span style={{ marginLeft: 2 }}>°</span>
        </div>
      </div>

      <button
        onClick={handleReset}
        style={{
          marginTop: 16,
          padding: "5px 10px",
          borderRadius: 4,
          border: "1px solid #ccc",
          background: "#f5f5f5",
          cursor: "pointer",
          fontSize: 13,
        }}
      >
        Reset Spin Axis
      </button>
    </div>
  );
}
