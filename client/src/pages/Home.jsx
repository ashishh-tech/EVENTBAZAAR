import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="__bazaar_Home">
      <nav className="home-nav">
        <div className="brand">Event<span>Bazaar</span></div>
        <div className="nav-links">
          <button className="btn-ghost" onClick={() => navigate('/auth')}>Sign In</button>
          <button className="btn-solid" onClick={() => navigate('/auth')}>Get Started</button>
        </div>
      </nav>

      <div className="hero-section">
        <div className="dots-grid"></div>
        <div className="mandala-ring"></div>
        <div className="hero-content fade-in visible">
          <div className="brand-mark">✦ THE #1 EVENT MARKETPLACE</div>
          <h1 className="hero-title">
            Book India's Best<br />
            <em>College Event Planners</em>
          </h1>
          <p className="hero-subtitle">
            From technical summits to massive cultural nights.<br/> 
            Discover, compare, and hire verified planners instantly.
          </p>
          
          <div className="hero-actions">
            <button className="btn-solid large" onClick={() => navigate('/auth')}>
              Start Planning 🚀
            </button>
            <button className="btn-outline large" onClick={() => navigate('/admin')}>
              Admin Dashboard
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="h-stat"><h2>2.4K+</h2><p>Verified Planners</p></div>
            <div className="h-stat"><h2>18K+</h2><p>Events Executed</p></div>
            <div className="h-stat"><h2>340+</h2><p>Colleges onboarded</p></div>
          </div>
        </div>
      </div>

      <div className="home-demo-links">
        <h3>Explore Flow Modules</h3>
        <div className="module-cards">
          <div className="m-card" onClick={() => navigate('/checkout')}>
            <span className="m-icon">💳</span>
            <h4>Step 5: Booking</h4>
            <p>View the checkout process</p>
          </div>
          <div className="m-card" onClick={() => navigate('/chat')}>
            <span className="m-icon">💬</span>
            <h4>Step 6: Chat UI</h4>
            <p>Real-time negotiation</p>
          </div>
          <div className="m-card" onClick={() => navigate('/admin')}>
            <span className="m-icon">📊</span>
            <h4>Step 7: Admin</h4>
            <p>Platform overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}
