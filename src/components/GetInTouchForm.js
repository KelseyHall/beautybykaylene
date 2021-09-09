import React from 'react';
import InstagramIcon from '../images/insta-Icon.png';
import FacebookIcon from '../images/facebookIcon.png';

import { FacebookLink, InstagramLink } from '../components/LinkReference';
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
        <textarea
          type="textarea"
          placeholder="add more details on your inqury here..."
        />
        <button>Ask me!</button>
      </form>
      <div className="get-socials">
        <a href={FacebookLink} target="_blank">
          <img src={FacebookIcon} alt="facebook-icon" />
        </a>
        <a href={InstagramLink} target="_blank">
          <img src={InstagramIcon} alt="instagram-icon" />
        </a>
      </div>
    </div>
  );
};

export default GetintouchForm;
