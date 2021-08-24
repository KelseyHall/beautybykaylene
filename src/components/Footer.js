import React from 'react';
import InstagramIcon from '../images/insta-Icon.png';
import FacebookIcon from '../images/facebookIcon.png';

import SimpleLogo from '../images/simpleKayleneTitle.png';

const Footer = () => {
  return (
    <div className="footer">
      <img src={SimpleLogo} />
      <div className="get-socials">
        <img src={FacebookIcon} alt="facebook-icon" />
        <img src={InstagramIcon} alt="instagram-icon" />
      </div>
      <p>
        © copyright 2021 | <a href="#">privacy policy</a>
      </p>
    </div>
  );
};

export default Footer;
