import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';

const Hero = () => {
  return (
    <section className="hero" id="top" style={{ overflow: 'visible', paddingBottom: '40px' }}>
      <div className="hero-bg-image"></div>
      
      <ContainerScroll
        titleComponent={
          <div className="hero-inner" style={{ paddingBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <span className="eyebrow on-navy" style={{ justifyContent: 'center' }}><span className="dot"></span>Grassroots Humanitarian Action • Operating Since 1999</span>
            <h1 style={{ textAlign: 'center', marginTop: '20px', fontSize: 'clamp(32px, 4.5vw, 56px)' }}>
              Lifting lives, restoring dignity, and <br className="hidden md:block" />
              <em>empowering</em> the underserved.
            </h1>
            <p className="lede" style={{ textAlign: 'center', margin: '20px auto', maxWidth: '600px' }}>
              Christ the Greatest Foundation is dedicated to holistic grassroots transformation across Ondo State — providing zero-cost basic education, clothing vulnerable pupils across schools, and ministering to correctional facilities.
            </p>
            <div className="cta-group" style={{ justifyContent: 'center' }}>
              <a href="#get-involved" className="btn btn-primary">Support Our Mission</a>
              <a href="#programs" className="btn btn-ghost-on-navy">Explore Our Programs</a>
            </div>
          </div>
        }
      >
        <img
          src="/foundation.jpg" 
          onError={(e) => { e.target.src = '/hero-bg.jpg' }}
          alt="Foundation impact"
          className="mx-auto rounded-2xl object-cover h-full w-full"
          draggable={false}
        />
      </ContainerScroll>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
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
