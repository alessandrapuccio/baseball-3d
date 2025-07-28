import React from "react";

const PitchInfoPanels = ({ selectedPitch, userSpinAxis }) => {
  if (!selectedPitch) return null;

  const seamKeys = [
    "seam_orientation_xx",
    "seam_orientation_xy",
    "seam_orientation_xz",
    "seam_orientation_yx",
    "seam_orientation_yy",
    "seam_orientation_yz",
    "seam_orientation_zx",
    "seam_orientation_zy",
    "seam_orientation_zz",
  ];

  const formattedSeamMatrix = seamKeys
    .map((key) =>
      selectedPitch[key] !== undefined
        ? Number(selectedPitch[key]).toFixed(5)
        : "n/a"
    )
    .join(", ");

  return (
    <>
      {/* Original Pitch Data Panel */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          background: "rgba(255,255,255,0.96)",
          padding: 18,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
          fontFamily: "monospace",
          fontSize: 14,
          zIndex: 99,
          minWidth: 360,
          whiteSpace: "pre-wrap",
          lineHeight: 1.5,
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: 16, fontWeight: "bold" }}>Original Pitch Data:</div>
        <b>Pitch Number:</b> {selectedPitch.PitchNumber}
        <br />
        <b>Pitch Type:</b> {selectedPitch.PitchType}
        <br />
        <b>Pitch Group:</b> {selectedPitch.PitchGroup}
        <br />
        <b>Pitch ID:</b> {selectedPitch.PitchUID}
        <br />
        <b>Spin Vector:</b>{" "}
        {`x: ${selectedPitch.spin_x?.toFixed(4) ?? "n/a"}, y: ${
          selectedPitch.spin_y?.toFixed(4) ?? "n/a"
        }, z: ${selectedPitch.spin_z?.toFixed(4) ?? "n/a"}`}
        <br />
        <b>
          Seam orientation matrix (xx, xy, xz, yx, yy, yz, zx, zy, zz):
        </b>
        <br />
        {formattedSeamMatrix}
      </div>

      {/* Adjusted Pitch Info Panel */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 720, // Positioned next to original panel
          background: "rgba(245,245,245,0.96)",
          padding: 18,
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.09)",
          fontFamily: "monospace",
          fontSize: 14,
          zIndex: 99,
          minWidth: 300,
          whiteSpace: "pre-wrap",
          lineHeight: 1.5,
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: 16, fontWeight: "bold" }}>Adjusted Pitch Data:</div>
        <b>Adjusted Spin Axis:</b>
        <br />
        x: {userSpinAxis?.x.toFixed(3)}, y: {userSpinAxis?.y.toFixed(3)}, z:{" "}
        {userSpinAxis?.z.toFixed(3)}
      </div>
    </>
  );
};

export default PitchInfoPanels;
