import React from 'react';
import './Auth.css';

export default function Auth() {
  return (
    <div className="__bazaar_Auth" dangerouslySetInnerHTML={{ __html: `

<!-- LEFT PANEL -->
<div class="left-panel">
  <div class="dots-grid"></div>
  <div class="mandala-ring"></div>
  <div class="left-content">
    <div class="brand-mark">✦ EventBazaar</div>
    <h1 class="left-headline">
      India's #1<br>
      <em>College Event</em><br>
      Planner Marketplace
    </h1>
    <p class="left-sub">
      From tech summits to cultural nights — find, compare, and book verified event planners in minutes.
    </p>
    <div class="stats-row">
      <div class="stat">
        <div class="stat-num">2.4<span>K+</span></div>
        <div class="stat-label">Planners</div>
      </div>
      <div class="stat">
        <div class="stat-num">18<span>K</span></div>
        <div class="stat-label">Events</div>
      </div>
      <div class="stat">
        <div class="stat-num">340<span>+</span></div>
        <div class="stat-label">Colleges</div>
      </div>
    </div>
  </div>
</div>

<!-- RIGHT PANEL -->
<div class="right-panel">
  <div class="auth-card" id="authCard">

    <div class="mobile-brand">
      <div class="mobile-brand-name">Event<span>Bazaar</span></div>
      <div class="mobile-brand-sub">College Event Planner Marketplace</div>
    </div>

    <!-- Tabs -->
    <div class="tab-row">
      <button class="tab-btn active" id="loginTab" onclick="switchTab('login')">Sign In</button>
      <button class="tab-btn" id="registerTab" onclick="switchTab('register')">Create Account</button>
    </div>

    <!-- ─── LOGIN FORM ─────────────── -->
    <div id="loginForm">
      <div class="form-grid">
        <div class="field">
          <label>Email</label>
          <div class="input-wrap">
            <span class="icon">✉</span>
            <input type="email" id="loginEmail" placeholder="you@college.edu" />
          </div>
          <span class="field-error" id="loginEmailErr">Enter a valid email</span>
        </div>

        <div class="field">
          <label>Password</label>
          <div class="input-wrap">
            <span class="icon">🔒</span>
            <input type="password" id="loginPass" placeholder="••••••••" />
            <button class="pass-toggle" onclick="togglePass('loginPass', this)">👁</button>
          </div>
          <span class="field-error" id="loginPassErr">Password is required</span>
        </div>

        <div class="forgot-link"><a href="#">Forgot password?</a></div>

        <button class="submit-btn" id="loginBtn" onclick="handleLogin()">
          Sign In to EventBazaar
        </button>
      </div>

      <div class="divider">or continue with</div>
      <div class="social-row">
        <button class="social-btn">
          <svg viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Google
        </button>
        <button class="social-btn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88V14.9H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.9h-2.33V21.9C18.34 21.12 22 17 22 12c0-5.52-4.48-10-10-10z"/></svg>
          Facebook
        </button>
      </div>

      <div class="auth-footer">
        Don't have an account? <a href="#" onclick="switchTab('register'); return false;">Register free</a>
      </div>
    </div>

    <!-- ─── REGISTER FORM ─────────────── -->
    <div id="registerForm" style="display:none">
      <!-- Role Selection -->
      <div class="role-section">
        <div class="role-label">I am a</div>
        <div class="role-chips">
          <div class="role-chip selected" id="chip-organizer" onclick="selectRole('organizer')">
            <span class="chip-icon">🎓</span>
            <span>Organizer</span>
          </div>
          <div class="role-chip" id="chip-planner" onclick="selectRole('planner')">
            <span class="chip-icon">🎪</span>
            <span>Planner</span>
          </div>
        </div>
      </div>

      <div class="form-grid">
        <div class="form-row">
          <div class="field">
            <label>First Name</label>
            <div class="input-wrap">
              <span class="icon">👤</span>
              <input type="text" id="regFirst" placeholder="Arjun" />
            </div>
            <span class="field-error" id="regFirstErr">Required</span>
          </div>
          <div class="field">
            <label>Last Name</label>
            <div class="input-wrap">
              <span class="icon">👤</span>
              <input type="text" id="regLast" placeholder="Sharma" />
            </div>
          </div>
        </div>

        <div class="field">
          <label>Email</label>
          <div class="input-wrap">
            <span class="icon">✉</span>
            <input type="email" id="regEmail" placeholder="arjun@iitb.ac.in" />
          </div>
          <span class="field-error" id="regEmailErr">Enter a valid email</span>
        </div>

        <div class="field">
          <label>Phone</label>
          <div class="input-wrap">
            <span class="icon">📱</span>
            <input type="tel" id="regPhone" placeholder="+91 98765 43210" />
          </div>
          <span class="field-error" id="regPhoneErr">Enter valid Indian number</span>
        </div>

        <!-- Dynamic: College (organizer) or Business (planner) -->
        <div class="field" id="orgField">
          <label>College Name</label>
          <div class="input-wrap">
            <span class="icon">🏛</span>
            <input type="text" id="regOrg" placeholder="IIT Bombay" />
          </div>
        </div>
        <div class="field" id="bizField" style="display:none">
          <label>Business Name</label>
          <div class="input-wrap">
            <span class="icon">🏢</span>
            <input type="text" id="regBiz" placeholder="Sharma Events Pvt Ltd" />
          </div>
        </div>

        <div class="field">
          <label>Password</label>
          <div class="input-wrap">
            <span class="icon">🔒</span>
            <input type="password" id="regPass" placeholder="Min. 8 characters" oninput="checkStrength(this)" />
            <button class="pass-toggle" onclick="togglePass('regPass', this)">👁</button>
          </div>
          <div class="strength-bar" id="strengthBar">
            <div class="strength-fill" id="strengthFill"></div>
          </div>
          <span class="field-error" id="regPassErr">Min 8 chars, 1 uppercase, 1 number</span>
        </div>

        <button class="submit-btn" id="registerBtn" onclick="handleRegister()">
          Create My Account
        </button>
      </div>

      <div class="terms-note">
        By creating an account you agree to our
        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
      </div>

      <div class="auth-footer">
        Already have an account? <a href="#" onclick="switchTab('login'); return false;">Sign in</a>
      </div>
    </div>

  </div>
</div>

<!-- Toast -->
<div class="toast" id="toast">
  <div class="toast-dot"></div>
  <span id="toastMsg">Welcome back!</span>
</div>


` }} />
  );
}
