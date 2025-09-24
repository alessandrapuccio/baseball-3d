// src/pitch-modal.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import PitchVisualModal from "./PitchVisualModal";

// Simple initialization - similar to your working index.jsx
function initializeModal() {
  // Wait for both DOM and React to be ready
  if (typeof createRoot === 'undefined') {
    setTimeout(initializeModal, 100);
    return;
  }

  const containers = document.querySelectorAll('[id$="_container"]');
  
  containers.forEach(container => {
    if (!container.dataset.initialized) {
      const modalId = container.id.replace('_container', '');
      const root = createRoot(container);
      
      // Simple render like your index.jsx
      root.render(React.createElement(PitchVisualModal, {
        modalId: modalId,
        containerId: container.id
      }));
      
      container.dataset.initialized = 'true';
    }
  });
}

// Simpler observer that just checks for new containers
const observer = new MutationObserver(() => {
  // Debounce the initialization
  setTimeout(initializeModal, 50);
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check
document.addEventListener('DOMContentLoaded', initializeModal);

// Also try immediate initialization in case DOM is already ready
initializeModal();