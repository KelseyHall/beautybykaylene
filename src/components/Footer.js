import React from 'react';

import SimpleLogo from '../images/simpleKayleneTitle.png';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={SimpleLogo} alt="Beauty by Kaylene" className="logo" />
        <ContactInfo />
      </div>
      <p className="copyright">
        © copyright 2021 | <Link to="/policies">policies</Link>
      </p>
    </div>
  );
};

export default Footer;
