import React from 'react';
import Nailicon from '../images/nails.jpg';
import Waxingicon from '../images/waxing.png';
import LashBrowicon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import Services from '../components/ServicesPage/Services';

const ServicesPage = () => {
  return (
    <div className="main-container">
      <div className="jump-to-service">
        <p className="nav-text primary">Jump to...</p>
        <div className="nav-item-1">
          <img src={Nailicon} alt="nails-icon" />
          <p>nails</p>
        </div>
        <div className="nav-item-2">
          <img src={Waxingicon} alt="waxing-icon" />
          <p>waxing</p>
        </div>
        <div className="nav-item-3">
          <img src={LashBrowicon} alt="lash and brows-icon" />
          <p>lash & brows</p>
        </div>
        <div className="nav-item-4">
          <img src={MassageIcon} alt="massage-icon" />
          <p>massage</p>
        </div>
      </div>

      <Services />

      <div className="services-floating-nav">
        <ul>
          <li>services 1</li>
          <li>services 2</li>
          <li>services 3</li>
          <li>services 4</li>
          <li>back to top ^</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
