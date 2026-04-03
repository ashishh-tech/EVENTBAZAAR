import React from 'react';
import './Chat.css';

export default function Chat() {
  return (
    <div className="__bazaar_Chat" dangerouslySetInnerHTML={{ __html: `

<!-- TOP NAV -->
<nav class="topnav">
  <div class="brand">Event<span>Bazaar</span></div>
  <div class="nav-right">
    <div class="nav-icon-btn">🔔<div class="notif-dot"></div></div>
    <div class="nav-icon-btn">⚙️</div>
    <div class="user-avatar">AS</div>
  </div>
</nav>

<!-- SHELL -->
<div class="shell">

  <!-- ── INBOX ─────────────────── -->
  <div class="inbox-panel" id="inboxPanel">
    <div class="inbox-header">
      <div class="inbox-title">Messages</div>
      <div class="search-bar">
        <span class="si">🔍</span>
        <input type="text" placeholder="Search chats, planners…" oninput="filterConvs(this.value)"/>
      </div>
    </div>

    <div class="inbox-filters">
      <button class="if-btn active" onclick="filterTab(this,'all')">All <span class="if-count">3</span></button>
      <button class="if-btn" onclick="filterTab(this,'active')">Active</button>
      <button class="if-btn" onclick="filterTab(this,'bookings')">Bookings</button>
    </div>

    <div class="conv-list" id="convList">

      <div class="conv-item active unread" onclick="openConv(this,0)">
        <div class="conv-avatar" style="background:linear-gradient(135deg,#2A1A08,#4A2A0A)">🎪
          <div class="online-dot"></div>
        </div>
        <div class="conv-body">
          <div class="conv-top">
            <span class="conv-name">Sharma Events Co.</span>
            <span class="conv-time">2m ago</span>
          </div>
          <div class="conv-preview">Great! We'll bring the LED truss setup too 🎉</div>
          <div class="conv-meta">
            <span class="conv-tag tag-confirmed">✅ Confirmed</span>
            <span class="unread-badge">2</span>
          </div>
        </div>
      </div>

      <div class="conv-item" onclick="openConv(this,1)">
        <div class="conv-avatar" style="background:linear-gradient(135deg,#0A1A2A,#1A3A5A)">🎵</div>
        <div class="conv-body">
          <div class="conv-top">
            <span class="conv-name">Rhythm Productions</span>
            <span class="conv-time">1h ago</span>
          </div>
          <div class="conv-preview">Can you share the stage dimensions?</div>
          <div class="conv-meta">
            <span class="conv-tag tag-pending">⏳ Pending</span>
          </div>
        </div>
      </div>

      <div class="conv-item unread" onclick="openConv(this,2)">
        <div class="conv-avatar" style="background:linear-gradient(135deg,#1A0A2A,#3A1A5A)">🎨</div>
        <div class="conv-body">
          <div class="conv-top">
            <span class="conv-name">Artistry Collective</span>
            <span class="conv-time">Yesterday</span>
          </div>
          <div class="conv-preview">📎 Mood Board Final v3.pdf</div>
          <div class="conv-meta">
            <span class="conv-tag tag-new">🆕 New Quote</span>
            <span class="unread-badge">1</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ── CHAT PANEL ─────────────── -->
  <div class="chat-panel" id="chatPanel">

    <!-- Chat Header -->
    <div class="chat-header" id="chatHeader">
      <div class="ch-avatar">🎪</div>
      <div class="ch-info">
        <div class="ch-name" id="chName">Sharma Events Co.</div>
        <div class="ch-status">
          <div class="ch-status-dot"></div>
          <span id="chStatus">Online — replies instantly</span>
        </div>
      </div>
      <div class="ch-actions">
        <div class="ch-btn" title="Call">📞</div>
        <div class="ch-btn" title="Search">🔍</div>
        <div class="ch-btn" title="Booking Info" onclick="toggleDrawer()">📋</div>
      </div>
    </div>

    <!-- Booking Context Bar -->
    <div class="booking-bar" onclick="toggleDrawer()">
      <div>
        <div class="bb-label">Active Booking</div>
        <div class="bb-val">TechFest 2025 · Pro Package · ₹90K</div>
      </div>
      <div class="bb-chip">Confirmed</div>
      <div class="bb-arrow">›</div>
    </div>

    <!-- Messages -->
    <div class="messages-area" id="messagesArea">

      <div class="sys-msg">🔒 Booking confirmed — chat unlocked. Be professional and clear!</div>

      <div class="date-divider">Today</div>

      <!-- Recv -->
      <div class="msg-row recv group-start group-end">
        <div class="msg-avatar-sm" style="background:linear-gradient(135deg,#2A1A08,#4A2A0A)">🎪</div>
        <div>
          <div class="bubble b-border">
            Namaste Arjun! 🙏 I'm Vikram from Sharma Events. Congratulations on booking us for TechFest 2025! Excited to make it unforgettable.
          </div>
          <div class="msg-meta" style="justify-content:flex-start;padding-left:4px">
            <span class="msg-time">10:02 AM</span>
          </div>
        </div>
      </div>

      <div class="msg-row recv">
        <div class="msg-avatar-sm"></div>
        <div>
          <div class="bubble b-border">
            I've noted the details — <strong>IIT Bombay Main Auditorium, 15th March, ~500 pax</strong>. Quick question: do you have a preferred stage orientation? East-facing or South-facing?
          </div>
          <div class="msg-meta" style="justify-content:flex-start;padding-left:4px">
            <span class="msg-time">10:03 AM</span>
          </div>
        </div>
      </div>

      <!-- Sent -->
      <div class="msg-row sent group-start group-end" style="margin-top:10px">
        <div class="bubble">
          <div class="quote-reply">
            <div class="quote-author">Vikram · Sharma Events</div>
            do you have a preferred stage orientation?
          </div>
          Hi Vikram! South-facing works best for us — the lighting rig is already on that side. And yes, we'll also need a separate DJ booth area near the stage.
        </div>
      </div>

      <div class="msg-row sent" style="justify-content:flex-end">
        <div class="bubble">
          Also, can you confirm — does the Pro Package include a smoke/fog machine? Our theme is "Into the Future" so we want dramatic entry effects 🎭
        </div>
      </div>

      <div class="msg-row sent group-end" style="justify-content:flex-end">
        <div>
          <div class="bubble">
            I'm attaching our event brief doc for reference 👇
          </div>
          <div class="msg-meta">
            <span class="msg-time">10:08 AM</span>
            <span class="msg-status">✓✓</span>
          </div>
          <div class="reaction-row" style="justify-content:flex-end;margin-top:4px">
            <div class="reaction-chip">👍 1</div>
          </div>
        </div>
      </div>

      <!-- File -->
      <div class="msg-row sent" style="justify-content:flex-end;margin-top:4px">
        <div>
          <div class="file-bubble">
            <div class="file-icon">📄</div>
            <div class="file-info">
              <div class="file-name">TechFest_EventBrief.pdf</div>
              <div class="file-size">2.4 MB · PDF</div>
            </div>
            <div class="file-dl">⬇</div>
          </div>
          <div class="msg-meta">
            <span class="msg-time">10:08 AM</span>
            <span class="msg-status">✓✓</span>
          </div>
        </div>
      </div>

      <!-- Recv response -->
      <div class="msg-row recv group-start" style="margin-top:12px">
        <div class="msg-avatar-sm" style="background:linear-gradient(135deg,#2A1A08,#4A2A0A)">🎪</div>
        <div>
          <div class="bubble b-border">
            Perfect! South-facing stage confirmed. DJ booth — no problem, we'll set it up stage-right with direct cable runs. 🎧
          </div>
          <div class="msg-meta" style="justify-content:flex-start;padding-left:4px">
            <span class="msg-time">10:11 AM</span>
          </div>
        </div>
      </div>

      <div class="msg-row recv group-end">
        <div class="msg-avatar-sm"></div>
        <div>
          <div class="bubble b-border">
            Great! We'll bring the LED truss setup too 🎉 Here's a reference image of what we're planning for your stage:
          </div>
          <div class="msg-meta" style="justify-content:flex-start;padding-left:4px">
            <span class="msg-time">10:12 AM</span>
          </div>
        </div>
      </div>

      <!-- Image bubble from planner -->
      <div class="msg-row recv" style="margin-top:4px">
        <div class="msg-avatar-sm"></div>
        <div>
          <div class="img-bubble">
            <div style="width:220px;height:130px;background:linear-gradient(135deg,#1A0808,#0A1A2A,#2A0A1A);display:flex;align-items:center;justify-content:center;font-size:40px;border-radius:12px;border:1px solid var(--border)">🎆</div>
            <div class="img-overlay">Stage concept render</div>
          </div>
          <div class="msg-meta" style="justify-content:flex-start;padding-left:4px;margin-top:4px">
            <span class="msg-time">10:13 AM</span>
          </div>
        </div>
      </div>

      <!-- Typing indicator -->
      <div class="typing-indicator" id="typingIndicator" style="display:none">
        <div style="width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#2A1A08,#4A2A0A);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">🎪</div>
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
        <span style="font-size:12px">Vikram is typing…</span>
      </div>

    </div>

    <!-- Input Area -->
    <div class="input-area">

      <!-- Reply preview -->
      <div class="reply-preview" id="replyPreview">
        <div class="rp-bar"></div>
        <div class="rp-info">
          <div class="rp-from">Replying to Vikram</div>
          <div class="rp-text" id="replyText">We'll bring the LED truss too…</div>
        </div>
        <div class="rp-close" onclick="closeReply()">×</div>
      </div>

      <!-- Emoji picker -->
      <div class="emoji-picker" id="emojiPicker">
        <div class="ep-emoji" onclick="insertEmoji('👍')">👍</div>
        <div class="ep-emoji" onclick="insertEmoji('🎉')">🎉</div>
        <div class="ep-emoji" onclick="insertEmoji('🙏')">🙏</div>
        <div class="ep-emoji" onclick="insertEmoji('✅')">✅</div>
        <div class="ep-emoji" onclick="insertEmoji('🔥')">🔥</div>
        <div class="ep-emoji" onclick="insertEmoji('😊')">😊</div>
        <div class="ep-emoji" onclick="insertEmoji('🎪')">🎪</div>
        <div class="ep-emoji" onclick="insertEmoji('💡')">💡</div>
        <div class="ep-emoji" onclick="insertEmoji('📅')">📅</div>
        <div class="ep-emoji" onclick="insertEmoji('💰')">💰</div>
        <div class="ep-emoji" onclick="insertEmoji('🎭')">🎭</div>
        <div class="ep-emoji" onclick="insertEmoji('⚡')">⚡</div>
        <div class="ep-emoji" onclick="insertEmoji('🎤')">🎤</div>
        <div class="ep-emoji" onclick="insertEmoji('🎧')">🎧</div>
        <div class="ep-emoji" onclick="insertEmoji('📸')">📸</div>
        <div class="ep-emoji" onclick="insertEmoji('❤️')">❤️</div>
      </div>

      <div class="input-row">
        <div class="input-actions">
          <div class="ia-btn" onclick="triggerFile()" title="Attach file">📎</div>
          <div class="ia-btn" onclick="triggerImage()" title="Send image">🖼</div>
        </div>

        <div class="msg-input-wrap">
          <textarea
            class="msg-input"
            id="msgInput"
            placeholder="Type a message…"
            rows="1"
            oninput="handleInput(this)"
            onkeydown="handleKeydown(event)"
          ></textarea>
          <button class="emoji-btn" onclick="toggleEmoji()">😊</button>
        </div>

        <button class="send-btn disabled" id="sendBtn" onclick="sendMessage()">➤</button>
      </div>

      <input type="file" id="fileInput" style="display:none" onchange="handleFileUpload(this)"/>
      <input type="file" id="imageInput" accept="image/*" style="display:none" onchange="handleImageUpload(this)"/>
    </div>

    <!-- Context Drawer -->
    <div class="context-drawer" id="contextDrawer">
      <div class="cd-header">
        <div class="cd-title">Booking Details</div>
        <div class="cd-close" onclick="toggleDrawer()">×</div>
      </div>

      <div class="cd-section">
        <div class="cd-sec-title">📦 Package</div>
        <div class="cd-row"><span class="cd-label">Package</span><span class="cd-val">Pro Package</span></div>
        <div class="cd-row"><span class="cd-label">Planner</span><span class="cd-val">Sharma Events Co.</span></div>
        <div class="cd-row"><span class="cd-label">Booking Ref</span><span class="cd-val saffron">EB-2025-78XQ</span></div>
      </div>

      <div class="cd-section">
        <div class="cd-sec-title">📅 Event</div>
        <div class="cd-row"><span class="cd-label">Name</span><span class="cd-val">TechFest 2025</span></div>
        <div class="cd-row"><span class="cd-label">Date</span><span class="cd-val">15 Mar 2025</span></div>
        <div class="cd-row"><span class="cd-label">Venue</span><span class="cd-val">IIT Bombay</span></div>
        <div class="cd-row"><span class="cd-label">Guests</span><span class="cd-val">~500 pax</span></div>
      </div>

      <div class="cd-section">
        <div class="cd-sec-title">💰 Payment</div>
        <div class="cd-row"><span class="cd-label">Total</span><span class="cd-val">₹1,06,200</span></div>
        <div class="cd-row"><span class="cd-label">Advance Paid</span><span class="cd-val green">₹31,860 ✓</span></div>
        <div class="cd-row"><span class="cd-label">Balance Due</span><span class="cd-val gold">₹74,340</span></div>
        <div class="cd-row"><span class="cd-label">Due Date</span><span class="cd-val">1 Mar 2025</span></div>
        <div class="cd-status-bar">
          <div class="cd-status-step done"></div>
          <div class="cd-status-step done"></div>
          <div class="cd-status-step active"></div>
          <div class="cd-status-step"></div>
        </div>
      </div>

      <div class="cd-section">
        <div class="cd-sec-title">⚡ Quick Actions</div>
        <button class="cd-action-btn cd-btn-primary">💳 Pay Balance Now</button>
        <button class="cd-action-btn cd-btn-outline">📄 Download Contract</button>
        <button class="cd-action-btn cd-btn-outline">⭐ Leave a Review</button>
        <button class="cd-action-btn cd-btn-outline" style="color:var(--red);border-color:rgba(255,69,69,.3)">🚩 Report Issue</button>
      </div>
    </div>

  </div><!-- /chat-panel -->

</div><!-- /shell -->


` }} />
  );
}
