import React from 'react';

const Programs = () => {
  return (
    <section className="programs" id="programs">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot"></span>Our Initiatives</span>
          <h2>Four programs, one mandate.</h2>
          <p>Dedicated grassroots initiatives transforming education, welfare, rehabilitation, and community leadership across Ondo State.</p>
        </div>

        <div className="programs-grid">
          <div className="program-card p-edu reveal stagger-1">
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6l10-3 10 3-10 3-10-3z"/><path d="M6 8.5V15c0 1.5 2.7 3 6 3s6-1.5 6-3V8.5"/><path d="M22 6v7"/></svg>
            </div>
            <h3>Christ the Greatest Free Nursery &amp; Primary School</h3>
            <p>Complete tuition-free, zero-fee foundational primary education, free uniforms, and learning materials for orphans and vulnerable children in Iju.</p>
          </div>

          <div className="program-card p-out reveal stagger-2">
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7l4-4z"/></svg>
            </div>
            <h3>Cross-School Uniform &amp; Educational Support Outreach</h3>
            <p>Identifying and outfitting underprivileged pupils attending other local public and community schools who lack standard uniforms, footwear, and basic books.</p>
          </div>

          <div className="program-card p-min reveal stagger-3">
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="1.5"/><line x1="9" y1="8" x2="9" y2="17"/><line x1="15" y1="8" x2="15" y2="17"/></svg>
            </div>
            <h3>Correctional Facility &amp; Prison Visitation Ministry</h3>
            <p>Compassionate welfare outreaches, basic hygiene and nutritional support, legal guidance pathfinding, and spiritual rehabilitation for inmates.</p>
          </div>

          <div className="program-card p-lead reveal stagger-4">
            <div className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-7-7 18-2.5-7.5L3 11z"/></svg>
            </div>
            <h3>Leadership &amp; Ministerial Training</h3>
            <p>Tuition-free community and ministerial leadership courses hosted at St. Paul High School, Moferere Iju.</p>
          </div>
        </div>

        {/* 6-Segmented Impact Model Strip */}
        <div className="segmented-strip-container reveal">
          <div className="segmented-strip-head">
            <h3>Why Our Grassroots Model Endures</h3>
            <span className="badge-tag">Community-Proven • Since 1999</span>
          </div>
          <div className="segmented-strip-grid">
            <div className="strip-block sb-emerald">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span className="strip-title">25+ Years Proven Track Record</span>
            </div>

            <div className="strip-block sb-gold">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <span className="strip-title">100% Free Foundation Schooling</span>
            </div>

            <div className="strip-block sb-navy">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <span className="strip-title">Multi-School Uniform Drives</span>
            </div>

            <div className="strip-block sb-mint">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="strip-title">Holistic Pupil Nutrition &amp; Care</span>
            </div>

            <div className="strip-block sb-amber">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                  <line x1="15" y1="3" x2="15" y2="21"/>
                </svg>
              </div>
              <span className="strip-title">Direct Prison Visitation &amp; Care</span>
            </div>

            <div className="strip-block sb-deepnavy">
              <div className="strip-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <span className="strip-title">100% Community Accountability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
