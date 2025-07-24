import React from 'react';
import PlayButton from './PlayButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

// Spin axis deg to Tilt time string
function axisToTiltTime(degrees) {
  const wrappedDeg = (degrees + 360) % 360; // to never have negative
  const value = (degrees / 30 ) % 12;
  const hours = value === 0 ? 12 : Math.floor(value); // if 0, make 12, otherwise just round it down to nearest hour
  const minutes = Math.round((value - Math.floor(value)) * 60);
  return { hours, minutes };
}


// Tilt time string to spin axis deg
function tiltTimeToAxisDeg(hours, minutes) {
  const value = ((hours % 12) || 12) + (minutes / 60); //  10:15 = 10.25 
  const degrees = ((value) % 12) * 30;    // the +6 offsets it the 90 from spin axis and %12 finds the hour (then multiplies by degrees to get the angle)
  return degrees;
}



export default function RotationSliders({ rotX, setRotX, rotY, setRotY, rotZ, setRotZ, orientX, setOrientX, orientY, setOrientY, playing, setPlaying }) {
    const clamp = (value) => Math.max(0, Math.min(360, value));


    return (

        <div style={{
            position: 'absolute',
            top: 80,
            left: 20,
            zIndex: 10,
            background: 'rgba(255,255,255,0.95)',
            padding: 16,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            fontFamily: 'sans-serif',
        }}>

            {/* Orientation Sliders */}
            <h4 style={{ marginTop:0 }}>Orientation</h4>
            <div style={{ marginBottom: 12 }}>
                <label>
                    X Axis:
                    <input
                        type="range"
                        min={0}
                        max={360}
                        value={orientX}
                        onChange={e => setOrientX(Number(e.target.value))}
                        style={{ margin: '0 8px', verticalAlign: 'middle' }}
                    />
                    <input
                        type="number"
                        min={0}
                        max={360}
                        value={orientX}
                        onChange={e => setOrientX(clamp(Number(e.target.value)))}
                        style={{ width: 60, marginRight: 4, verticalAlign: 'middle' }}
                    />
                    °
                </label>
            </div>
            <div style={{ marginBottom: 20 }}>
                <label>
                    Y Axis:
                    <input
                        type="range"
                        min={0}
                        max={360}
                        value={orientY}
                        onChange={e => setOrientY(Number(e.target.value))}
                        style={{ margin: '0 8px', verticalAlign: 'middle' }}
                    />
                    <input
                        type="number"
                        min={0}
                        max={360}
                        value={orientY}
                        onChange={e => setOrientY(clamp(Number(e.target.value)))}
                        style={{ width: 60, marginRight: 4, verticalAlign: 'middle' }}
                    />
                    °
                </label>
            </div>

         
            {/* // Tilt Time Input */}
            <h4 style={{ marginBottom: 8 }}>Tilt (Adjust Before Gyro)</h4>
            <div style={{ marginBottom: 12, maxWidth: 200 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                ampm={false}
                displayStaticWrapperAs="desktop"
                views={['hours', 'minutes']}
                minutesStep={1}
                format="hh:mm"
                value={dayjs().hour(axisToTiltTime(rotZ).hours).minute(axisToTiltTime(rotZ).minutes)}
                onChange={(newValue) => {
                    if (newValue) {
                    const h = newValue.hour() % 12 || 12;
                    const m = newValue.minute();
                    const angle = tiltTimeToAxisDeg(h, m);
                    setRotZ(angle);
                    }
                }}
                />
            </LocalizationProvider>
            </div>

            {/* Spin Axis (Y axis) */}
            <div style={{ marginBottom: 12 }}>
                <label>
                    Spin Axis:
                    <input
                        type="range"
                        min={0}
                        max={360}
                        value={rotZ}
                        onChange={e => setRotZ(Number(e.target.value))}
                        style={{ margin: '0 8px', verticalAlign: 'middle' }}
                    />
                    <input
                        type="number"
                        min={0}
                        max={360}
                        value={rotZ}
                        onChange={e => setRotZ(clamp(Number(e.target.value)))}
                        style={{ width: 60, marginRight: 4, verticalAlign: 'middle' }}
                    />
                    °
                </label>
            </div>


            {/* Gyro (X axis) */}
            <h4 style={{ marginBottom: 8 }}>Spin Axis</h4>
            <div style={{ marginBottom: 12 }}>
                <label>
                    Gyro:
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


            {/* Z Rotation (spinning action) */}
            <h4 style={{ marginBottom: 8 }}>Speed</h4>
            <div>
                <label>
                    Spin Rate:
                    <input
                        type="range"
                        min={0}
                        max={3000}
                        step={10}
                        value={rotX}
                        onChange={e => setRotX(Number(e.target.value))}
                        style={{ margin: '0 8px', verticalAlign: 'middle' }}
                    />
                    <input
                        type="number"
                        min={0}
                        max={3000}
                        value={rotX}
                        onChange={e => setRotX(Number(e.target.value))}
                        style={{ width: 80, marginRight: 4, verticalAlign: 'middle' }}
                    />
                    RPM
                </label>
            </div>

        </div>
    );
}
