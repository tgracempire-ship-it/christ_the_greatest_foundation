import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <section className="hero" id="top">
      <AnimatedBackground />
      <div className="hero-aurora-1" aria-hidden="true"></div>
      <div className="hero-aurora-2" aria-hidden="true"></div>
      <div className="hero-bg-image"></div>
      <div className="container">
        <div className="hero-inner">
          <span className="eyebrow on-navy"><span className="dot"></span>Grassroots Humanitarian Action • Operating Since 1999</span>
          <h1>Lifting lives, restoring dignity, and <em>empowering</em> the underserved.</h1>
          <p className="lede">Christ the Greatest Foundation is dedicated to holistic grassroots transformation across Ondo State — providing zero-cost basic education, clothing vulnerable pupils across schools, and ministering to correctional facilities.</p>
          <div className="cta-group">
            <a href="#get-involved" className="btn btn-primary btn-arrow">
              <span>Support Our Mission</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#programs" className="btn btn-ghost-on-navy">Explore Our Programs</a>
          </div>
        </div>

        {/* 3 Floating Highlight Cards */}
        <div className="hero-floating-wrapper reveal stagger-1">
          <div className="hero-floating-grid">
            <div className="floating-hero-card gold">
              <div className="card-head">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <span className="card-tag">Education</span>
              </div>
              <h4>100% Zero-Cost Primary Education</h4>
              <p>Complete tuition-free, zero-fee basic schooling, free uniforms, and learning materials for orphans and vulnerable children in Iju.</p>
              <a href="#programs" className="card-link">
                Learn More
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>

            <div className="floating-hero-card emerald">
              <div className="card-head">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <span className="card-tag">Outreach</span>
              </div>
              <h4>Cross-School Uniform &amp; Welfare Outreach</h4>
              <p>Identifying and outfitting underprivileged pupils attending other local public schools who lack standard uniforms, bags, and footwear.</p>
              <a href="#programs" className="card-link">
                Learn More
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>

            <div className="floating-hero-card navy">
              <div className="card-head">
                <div className="card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <line x1="9" y1="3" x2="9" y2="21"/>
                    <line x1="15" y1="3" x2="15" y2="21"/>
                  </svg>
                </div>
                <span className="card-tag">Ministry</span>
              </div>
              <h4>Correctional Visitation &amp; Rehabilitation</h4>
              <p>Providing essential nutrition, hygiene packs, legal advocacy pathfinding, and spiritual restoration for correctional facility inmates.</p>
              <a href="#programs" className="card-link">
                Learn More
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="impact-strip reveal is-visible" id="impact">
          <div className="impact-grid">
            <div className="impact-item">
              <span className="val">100%</span>
              <span className="leader"></span>
              <span className="lbl">Free Tuition Arm</span>
            </div>
            <div className="impact-item">
              <span className="val">Multi-School</span>
              <span className="leader"></span>
              <span className="lbl">Uniform Drives</span>
            </div>
            <div className="impact-item">
              <span className="val">Active</span>
              <span className="leader"></span>
              <span className="lbl">Prison Welfare Ministry</span>
            </div>
            <div className="impact-item">
              <span className="val">Est. 1999</span>
              <span className="leader"></span>
              <span className="lbl">Founded in Iju</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
