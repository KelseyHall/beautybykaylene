import React from 'react';
import BannerImg from '../../images/landingBanner.jpg';
const LandingBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-content">
        <h2 className="h2-title primary ">lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          pharetra ac tellus varius. Faucibus egestas euismod pellentesque nisl,
          sodales molestie. Fermentum cursus leo.
        </p>
        <a href="/contactus" className="button">
          book now
        </a>
      </div>
      <img src={BannerImg} alt="banner-img" />
    </div>
  );
};

export default LandingBanner;
