import React from 'react';
import InstagramIcon from '../images/insta-Icon.png';
import FacebookIcon from '../images/facebookIcon.png';

const GetintouchForm = () => {
  return (
    <div className="getInTouch">
      <h1 className="h1-title primary">get in touch</h1>
      <hr />
      <form>
        <input type="input" placeholder="what service are you interested in?" />
        <input type="input" placeholder="name" />
        <input type="input" placeholder="phone number" />
        <input type="input" placeholder="email" />
        <input
          type="textarea"
          placeholder="add more details on your inqury here..."
        />
        <button>Ask me!</button>
      </form>
      <div className="get-socials">
        <img src={FacebookIcon} alt="facebook-icon" />
        <img src={InstagramIcon} alt="instagram-icon" />
      </div>
    </div>
  );
};

export default GetintouchForm;
