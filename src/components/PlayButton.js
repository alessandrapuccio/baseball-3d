import React from 'react';

function PlayButton({ playing, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '1.2em',
        borderRadius: 8,
        border: 'none',
        background: playing ? '#e74c3c' : '#27ae60',
        color: '#fff',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        marginBottom: '12px'
      }}
    >
      {playing ? 'Pause' : 'Play'}
    </button>
  );
}

export default PlayButton;
