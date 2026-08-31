import React from 'react';

const CallToActionBanner = () => {
  return (
    <section className="cta-banner-section" id="partner-banner">
      <div className="container">
        <div className="cta-banner-card reveal">
          <div className="cta-banner-glow" aria-hidden="true"></div>
          <div className="cta-banner-content">
            <span className="eyebrow on-navy">
              <span className="dot"></span>
              Join the Grassroots Movement
            </span>
            <h2>
              Transforming Lives Through <em>Education, Dignity &amp; Care</em>
            </h2>
            <p>
              Every uniform stitched, every lesson taught at zero cost, and every prison welfare package delivered begins with committed individuals and visionary organizations like you.
            </p>
            <div className="cta-banner-actions">
              <a href="#get-involved" className="btn btn-primary btn-arrow">
                <span>Support Our Mission</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#get-involved" className="btn btn-ghost-on-navy">
                CSR &amp; Corporate Partnerships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
