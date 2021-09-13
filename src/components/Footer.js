import React from 'react';
import InstagramIcon from '../images/insta-Icon.png';
import FacebookIcon from '../images/facebookIcon.png';

import SimpleLogo from '../images/simpleKayleneTitle.png';
import { FacebookLink, InstagramLink } from './LinkReference';

const Footer = () => {
  return (
    <div className="footer">
      <img src={SimpleLogo} alt="Beauty by Kaylene" className="logo" />
      <div className="get-socials">
        <a href={FacebookLink} target="_blank" rel="noreferrer">
          <img src={FacebookIcon} alt="facebook-icon" />
        </a>
        <a href={InstagramLink} target="_blank" rel="noreferrer">
          <img src={InstagramIcon} alt="instagram-icon" />
        </a>
      </div>
      <p>
        © copyright 2021 | <a href="#privacyPolicy">privacy policy</a>
      </p>
    </div>
  );
};

export default Footer;
