import React from 'react';

import SimpleLogo from '../images/simpleKayleneTitle.png';
import ContactInfo from './ContactInfo';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h2 className="h2-title secondary">Contact Us</h2>
        <img src={SimpleLogo} alt="Beauty by Kaylene" className="logo" />
        <ContactInfo />
      </div>
      <p className="copyright">
        © copyright 2022 | <Link to="/policies">policies</Link> |
        <Link to="/faq">FAQ'S</Link>
      </p>
    </div>
  );
};

export default Footer;
