import React from 'react';
import PlayButton from './PlayButton'; 

export default function RotationSliders({ rotX, setRotX, rotY, setRotY, rotZ, setRotZ, playing, setPlaying }) {
  const clamp = (value) => Math.max(0, Math.min(360, value));

  return (

    <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
        background: 'rgba(255,255,255,0.95)',
        padding: 16,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        fontFamily: 'sans-serif',
    }}>
      {/* Gyro (X axis) */}
      <div style={{ marginBottom: 12 }}>
        <label>
          Gyro:
          <input
            type="range"
            min={0}
            max={360}
            value={rotX}
            onChange={e => setRotX(Number(e.target.value))}
            style={{ margin: '0 8px', verticalAlign: 'middle' }}
          />
          <input
            type="number"
            min={0}
            max={360}
            value={rotX}
            onChange={e => setRotX(clamp(Number(e.target.value)))}
            style={{ width: 60, marginRight: 4, verticalAlign: 'middle' }}
          />
          °
        </label>
      </div>
      {/* Tilt (Y axis) */}
      <div style={{ marginBottom: 12 }}>
        <label>
          Tilt:
          <input
            type="range"
            min={0}
            max={360}
            value={rotY}
            onChange={e => setRotY(Number(e.target.value))}
            style={{ margin: '0 8px', verticalAlign: 'middle' }}
          />
          <input
            type="number"
            min={0}
            max={360}
            value={rotY}
            onChange={e => setRotY(clamp(Number(e.target.value)))}
            style={{ width: 60, marginRight: 4, verticalAlign: 'middle' }}
          />
          °
        </label>
      </div>
      {/* Z Rotation (spin) */}
      <div>
        <label>
            Spin Rate (RPM):
            <input
            type="range"
            min={0}
            max={3000}
            step={10}
            value={rotZ}
            onChange={e => setRotZ(Number(e.target.value))}
            style={{ margin: '0 8px', verticalAlign: 'middle' }}
            />
            <input
            type="number"
            min={0}
            max={3000}
            value={rotZ}
            onChange={e => setRotZ(Number(e.target.value))}
            style={{ width: 80, marginRight: 4, verticalAlign: 'middle' }}
            />
            RPM
        </label>
    </div>

    </div>
  );
}
