import React from 'react';
import AreasOfService from '../components/BookNowPage/AreasOfService';
import ContactUsBlurb from '../components/BookNowPage/ContactsUsBlurb';
// import GetintouchForm from '../components/GetInTouchForm';
import { Link } from 'react-router-dom';
const bookNowPage = () => {
  return (
    <div className="main-container">
      <div className="contactUs">
        <ContactUsBlurb />
        <div className="Faq-statement">
          <h3 className=" h2-title primary">have questions? </h3>
          <p> Check out our FAQ page to see if we already answered! </p>

          <Link className="button" to={'/faq'}>
            FAQ page
          </Link>
        </div>
      </div>
      {/* <div className="client-forms">
        <p className="secondary">
          new client? new service? download the required form
        </p>
        <a href="/form" className="button">
          click here!
        </a>
  </div>*/}
      <AreasOfService />
    </div>
  );
};

export default bookNowPage;
