import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="reveal">
          <span className="eyebrow"><span className="dot"></span>About the Foundation</span>
          <h2>A community mandate, carried since 1999.</h2>
          <div className="about-copy">
            <p>Christ the Greatest Foundation is an indigenous humanitarian organization based in Iju, Akure North LGA, Ondo State — built from a single conviction: that poverty should never decide who gets to learn, belong, or be treated with dignity.</p>
            <p>What began as a tuition-free classroom in Iju has grown into a network of programs reaching pupils in neighbouring schools, inmates in correctional facilities, and community members training for ministry and leadership.</p>
          </div>
        </div>

        <div>
          <div className="values-pill-grid">
            <div className="value-pill-card reveal stagger-1 emerald-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <strong>Zero-Cost Access</strong>
                <span className="desc">No child is turned away from schooling for lack of fees, uniforms, or textbooks.</span>
              </div>
            </div>

            <div className="value-pill-card reveal stagger-2 gold-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div>
                <strong>Human Dignity</strong>
                <span className="desc">Every pupil and inmate is treated with utmost respect, honor, and heartfelt care.</span>
              </div>
            </div>

            <div className="value-pill-card reveal stagger-3 navy-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <strong>Radical Transparency</strong>
                <span className="desc">Our work is conducted openly and transparently within the local Iju community.</span>
              </div>
            </div>

            <div className="value-pill-card reveal stagger-1 emerald-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <strong>Grassroots Action</strong>
                <span className="desc">Direct, hands-on community engagement without bureaucratic delays.</span>
              </div>
            </div>

            <div className="value-pill-card reveal stagger-2 navy-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                  <line x1="15" y1="3" x2="15" y2="21"/>
                </svg>
              </div>
              <div>
                <strong>Restorative Hope</strong>
                <span className="desc">Bringing spiritual, nutritional, and hygiene rehabilitation to correctional centres.</span>
              </div>
            </div>

            <div className="value-pill-card reveal stagger-3 gold-accent">
              <div className="pill-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div>
                <strong>Empowered Leaders</strong>
                <span className="desc">Equipping emerging leaders with ethical, theological, and practical governance skills.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

