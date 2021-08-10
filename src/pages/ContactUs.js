import React from 'react';
import AreasOfService from '../components/ContactUsPage/AreasOfService';
import ContactUsBlurb from '../components/ContactUsPage/ContactsUsBlurb';
import GetintouchForm from '../components/GetInTouchForm';

const contactUsPage = () => {
  return (
    <div className="main-container">
      <div className="contactUs">
        <div className="contactUs-column-1">
          <ContactUsBlurb />
        </div>
        <div className="contactUs-column-2">
          <div className="get-in-touch-form">
            <GetintouchForm />
          </div>
        </div>
      </div>
      <AreasOfService />
    </div>
  );
};

export default contactUsPage;
