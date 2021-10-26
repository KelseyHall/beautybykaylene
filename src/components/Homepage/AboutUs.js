import React from 'react';
import AboutUsImg from '../../images/temp-coverphoto.jpg';
const AboutUsContent = () => {
  return (
    <div className="about-us">
      <h1 className="h1-title primary">
        about us
        <hr className="homeUnderline" />
      </h1>
      <div className="about-us-selfie">
        {/*<img src={AboutUsImg} alt="headshot of Kaylene" />*/}
      </div>

      <p>
        Here at Beauty by Kaylene, we pride ourselves in helping beautiful
        people see how beautiful they truly are. <br /> When booking you can
        guarantee that you will receive the most detailed self-care spa services
        (filled with so much love).
      </p>
    </div>
  );
};

export default AboutUsContent;
