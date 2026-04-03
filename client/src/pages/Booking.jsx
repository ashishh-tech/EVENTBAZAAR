import React from 'react';
import './Booking.css';

export default function Booking() {
  return (
    <div className="__bazaar_Booking" dangerouslySetInnerHTML={{ __html: `

<!-- NAV -->
<nav class="nav">
  <div class="nav-back" onclick="goBack()">← Back to Profile</div>
  <div class="nav-brand">Event<span>Bazaar</span></div>
  <div class="nav-badge">Secure Booking</div>
</nav>

<!-- PROGRESS -->
<div class="progress-wrap" id="progressWrap">
  <div class="progress-steps">
    <div class="step-item active" id="prog1">
      <div class="step-circle" id="pc1">1</div>
      <div class="step-label">Package</div>
    </div>
    <div class="step-item" id="prog2">
      <div class="step-circle" id="pc2">2</div>
      <div class="step-label">Details</div>
    </div>
    <div class="step-item" id="prog3">
      <div class="step-circle" id="pc3">3</div>
      <div class="step-label">Review</div>
    </div>
    <div class="step-item" id="prog4">
      <div class="step-circle" id="pc4">4</div>
      <div class="step-label">Payment</div>
    </div>
  </div>
</div>

<!-- MAIN LAYOUT -->
<div class="layout" id="mainLayout">

  <!-- LEFT: STEPS -->
  <div class="main-panel">

    <!-- STEP 1: PACKAGE -->
    <div class="step-panel active" id="step1">
      <div class="section-tag">✦ Step 1 of 4</div>
      <h2 class="panel-heading">Choose a Package</h2>
      <p class="panel-sub">Select the package that best fits your event scale and budget.</p>

      <div class="pkg-grid">

        <!-- Package: Basic -->
        <div class="pkg-card" onclick="selectPkg(this,'Basic','₹45,000',45000)" data-pkg="Basic">
          <div class="pkg-select-indicator">✓</div>
          <div class="pkg-badge badge-basic">Starter</div>
          <div class="pkg-top">
            <div>
              <div class="pkg-name">Basic Bundle</div>
              <div class="pkg-tagline">Perfect for small fests up to 300 guests</div>
            </div>
            <div class="pkg-price-box">
              <div class="pkg-price">₹45K</div>
              <div class="pkg-price-note">+ 18% GST</div>
            </div>
          </div>
          <div class="pkg-divider"></div>
          <div class="pkg-features">
            <div class="pkg-feature"><div class="feat-dot"></div>Decor & Setup</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Sound System</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Basic Lighting</div>
            <div class="pkg-feature"><div class="feat-dot"></div>On-site Coordinator</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Up to 300 pax</div>
            <div class="pkg-feature"><div class="feat-dot"></div>8-hour coverage</div>
          </div>
        </div>

        <!-- Package: Pro -->
        <div class="pkg-card selected" onclick="selectPkg(this,'Pro','₹90,000',90000)" data-pkg="Pro">
          <div class="pkg-select-indicator">✓</div>
          <div class="pkg-badge badge-popular">⭐ Most Popular</div>
          <div class="pkg-top">
            <div>
              <div class="pkg-name">Pro Package</div>
              <div class="pkg-tagline">Ideal for cultural nights & tech summits</div>
            </div>
            <div class="pkg-price-box">
              <div class="pkg-price">₹90K</div>
              <div class="pkg-price-note">+ 18% GST</div>
            </div>
          </div>
          <div class="pkg-divider"></div>
          <div class="pkg-features">
            <div class="pkg-feature"><div class="feat-dot"></div>Premium Decor</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Pro Sound + DJ</div>
            <div class="pkg-feature"><div class="feat-dot"></div>LED Stage Lights</div>
            <div class="pkg-feature"><div class="feat-dot"></div>2 Coordinators</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Up to 800 pax</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Photography Add-on</div>
            <div class="pkg-feature"><div class="feat-dot"></div>12-hour coverage</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Catering support</div>
          </div>
        </div>

        <!-- Package: Elite -->
        <div class="pkg-card" onclick="selectPkg(this,'Elite','₹1,75,000',175000)" data-pkg="Elite">
          <div class="pkg-select-indicator">✓</div>
          <div class="pkg-badge badge-best">👑 Best Value</div>
          <div class="pkg-top">
            <div>
              <div class="pkg-name">Elite Experience</div>
              <div class="pkg-tagline">Full-scale mega fests & flagship events</div>
            </div>
            <div class="pkg-price-box">
              <div class="pkg-price">₹1.75L</div>
              <div class="pkg-price-note">+ 18% GST</div>
            </div>
          </div>
          <div class="pkg-divider"></div>
          <div class="pkg-features">
            <div class="pkg-feature"><div class="feat-dot"></div>Luxury Stage Design</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Celebrity DJ</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Full AV Production</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Dedicated Team</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Unlimited guests</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Photo + Video</div>
            <div class="pkg-feature"><div class="feat-dot"></div>24-hr support</div>
            <div class="pkg-feature"><div class="feat-dot"></div>Drone coverage</div>
          </div>
        </div>

      </div>
    </div>

    <!-- STEP 2: EVENT DETAILS -->
    <div class="step-panel" id="step2">
      <div class="section-tag">✦ Step 2 of 4</div>
      <h2 class="panel-heading">Event Details</h2>
      <p class="panel-sub">Tell us about your event so the planner can prepare perfectly.</p>

      <div class="form-grid">
        <div class="field" id="f-eventName">
          <label>Event Name</label>
          <div class="input-wrap">
            <span class="icon">🎪</span>
            <input type="text" id="eventName" placeholder="TechFest 2025 — Coding Summit"/>
          </div>
          <div class="field-error">Event name is required</div>
        </div>

        <div class="form-row">
          <div class="field" id="f-eventDate">
            <label>Event Date</label>
            <div class="input-wrap">
              <span class="icon">📅</span>
              <input type="date" id="eventDate" min=""/>
            </div>
            <div class="field-error">Select a future date</div>
          </div>
          <div class="field" id="f-eventTime">
            <label>Start Time</label>
            <div class="input-wrap">
              <span class="icon">🕐</span>
              <input type="time" id="eventTime" value="18:00"/>
            </div>
          </div>
        </div>

        <div class="field" id="f-venue">
          <label>Venue / Campus</label>
          <div class="input-wrap">
            <span class="icon">📍</span>
            <input type="text" id="venue" placeholder="IIT Bombay, Main Auditorium"/>
          </div>
          <div class="field-error">Venue is required</div>
        </div>

        <div class="field" id="f-city">
          <label>City</label>
          <div class="input-wrap">
            <span class="icon">🌆</span>
            <select id="city">
              <option value="">Select city…</option>
              <option>Mumbai</option><option>Delhi</option><option>Bangalore</option>
              <option>Pune</option><option>Hyderabad</option><option>Chennai</option>
              <option>Kolkata</option><option>Ahmedabad</option><option>Jaipur</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field-error">Select your city</div>
        </div>

        <div class="field">
          <label>Event Type</label>
          <div class="type-chips">
            <div class="type-chip" onclick="selectType(this)">🎤 Cultural Night</div>
            <div class="type-chip selected" onclick="selectType(this)">💻 Tech Summit</div>
            <div class="type-chip" onclick="selectType(this)">🎨 Art Fest</div>
            <div class="type-chip" onclick="selectType(this)">🏆 Sports Day</div>
            <div class="type-chip" onclick="selectType(this)">🎓 Convocation</div>
            <div class="type-chip" onclick="selectType(this)">🎭 Drama Fest</div>
          </div>
        </div>

        <div class="field" id="f-capacity">
          <label>Expected Attendees</label>
          <div class="input-wrap">
            <span class="icon">👥</span>
            <input type="number" id="capacity" placeholder="500" min="50" max="10000" oninput="updateCapacity(this)"/>
          </div>
          <div class="capacity-bar">
            <div class="cap-track"><div class="cap-fill" id="capFill" style="width:20%"></div></div>
            <div class="cap-label" id="capLabel">~500 pax</div>
          </div>
        </div>

        <div class="field">
          <label>Special Requirements <span style="color:var(--muted);text-transform:none;font-weight:400">(optional)</span></label>
          <textarea id="requirements" placeholder="E.g. We need a traditional Indian stage setup with marigold decor, vegan catering preferred, 3 mics for panel discussion…"></textarea>
        </div>

        <div class="field" id="f-contactName">
          <label>Your Name</label>
          <div class="input-wrap">
            <span class="icon">👤</span>
            <input type="text" id="contactName" placeholder="Arjun Sharma"/>
          </div>
          <div class="field-error">Required</div>
        </div>

        <div class="form-row">
          <div class="field" id="f-contactPhone">
            <label>Phone</label>
            <div class="input-wrap">
              <span class="icon">📱</span>
              <input type="tel" id="contactPhone" placeholder="+91 98765 43210"/>
            </div>
            <div class="field-error">Valid Indian number required</div>
          </div>
          <div class="field" id="f-contactEmail">
            <label>College Email</label>
            <div class="input-wrap">
              <span class="icon">✉</span>
              <input type="email" id="contactEmail" placeholder="you@iitb.ac.in"/>
            </div>
            <div class="field-error">Valid email required</div>
          </div>
        </div>
      </div>
    </div>

    <!-- STEP 3: REVIEW -->
    <div class="step-panel" id="step3">
      <div class="section-tag">✦ Step 3 of 4</div>
      <h2 class="panel-heading">Review & Confirm</h2>
      <p class="panel-sub">Double-check everything before making the advance payment.</p>

      <div class="review-block">
        <div class="review-block-header">
          <span class="rbh-title">📦 Package</span>
          <span class="rbh-edit" onclick="goToStep(1)">Edit</span>
        </div>
        <div class="review-block-body">
          <div class="review-row">
            <span class="rr-label">Package</span>
            <span class="rr-val" id="rv-pkg">Pro Package</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Base Price</span>
            <span class="rr-val" id="rv-price">₹90,000</span>
          </div>
          <div class="review-row">
            <span class="rr-label">GST (18%)</span>
            <span class="rr-val" id="rv-gst">₹16,200</span>
          </div>
          <div class="review-row" style="font-weight:600">
            <span class="rr-label">Total Amount</span>
            <span class="rr-val" id="rv-total" style="color:var(--saffron)">₹1,06,200</span>
          </div>
          <div class="review-row" style="color:var(--green)">
            <span class="rr-label">Advance (30%)</span>
            <span class="rr-val" id="rv-advance">₹31,860 due now</span>
          </div>
        </div>
      </div>

      <div class="review-block">
        <div class="review-block-header">
          <span class="rbh-title">📋 Event Details</span>
          <span class="rbh-edit" onclick="goToStep(2)">Edit</span>
        </div>
        <div class="review-block-body">
          <div class="review-row">
            <span class="rr-label">Event</span>
            <span class="rr-val" id="rv-name">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Date & Time</span>
            <span class="rr-val" id="rv-datetime">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Venue</span>
            <span class="rr-val" id="rv-venue">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">City</span>
            <span class="rr-val" id="rv-city">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Event Type</span>
            <span class="rr-val" id="rv-type">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Attendees</span>
            <span class="rr-val" id="rv-capacity">—</span>
          </div>
          <div class="review-row">
            <span class="rr-label">Contact</span>
            <span class="rr-val" id="rv-contact">—</span>
          </div>
        </div>
      </div>

      <label class="terms-check" for="termsBox">
        <input type="checkbox" id="termsBox"/>
        <span class="terms-text">
          I agree to EventBazaar's <a href="#">Terms of Service</a> and <a href="#">Cancellation Policy</a>. I understand that the advance payment is non-refundable within 7 days of the event date. Remaining 70% is due 14 days before the event.
        </span>
      </label>
    </div>

    <!-- STEP 4: PAYMENT -->
    <div class="step-panel" id="step4">
      <div class="section-tag">✦ Step 4 of 4</div>
      <h2 class="panel-heading">Secure Payment</h2>
      <p class="panel-sub">Pay the 30% advance to confirm your booking. Balance due 14 days before event.</p>

      <div class="razorpay-secure">
        <span>🔒</span>
        <span>Powered by <span class="razorpay-logo">Razorpay</span> — 256-bit SSL encrypted. Your payment info is never stored on our servers.</span>
      </div>

      <div class="payment-methods">
        <div class="pay-method selected" onclick="selectPay(this)">
          <div class="pay-icon">📱</div>
          <div class="pay-info">
            <div class="pay-name">UPI</div>
            <div class="pay-desc">GPay, PhonePe, Paytm, BHIM & more</div>
          </div>
          <div class="pay-radio"></div>
        </div>
        <div class="pay-method" onclick="selectPay(this)">
          <div class="pay-icon">💳</div>
          <div class="pay-info">
            <div class="pay-name">Credit / Debit Card</div>
            <div class="pay-desc">Visa, Mastercard, RuPay</div>
          </div>
          <div class="pay-radio"></div>
        </div>
        <div class="pay-method" onclick="selectPay(this)">
          <div class="pay-icon">🏦</div>
          <div class="pay-info">
            <div class="pay-name">Net Banking</div>
            <div class="pay-desc">All major Indian banks</div>
          </div>
          <div class="pay-radio"></div>
        </div>
        <div class="pay-method" onclick="selectPay(this)">
          <div class="pay-icon">💰</div>
          <div class="pay-info">
            <div class="pay-name">EMI</div>
            <div class="pay-desc">No-cost EMI on select cards — 3/6/12 months</div>
          </div>
          <div class="pay-radio"></div>
        </div>
      </div>
    </div>

  </div><!-- /main-panel -->

  <!-- RIGHT: SIDEBAR SUMMARY -->
  <div class="sidebar" id="sidebarSummary">
    <div class="summary-card">

      <!-- Planner Info -->
      <div class="summary-planner">
        <div class="planner-avatar">🎪</div>
        <div>
          <div class="planner-name">Sharma Events Co.</div>
          <div class="planner-meta">Mumbai · Verified ✅</div>
          <div class="planner-rating">⭐ 4.9 <span style="color:var(--text-muted)">(128 reviews)</span></div>
        </div>
      </div>

      <!-- Price Breakdown -->
      <div class="summary-section">
        <div class="ss-title">Order Summary</div>
        <div class="summary-row">
          <span>Package</span>
          <span class="val" id="sum-pkg">Pro Package</span>
        </div>
        <div class="summary-row">
          <span>Base price</span>
          <span class="val" id="sum-base">₹90,000</span>
        </div>
        <div class="summary-row">
          <span>GST (18%)</span>
          <span class="val" id="sum-gst">₹16,200</span>
        </div>
        <div class="summary-row" style="padding-top:0">
          <span>Platform fee</span>
          <span class="val">₹0</span>
        </div>
        <div class="summary-row total">
          <span>Total</span>
          <span class="val" id="sum-total">₹1,06,200</span>
        </div>
        <div class="advance-tag">
          🔶 <span><strong id="sum-advance">₹31,860</strong> advance due now · 30% of total</span>
        </div>
      </div>

      <!-- Event Quick Info -->
      <div class="summary-section" id="eventQuickInfo" style="display:none">
        <div class="ss-title">Event</div>
        <div class="summary-row">
          <span>Name</span>
          <span class="val" id="sum-name" style="font-size:13px">—</span>
        </div>
        <div class="summary-row">
          <span>Date</span>
          <span class="val" id="sum-date">—</span>
        </div>
        <div class="summary-row">
          <span>Venue</span>
          <span class="val" id="sum-venue" style="font-size:12px">—</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="summary-section">
        <button class="cta-btn" id="ctaBtn" onclick="handleCTA()">
          Continue →
        </button>
        <button class="back-btn" id="backBtn" onclick="prevStep()" style="display:none">
          ← Go Back
        </button>
        <div class="trust-row">
          <div class="trust-item">🔒 Secure</div>
          <div class="trust-item">✅ Verified</div>
          <div class="trust-item">↩ Refundable*</div>
        </div>
      </div>

    </div>
  </div>

</div><!-- /layout -->

<!-- SUCCESS SCREEN -->
<div class="success-screen" id="successScreen">
  <div class="success-icon">✅</div>
  <h2 class="success-title">Booking Confirmed!</h2>
  <p class="success-sub">
    Your advance payment was successful. <strong>Sharma Events Co.</strong> will contact you within 24 hours to discuss the finer details of your event.
  </p>
  <div class="booking-ref" id="bookingRef">
    📋 EB-2025-78XQ
  </div>
  <div class="success-actions">
    <button class="btn-primary">View Booking Details</button>
    <button class="btn-outline">💬 Chat with Planner</button>
    <button class="btn-outline">📧 Email Receipt</button>
  </div>
  <div class="next-steps">
    <div class="ns-item">
      <div class="ns-icon">📞</div>
      <div class="ns-title">Planner calls you</div>
      <div class="ns-desc">Within 24 hours of booking</div>
    </div>
    <div class="ns-item">
      <div class="ns-icon">📋</div>
      <div class="ns-title">Event checklist</div>
      <div class="ns-desc">Shared 30 days before</div>
    </div>
    <div class="ns-item">
      <div class="ns-icon">💰</div>
      <div class="ns-title">Balance due</div>
      <div class="ns-desc">14 days before event</div>
    </div>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast">
  <span id="toastMsg">Done!</span>
</div>


` }} />
  );
}
