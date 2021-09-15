import React from 'react';
import { Link } from 'react-scroll';
import Nailicon from '../images/nails.png';
import Waxingicon from '../images/waxing.png';
import LashBrowicon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import Services from '../components/ServicesPage/Services';
import GetintouchForm from '../components/GetInTouchForm';

const ServicesPage = () => {
  return (
    <div className="main-container" id="topOfPage">
      <div className="jump-to-service-wrapper">
        <p className="nav-text primary">Jump to...</p>
        <div className="jump-to-service">
          <div className="nav-item-1">
            <Link
              activeClass="active"
              className="nails"
              to="anchor-service1"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={Nailicon} alt="nails-icon" />
              <p>nails</p>
            </Link>
          </div>
          <div className="nav-item-2">
            <Link
              activeClass="active"
              className="waxing"
              to="anchor-service2"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={Waxingicon} alt="waxing-icon" />
              <p>waxing</p>
            </Link>
          </div>
          <div className="nav-item-3">
            <Link
              activeClass="active"
              className="lashbrow"
              to="anchor-service3"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={LashBrowicon} alt="lash and brows-icon" />
              <p>lash & brows</p>
            </Link>
          </div>
          <div className="nav-item-4">
            <Link
              activeClass="active"
              className="massage"
              to="anchor-service4"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={MassageIcon} alt="massage-icon" />
              <p>massage</p>
            </Link>
          </div>
        </div>
      </div>

      <Services />

      <div className="services-floating-nav">
        <ul>
          <li>
            <Link
              activeClass="active"
              className="service1"
              to="anchor-service1"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={Nailicon} alt="nails-icon" />
              <span>services 1</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="service2"
              to="anchor-service2"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={Waxingicon} alt="waxing-icon" />
              <span>services 2</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="service3"
              to="anchor-service3"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={LashBrowicon} alt="lash and brows-icon" />
              <span>services 3</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="service4"
              to="anchor-service4"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img src={MassageIcon} alt="massage-icon" />
              <span>services 4</span>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="massage"
              to="topOfPage"
              spy={true}
              smooth={true}
              duration={500}
            >
              back to top ^
            </Link>
          </li>
        </ul>
      </div>
      <GetintouchForm />
    </div>
  );
};

export default ServicesPage;
