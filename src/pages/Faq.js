import React from 'react';
import NailIcon from '../images/nails.jpg';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';
import QuestionAndAnswer from '../components/FaqPage/Questions';

const FaqPage = () => {
  return (
    <div className="main-container Faq">
      <h2 className="h2-title primary">frequently asked questions</h2>
      <div className="sort-by-service">
        <h3 className="nav-title primary">sort by service</h3>
        <ul>
          <li>
            <img src={NailIcon} alt="nails-icon" />
            <p>nails</p>
          </li>
          <li>
            <img src={WaxingIcon} alt="waxing-icon" />
            <p>waxing</p>
          </li>
          <li>
            <img src={LashBrowIcon} alt="lash-brows-icon" />
            <p>lash & brows</p>
          </li>
          <li>
            <img src={MassageIcon} alt="massage-icon" />
            <p>massage</p>
          </li>
          <li>
            <img src={GeneralIcon} alt="general-icon" />
            <p>general</p>
          </li>
        </ul>
      </div>

      <QuestionAndAnswer />
    </div>
  );
};

export default FaqPage;
