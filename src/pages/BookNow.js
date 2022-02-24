import React from 'react';
import AreasOfService from '../components/BookNowPage/AreasOfService';
import ContactUsBlurb from '../components/BookNowPage/ContactsUsBlurb';
// import GetintouchForm from '../components/GetInTouchForm';
import { Link } from 'react-router-dom';
const bookNowPage = (props) => {
  return (
    <div className="main-container">
      <div className="contactUs">
        <ContactUsBlurb />
        <AreasOfService />
      </div>
      <div className="Faq-statement">
        <h3 className=" h2-title secondary">have questions? </h3>
        <p> Check out our FAQ page to see if we already answered! </p>

        <Link className="button" to={'/faq'}>
          FAQ page
        </Link>
      </div>
    </div>
  );
};

export default bookNowPage;
