import React from 'react';
import AreasOfService from '../components/BookNowPage/AreasOfService';
import ContactUsBlurb from '../components/BookNowPage/ContactsUsBlurb';
// import GetintouchForm from '../components/GetInTouchForm';

const bookNowPage = (props) => {
  return (
    <div className="main-container">
      <div className="contactUs">
        <ContactUsBlurb />
        <AreasOfService />
      </div>
    </div>
  );
};

export default bookNowPage;
