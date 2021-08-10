import React from "react";
import Nailicon from "../images/nails.jpg";
import Waxingicon from "../images/waxing.png";
import LashBrowicon from "../images/lash-brow.png";
import MassageIcon from "../images/massage.png";

import Placeholder from "../images/services-placeholder.jpg";
import Services from "../components/ServicesPage/Services";

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
      <div className="services-content ">
        <Services />
        {/*<div className="services-about-content  service-left-col full-bleed-left">
          <h2 className="h2-title primary">about the service</h2>
          <img
            src={Placeholder}
            className="services-Img"
            alt="service-theme-photo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            pulvinar viverra eu sem maecenas leo. Ut donec commodo posuere ac
            at. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctus
            arcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi neque
            at sed neque viverra sit dui. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Consectetur pulvinar viverra eu sem
            maecenas leo. Ut donec commodo posuere ac at. Massa adipiscing ac
            enim eget faucibus justo, ut. Felis luctus arcu, duis purus.{' '}
          </p>
  </div>*/}

        <div className="services-pricing service-right-col full-bleed-right">
          <h2 className="h2-title primary">pricing</h2>
          <ul className="services-item">
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
          </ul>

          <ul className="services-item">
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="services-content">
        <div className="services-pricing service-left-col-2 full-bleed-left">
          <h2 className="h2-title primary">pricing</h2>
          <ul className="services-item">
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
            <li>
              <p>item name</p>
              <p className="price">$99.99</p>
            </li>
          </ul>
        </div>
        {/*<div className="services-about-content service-right-col-2 full-bleed-right">
          <h2 className="h2-title primary">about the service</h2>
          <img
            src={Placeholder}
            className="services-Img"
            alt="services-theme-photo"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            pulvinar viverra eu sem maecenas leo. Ut donec commodo posuere ac
            at. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctus
            arcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi neque
            at sed neque viverra sit dui. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Consectetur pulvinar viverra eu sem
            maecenas leo. Ut donec commodo posuere ac at. Massa adipiscing ac
            enim eget faucibus justo, ut. Felis luctus arcu, duis purus.{' '}
          </p>
        </div>*/}
      </div>
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
