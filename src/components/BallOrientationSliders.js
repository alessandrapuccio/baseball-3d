// // BallOrientationSliders.js
// import React, { useEffect, useState } from "react";

// export default function BallOrientationSliders({
//   onOrientationChange, // callback: ({ rotX, rotY }) => {}
//   pitchKey,
// }) {
//   const [rotX, setRotX] = useState(0); // user lat offset
//   const [rotY, setRotY] = useState(0); // user lon offset
//   const [lastPitchKey, setLastPitchKey] = useState(null);

//   // Reset sliders on pitch change
//   useEffect(() => {
//     if (pitchKey !== lastPitchKey) {
//       setRotX(0);
//       setRotY(0);
//       setLastPitchKey(pitchKey);
//     }
//   }, [pitchKey, lastPitchKey]);

//   // Whenever the sliders change, send new offsets up to parent
//   useEffect(() => {
//     onOrientationChange({ rotX, rotY });
//   }, [rotX, rotY, onOrientationChange]);

//   return (
//     <div
//       style={{
//         position: "absolute",
//         top: 330,
//         left: 20,
//         zIndex: 20,
//         background: "rgba(255,255,255,0.96)",
//         padding: 12,
//         borderRadius: 6,
//         boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//         fontFamily: "sans-serif",
//         width: 260,
//         fontSize: 14,
//       }}
//     >
//       <h4 style={{ margin: "4px 0 8px" }}>Ball Orientation X-axis (°)</h4>
//       <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//         <input
//           type="range"
//           min={-180}
//           max={180}
//           value={rotX}
//           onChange={(e) => setRotX(Number(e.target.value))}
//           style={{ flex: 1 }}
//         />
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <input
//             type="number"
//             min={-180}
//             max={180}
//             value={rotX}
//             onChange={(e) => setRotX(Number(e.target.value))}
//             style={{
//               width: 60,
//               padding: 2,
//               fontSize: 13,
//             }}
//           />
//           <span style={{ marginLeft: 2 }}>°</span>
//         </div>
//       </div>

//       <h4 style={{ margin: "12px 0 8px" }}>Ball Orientation Y-axis (°)</h4>
//       <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//         <input
//           type="range"
//           min={-90}
//           max={90}
//           value={rotY}
//           onChange={(e) => setRotY(Number(e.target.value))}
//           style={{ flex: 1 }}
//         />
//         <div style={{ display: "flex", alignItems: "center" }}>
//           <input
//             type="number"
//             min={-90}
//             max={90}
//             value={rotY}
//             onChange={(e) => setRotY(Number(e.target.value))}
//             style={{
//               width: 60,
//               padding: 2,
//               fontSize: 13,
//             }}
//           />
//           <span style={{ marginLeft: 2 }}>°</span>
//         </div>
//       </div> 

//       <button
//         onClick={() => {
//           setRotX(0);
//           setRotY(0);
//         }}
//         style={{
//           marginTop: 16,
//           padding: "5px 10px",
//           borderRadius: 4,
//           border: "1px solid #ccc",
//           background: "#f5f5f5",
//           cursor: "pointer",
//           fontSize: 13,
//         }}
//       >
//         Reset Orientation
//       </button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

export default function BallOrientationSliders({ onOrientationChange, pitchKey }) {
  const [top, setTop] = useState(0);   // yaw
  const [front, setFront] = useState(0); // pitch

  // Whenever sliders change, notify parent
  useEffect(() => {
    onOrientationChange({ rotX: top, rotY: front });
  }, [top, front, onOrientationChange]);

  // Reset sliders when a new pitch is loaded
  useEffect(() => {
    setTop(0);
    setFront(0);
  }, [pitchKey]);

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
      {/* TOP */}
      <div className="slider-row">
        <label>Top (°):</label>
        <input
          type="range"
          min={-180}
          max={180}
          value={top}
          onChange={(e) => setTop(Number(e.target.value))}
        />
        <input
          type="number"
          min={-180}
          max={180}
          value={top}
          onChange={(e) => setTop(Number(e.target.value))}
        />
      </div>

      {/* FRONT */}
      <div className="slider-row">
        <label>Front (°):</label>
        <input
          type="range"
          min={-90}
          max={90}
          value={front}
          onChange={(e) => setFront(Number(e.target.value))}
        />
        <input
          type="number"
          min={-90}
          max={90}
          value={front}
          onChange={(e) => setFront(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
 