import React from 'react';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Leadership from './Leadership';
import CallToActionBanner from './CallToActionBanner';
import Contribute from './Contribute';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Leadership />
      <CallToActionBanner />
      <Contribute />
    </main>
  );
};

export default Home;

