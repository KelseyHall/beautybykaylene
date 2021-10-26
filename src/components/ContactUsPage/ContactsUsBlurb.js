import React from 'react';

const ContactUsBlurb = () => {
  return (
    <div className="contactUs-content">
      <h1 className="h1-title primary">get in touch</h1>
      <hr />
      <p className="beforeYouBookText">
        Before you book please read our{' '}
        <a href="#" className="secondary">
          policies
        </a>
      </p>
      <p className="beforeYouBookText">
        When booking please include:
        <ul>
          <li>your full name</li>
          <li>location for your service</li>
          <li>services interested in</li>
          <li>a few dates & times that work for you</li>
        </ul>
      </p>
      <h1 className="h1-title primary">book appointment</h1>
      <h3 className="h3-title">
        <a className="secondary" href="tel:905-644-8880">
          905.644.8880
        </a>
      </h3>
      <p className="email-us">
        <a href="mailto:beautybykaylene@gmail.com">beautybykaylene@gmail.com</a>
      </p>
      <p className="beforeYouBookText">
        I will get back to you in 1-2 days with a confirmation, approximately
        how long we will be to complete the service, and some other information
        for the day of! See map below for service areas.
      </p>
    </div>
  );
};
export default ContactUsBlurb;
