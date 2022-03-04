import React from 'react';
import HomeServicesBlurb from '../components/Homepage/Services-blurb';
import AboutUsContent from '../components/Homepage/AboutUs';
// import Testimonials from '../components/Homepage/Testimonials';
import LandingBanner from '../components/Homepage/LandingBanner';
// import CarouselGallery from '../components/Homepage/GalleryCarousel';

const HomePage = (props) => {
  return (
    <div className="main-container">
      <LandingBanner />
      <AboutUsContent />
      {/*<Testimonials />*/}
      <HomeServicesBlurb />
      {/*<CarouselGallery />*/}
    </div>
  );
};

export default HomePage;
