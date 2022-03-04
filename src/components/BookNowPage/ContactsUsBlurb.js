import React from 'react';
import { Link } from 'react-router-dom';
const ContactUsBlurb = () => {
  return (
    <div className="contactUs-content">
      <h1 className="h1-title secondary">get in touch</h1>
      <hr />
      <p className="beforeYouBookText">
        Before you book please read our{' '}
        <Link to="/policies" className="secondary">
          policies
        </Link>
      </p>
      <p className="beforeYouBookText">When booking please include:</p>
      <ul className="beforeYouBookList">
        <li>your full name</li>
        <li>location for your service</li>
        <li>services interested in</li>
        <li>a few dates & times that work for you</li>
      </ul>
      <div className="book-info">
        <h1 className="h1-title secondary">book appointment</h1>

        <a
          href="https://www.fresha.com/a/beauty-by-kaylene-mobile-spa-port-hope-toronto-rd-u3ztt3oj/booking?menu=true&dppub=true&employeeId=1328692"
          target="_blank"
          rel="noreferrer"
          className="button online-booking"
        >
          book online
        </a>
      </div>
      {/* <p className="beforeYouBookText">
        I will get back to you in 1-2 days with a confirmation, approximately
        how long we will be to complete the service, and some other information
        for the day of! See map below for service areas.
  </p>*/}

      <h2 className="h2-title">
        <a href="tel:905-644-8880">905.644.8880</a>
      </h2>
      <p className="email-us">
        <a href="mailto:beautybykaylene@gmail.com">beautybykaylene@gmail.com</a>
      </p>
    </div>
  );
};
export default ContactUsBlurb;
