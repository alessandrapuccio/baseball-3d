import React, { useEffect, useState } from "react";
import * as THREE from "three";

// Utility hook to handle hybrid controlled/uncontrolled state
function useHybridState(propValue, propSetter, defaultValue) {
  const [state, setState] = useState(defaultValue);
  useEffect(() => {
    if (propValue !== undefined) setState(propValue);
  }, [propValue]);
  const setter = propSetter || setState;
  return [propValue !== undefined ? propValue : state, setter];
}

export default function BallOrientationSliders({
  onOrientationMatrixChange,
  initialMatrix,
  pitchKey,

  // Controlled props (optional)
  rotX: propRotX,
  rotY: propRotY,
  setRotX: propSetRotX,
  setRotY: propSetRotY,
}) {
  // Use hybrid controlled/uncontrolled pattern for rotX and rotY
  const [rotX, setRotX] = useHybridState(propRotX, propSetRotX, 0);
  const [rotY, setRotY] = useHybridState(propRotY, propSetRotY, 0);

  const [userHasAdjusted, setUserHasAdjusted] = useState(false);
  const [lastPitchKey, setLastPitchKey] = useState(null);

  // Reset on pitch change if user hasn't adjusted and uncontrolled
  useEffect(() => {
    if (pitchKey !== lastPitchKey && initialMatrix) {
      if (!userHasAdjusted && propRotX === undefined && propRotY === undefined) {
        setRotX(0);
        setRotY(0);
        setUserHasAdjusted(false);
      }
      setLastPitchKey(pitchKey);
    }
  }, [pitchKey, initialMatrix, lastPitchKey, userHasAdjusted, propRotX, propRotY, setRotX, setRotY]);

  // Update matrix and notify parent on rotX or rotY change
  useEffect(() => {
    const eul = new THREE.Euler(
      THREE.MathUtils.degToRad(rotX),
      THREE.MathUtils.degToRad(rotY),
      0,
      "XYZ"
    );
    const mat4 = new THREE.Matrix4().makeRotationFromEuler(eul);

    // Clone to generate a new reference
    const clonedMat4 = mat4.clone();
    onOrientationMatrixChange(clonedMat4);
  }, [rotX, rotY, onOrientationMatrixChange]);

  // Handlers update state and mark user adjusted if uncontrolled
  function handleRotXChange(value) {
    if (propSetRotX) propSetRotX(value);
    else {
      setUserHasAdjusted(true);
      setRotX(value);
    }
  }

  function handleRotYChange(value) {
    if (propSetRotY) propSetRotY(value);
    else {
      setUserHasAdjusted(true);
      setRotY(value);
    }
  }

  function handleReset() {
    if (!propRotX && !propRotY) {
      setRotX(0);
      setRotY(0);
      setUserHasAdjusted(false);
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 330,
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
      <h4 style={{ margin: "4px 0 8px" }}>Ball Orientation X-axis (°)</h4>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="range"
          min={-180}
          max={180}
          value={rotX}
          onChange={(e) => handleRotXChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            min={-180}
            max={180}
            value={rotX}
            onChange={(e) => handleRotXChange(Number(e.target.value))}
            style={{
              width: 60,
              padding: 2,
              fontSize: 13,
            }}
          />
          <span style={{ marginLeft: 2 }}>°</span>
        </div>
      </div>

      <h4 style={{ margin: "12px 0 8px" }}>Ball Orientation Y-axis (°)</h4>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="range"
          min={-180}
          max={180}
          value={rotY}
          onChange={(e) => handleRotYChange(Number(e.target.value))}
          style={{ flex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="number"
            min={-180}
            max={180}
            value={rotY}
            onChange={(e) => handleRotYChange(Number(e.target.value))}
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
        Reset Orientation
      </button>
    </div>
  );
}
