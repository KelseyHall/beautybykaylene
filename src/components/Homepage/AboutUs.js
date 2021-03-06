import React from 'react';
import AboutUsImg from '../../images/plantbackground.png';
import { Link } from 'react-router-dom';

const AboutUsContent = () => {
  return (
    <div className="about-us-homePage">
      <h2 className="h1-title secondary">
        about us
        <hr className="homeUnderline" />
      </h2>
      <div className="about-us-homePage-blurb-content">
        <img
          src={AboutUsImg}
          className="about-us-homePage-img"
          alt="pretty plant"
        />
        <div className="about-us-homePage-blurb-content-text">
          <p>
            Here at Beauty by Kaylene, we pride ourselves in helping beautiful
            people see how beautiful they truly are. <br /> When booking you can
            guarantee that you will receive the most detailed self-care spa
            services (filled with so much love).
          </p>
        </div>
        <Link to="/aboutUs" className="about-us-button button">
          Find out more about us
        </Link>
      </div>
    </div>
  );
};

export default AboutUsContent;
