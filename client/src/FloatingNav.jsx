import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FloatingNav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 99999,
      fontFamily: '"Cabinet Grotesk", sans-serif'
    }}>
      {open && (
        <div style={{
          backgroundColor: '#111009',
          border: '1px solid #FF6B00',
          padding: '10px',
          borderRadius: '12px',
          marginBottom: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{color: '#9A8F87', fontSize: '10px', textTransform:'uppercase', textAlign:'center'}}>Developer Menu</div>
          <button onClick={() => { navigate('/'); setOpen(false); }} style={btnStyle}>🏠 Landing Page</button>
          <button onClick={() => { navigate('/auth'); setOpen(false); }} style={btnStyle}>🔐 Auth (Step 4)</button>
          <button onClick={() => { navigate('/checkout'); setOpen(false); }} style={btnStyle}>💳 Booking (Step 5)</button>
          <button onClick={() => { navigate('/chat'); setOpen(false); }} style={btnStyle}>💬 Chat (Step 6)</button>
          <button onClick={() => { navigate('/admin'); setOpen(false); }} style={btnStyle}>📊 Admin (Step 7)</button>
        </div>
      )}
      
      <button 
        onClick={() => setOpen(!open)}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '25px',
          backgroundColor: '#FF6B00',
          color: 'white',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(255, 107, 0, 0.4)',
          float: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {open ? '✖' : '🧭'}
      </button>
    </div>
  );
}

const btnStyle = {
  background: '#1F1C1A',
  color: '#F0EAE3',
  border: '1px solid #2C2826',
  padding: '10px 16px',
  borderRadius: '8px',
  cursor: 'pointer',
  textAlign: 'left',
  fontWeight: 'bold',
  transition: '0.2s'
};
