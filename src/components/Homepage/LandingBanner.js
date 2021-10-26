import React from 'react';
import BannerImg from '../../images/landingBanner.jpg';
const LandingBanner = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-content">
        <h2 className="h2-title primary ">Welcome!</h2>
        <p>
          If this is your first time visiting, thanks for stopping by, and I
          can't wait to get to know you! If you have booked with me before and
          are back because you love me and can't get enough, well, I love you
          too!
        </p>
        <p>Professional esthetics services delivered to your front door!</p>
        <a href="/contactus" className="button">
          book now
        </a>
      </div>
      <img src={BannerImg} alt="banner-img" />
    </div>
  );
};

export default LandingBanner;
