import React from 'react';
import SocialMedia from './SocialMedia';
const ContactInfo = () => {
  return (
    <div className="contact-info-footer">
      <div className="info-wrapper">
        <h4 className="footer-sub-title capitalize">text</h4>
        <p>
          <a className="primary" href="tel:905-644-8880">
            905.644.8880
          </a>
        </p>
      </div>
      <div className="info-wrapper">
        <h4 className="footer-sub-title capitalize">send us an email at</h4>
        <p>
          <a className="primary" href="mailto:beautybykaylene@gmail.com">
            beautybykaylene@gmail.com
          </a>
        </p>
      </div>
      <SocialMedia />
    </div>
  );
};
export default ContactInfo;
