import React from 'react';
import HomeServicesBlurb from '../components/Homepage/Services-blurb';
import AboutUsContent from '../components/Homepage/AboutUs';
import Testimonials from '../components/Homepage/Testimonials';
import LandingBanner from '../components/Homepage/LandingBanner';
const HomePage = () => {
  return (
    <div className="main-container">
      <LandingBanner />

      <h1 className="h1-title primary">
        about us
        <hr />
      </h1>
      <AboutUsContent />

      <h1 className="h1-title primary">testimonials</h1>
      <Testimonials />
      <div className="services">
        <h1 className="h1-title primary">
          services <hr />
        </h1>
        <span className="banner"> </span>

        <HomeServicesBlurb />
      </div>
      <div className="gallery">insert image player </div>
    </div>
  );
};

export default HomePage;
