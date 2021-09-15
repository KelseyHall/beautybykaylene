import React from 'react';
import InstagramIcon from '../images/insta-Icon.png';
import FacebookIcon from '../images/facebookIcon.png';

import { FacebookLink, InstagramLink } from '../components/LinkReference';
const SocialMedia = () => {
  return (
    <div className="get-socials">
      <a href={FacebookLink} target="_blank" rel="noreferrer">
        <img src={FacebookIcon} alt="facebook-icon" />
      </a>
      <a href={InstagramLink} target="_blank" rel="noreferrer">
        <img src={InstagramIcon} alt="instagram-icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
