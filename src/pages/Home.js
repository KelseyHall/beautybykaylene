import React from 'react';
import HomeServicesBlurb from '../components/Homepage/Services-blurb';
import AboutUsContent from '../components/Homepage/AboutUs';
// import Testimonials from '../components/Homepage/Testimonials';
import LandingBanner from '../components/Homepage/LandingBanner';
import CarouselGallery from '../components/Homepage/GalleryCarousel';
// import GetintouchForm from '../components/GetInTouchForm';

const HomePage = () => {
  return (
    <div className="main-container">
      <LandingBanner />
      <AboutUsContent />
      {/*<Testimonials />*/}
      <HomeServicesBlurb />
      <CarouselGallery />
    </div>
  );
};

export default HomePage;
