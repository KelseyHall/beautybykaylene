import React from 'react';
import SocialMedia from './SocialMedia';
const ContactInfo = () => {
  return (
    <div className="contact-info-footer">
      <div className="info-wrapper">
        <p className="primary">call or text</p>
        <p className="secondary">905.644.8880</p>
      </div>
      <div className="info-wrapper">
        <p className="primary">send us an email at</p>
        <p className="secondary">beautybykaylene@gmail.com</p>
      </div>
      <SocialMedia />
    </div>
  );
};
export default ContactInfo;
