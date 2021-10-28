import React from 'react';
import BannerImg from '../../images/landingBanner.jpg';
import { Link } from 'react-router-dom';
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
        <Link to="/contactus" className="button">
          book now
        </Link>
      </div>
      <img src={BannerImg} alt="banner-img" />
    </div>
  );
};

export default LandingBanner;
