import React from 'react';
import BannerImg from '../../images/bannerWebsite.jpg';
import { Link } from 'react-router-dom';
const LandingBanner = () => {
  return (
    <div className="home-banner">
      <img src={BannerImg} alt="banner-img" />
      <div className="home-banner-content">
        <h2 className="h2-title primary ">Welcome!</h2>
        <p>
          {' '}
          If this is your first time visiting, thanks for stopping by, and I
          can't wait to get to know you!
        </p>

        <p>
          If you have booked with me before and are back because you love me and
          can't get enough, well, I love you too and I’m so happy you’re here!
        </p>

        <p>
          With Beauty by Kaylene, you can rest assured knowing my favorite part
          of this career is helping beautiful people see how beautiful they
          truly are.
        </p>

        <p>
          I bring gender inclusive, body positive spa services to your doorstep.
          Be it at home, the cottage, hotel, office or special event, I’m there!
          When booking with me, you can guarantee that you will receive the most
          detailed self-care spa service (filled with so much love).
        </p>

        <p>
          Centrally located in Port Hope, and proudly serving the surrounding
          areas of Northumberland, Peterborough, Kawartha Lakes, Clarington,
          Durham and Quite West.
        </p>

        <Link to="/contactus" className="button">
          book now
        </Link>
      </div>
    </div>
  );
};

export default LandingBanner;
