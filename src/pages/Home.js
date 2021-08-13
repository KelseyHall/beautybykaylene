import React from 'react';
import HomeServicesBlurb from '../components/Homepage/Services-blurb';
import AboutUsContent from '../components/Homepage/AboutUs';
import Testimonials from '../components/Homepage/Testimonials';
import LandingBanner from '../components/Homepage/LandingBanner';

import BannerImg from '../images/placeholder-2.jpg';
import CarouselGallery from '../components/Homepage/GalleryCarousel';

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
        <img src={BannerImg} alt="services-banner" className="banner" />
        {/*<span className="banner"> </span>*/}

        <HomeServicesBlurb />
      </div>
      <div className="gallery">
        <CarouselGallery />
      </div>
    </div>
  );
};

export default HomePage;
