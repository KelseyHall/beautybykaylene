import React from 'react';
import NailIcon from '../images/nails.jpg';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';
import QuestionAndAnswer, {
  filteredQuestions,
} from '../components/FaqPage/Questions';
const handleClick = (option) => {
  return filteredQuestions(option);
};

const FaqPage = () => {
  return (
    <div className="main-container Faq">
      <h2 className="h2-title primary">frequently asked questions</h2>
      <div className="sort-by-service">
        <h3 className="nav-title primary">sort by service</h3>
        <ul>
          <li>
            <button
              className="service-links"
              onClick={() => handleClick('nails')}
            >
              <img src={NailIcon} alt="nails-icon" />
              <p>nails</p>
            </button>
          </li>
          <li>
            <button
              className="service-links"
              onClick={() => handleClick('waxing')}
            >
              <img src={WaxingIcon} alt="waxing-icon" />
              <p>waxing</p>
            </button>
          </li>
          <li>
            <button
              className="service-links"
              onClick={() => handleClick('lashbrow')}
            >
              <img src={LashBrowIcon} alt="lash-brows-icon" />
              <p>lash & brows</p>
            </button>
          </li>
          <li>
            <button
              className="service-links"
              onClick={() => handleClick('massage')}
            >
              <img src={MassageIcon} alt="massage-icon" />
              <p>massage</p>
            </button>
          </li>
          <li>
            <button
              className="service-links"
              onClick={() => handleClick('general')}
            >
              <img src={GeneralIcon} alt="general-icon" />
              <p>general</p>
            </button>
          </li>
        </ul>
      </div>

      <QuestionAndAnswer />
    </div>
  );
};

export default FaqPage;
