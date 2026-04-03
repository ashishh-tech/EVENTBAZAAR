import React from 'react';
import './Admin.css';

export default function Admin() {
  return (
    <div className="__bazaar_Admin">
      {/* Top Nav */}
      <nav className="admin-topnav">
        <div className="brand">Event<span>Bazaar</span> Admin</div>
        <div className="nav-right">
          <div className="user-avatar">AD</div>
        </div>
      </nav>

      <div className="admin-shell">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <ul>
            <li className="active">Dashboard</li>
            <li>Planners</li>
            <li>Bookings</li>
            <li>Disputes</li>
            <li>Settings</li>
          </ul>
        </aside>

        {/* Content */}
        <div className="admin-content">
          <h1 className="admin-title">Platform Overview</h1>
          <div className="admin-stats-grid">
            <div className="stat-card">
              <div className="stat-val">2.4K+</div>
              <div className="stat-label">Verified Planners</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">18K</div>
              <div className="stat-label">Total Events</div>
            </div>
            <div className="stat-card">
              <div className="stat-val">₹42L</div>
              <div className="stat-label">Platform Volume</div>
            </div>
          </div>

          <div className="admin-recent">
            <h2>Recent Planner Registrations</h2>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Planner</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sharma Events Co.</td>
                  <td>Mumbai</td>
                  <td><span className="badge pending">Pending</span></td>
                  <td><button className="btn-verify">Verify</button></td>
                </tr>
                <tr>
                  <td>Rhythm Productions</td>
                  <td>Delhi</td>
                  <td><span className="badge active">Active</span></td>
                  <td><button className="btn-view">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
