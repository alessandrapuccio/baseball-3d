// PitchVisualModal.jsx
import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Clock from './components/Clock';
import Field from './components/Field';
import BaseballLoading from './components/BaseballLoading';
import BaseballModel from './components/BaseballModel';

function PitchVisualModal({ modalId, containerId }) {
  const [showClock, setShowClock] = useState(false);
  const [showField, setShowField] = useState(true);
  const [showRod, setShowRod] = useState(false);
  const [pitchData, setPitchData] = useState(null);
  const [spinAxis, setSpinAxis] = useState(new THREE.Vector3(1, 0, 0));
  const [seamLat, setSeamLat] = useState(0);
  const [seamLon, setSeamLon] = useState(0);

  useEffect(() => {
    const handler = (e) => {
      // Only handle messages for this specific modal
      if (e.data?.modalId !== modalId) return;

      switch (e.data.type) {
        case 'modal_clock_toggle':
          setShowClock(Boolean(e.data.value));
          break;
          
        case 'modal_field_toggle':
          setShowField(Boolean(e.data.value));
          break;
          
        case 'modal_rod_toggle':
          setShowRod(Boolean(e.data.value));
          break;
          
        case 'modal_init_pitch':
          const data = e.data.pitchData;
          setPitchData(data);
          
          // Calculate spin axis from pitch data
          const initialSpinAxis = new THREE.Vector3(
            data.spin_backspin,
            data.spin_sidespin,
            -data.spin_gyrospin
          ).normalize();
          setSpinAxis(initialSpinAxis);
          
          // Set seam orientation
          setSeamLat(data.seam_orientation_lat || 0);
          setSeamLon(data.seam_orientation_lon || 0);
          break;
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [modalId]);

  if (!pitchData) {
    return (
      <div style={{ 
        width: "100%", 
        height: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "#f8f9fa"
      }}>
        <div>Loading pitch data...</div>
      </div>
    );
  }

  return (
    <Canvas 
      camera={{ position: [0, 0, 0.45], fov: 45 }}
      style={{ background: "#D1DBE6" }}
    >
      {/* Sky */}
      <mesh scale={[50, 50, 50]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#3b3b3b" side={THREE.BackSide} />
      </mesh>
      
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.3]} intensity={1} />

      {showClock && <Clock />}

      <Suspense fallback={<BaseballLoading />}>
        <BaseballModel 
          spinRate={50} // Fixed spin rate for visual appeal
          playing={true} // Always spinning
          spinAxis={spinAxis}
          currentSeamLat={seamLat}
          currentSeamLon={seamLon}
          useSeamOrientation={true}
          resetSpin={false}
          showRod={showRod}
        />
      </Suspense>
    </Canvas>
  );
}

// Initialize modal when DOM is ready
function initializePitchModal() {
  const containers = document.querySelectorAll('[id$="_container"]');
  
  containers.forEach(container => {
    const modalId = container.id.replace('_container', '');
    
    // Only initialize if not already initialized
    if (!container.dataset.initialized) {
      const root = ReactDOM.createRoot(container);
      root.render(
        <PitchVisualModal 
          modalId={modalId} 
          containerId={container.id} 
        />
      );
      container.dataset.initialized = 'true';
    }
  });
}

// Auto-initialize when DOM changes (for Shiny modals)
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Check if this is a modal container
          if (node.id && node.id.includes('_container')) {
            setTimeout(initializePitchModal, 100);
          }
          // Or check if it contains modal containers
          const containers = node.querySelectorAll && node.querySelectorAll('[id$="_container"]');
          if (containers && containers.length > 0) {
            setTimeout(initializePitchModal, 100);
          }
        }
      });
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check
document.addEventListener('DOMContentLoaded', initializePitchModal);

export default PitchVisualModal;