import React from 'react';

import SimpleLogo from '../images/simpleKayleneTitle.png';

import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div className="footer">
      <img src={SimpleLogo} alt="Beauty by Kaylene" className="logo" />
      <SocialMedia />
      <p>
        © copyright 2021 | <a href="#privacyPolicy">privacy policy</a>
      </p>
    </div>
  );
};

export default Footer;
