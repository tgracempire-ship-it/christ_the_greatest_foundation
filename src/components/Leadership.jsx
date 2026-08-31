import React from 'react';

const Leadership = () => {
  return (
    <section className="leadership" id="leadership">
      <div className="container lead-grid">
        <div className="founder-card reveal">
          <div className="founder-portrait" style={{ backgroundImage: 'url(/pioneer.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
            <div className="founder-overlay"></div>
            <div className="founder-info">
              <h3>Mr. Felix Omoniyi Adebusola</h3>
              <span className="role">Founder &amp; Visionary</span>
            </div>
          </div>
        </div>

        <div className="lead-content reveal stagger-2">
          <span className="eyebrow"><span className="dot"></span>From Our Founder</span>
          <span className="quote-mark" aria-hidden="true">&ldquo;</span>
          <p className="mandate">Our mandate is simple: ensure no human being is denied dignity, learning, or care due to poverty.</p>
          <p className="support-line">Day-to-day leadership of the free school arm is held by <strong>Mr. Omotusi</strong>, Headmaster, alongside the wider Foundation team.</p>

          <div className="verify-card">
            <a href="https://wa.me/2348166158813" target="_blank" rel="noopener noreferrer" className="vc-item" style={{textDecoration: 'none'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <div><span className="vc-label">Direct Contact Line</span><br/><span className="vc-value" style={{color: 'var(--ink)'}}>+234 816 615 8813</span></div>
            </a>
            <div className="vc-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="15" height="10" rx="2"/><path d="M17 10l5-2.5v9L17 14"/></svg>
              <div><span className="vc-label">Media &amp; Coverage Partner</span><br/><span className="vc-value">Omo Iju Television</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
