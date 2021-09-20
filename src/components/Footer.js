import React from 'react';

import SimpleLogo from '../images/simpleKayleneTitle.png';
import ContactInfo from './ContactInfo';

import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={SimpleLogo} alt="Beauty by Kaylene" className="logo" />
        <ContactInfo />
      </div>
      <p>
        <SocialMedia />© copyright 2021 |{' '}
        <a href="#privacyPolicy">privacy policy</a>
      </p>
    </div>
  );
};

export default Footer;
