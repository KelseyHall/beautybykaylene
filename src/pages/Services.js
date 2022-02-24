import React from 'react';
import { Link } from 'react-scroll';

import Services from '../components/ServicesPage/Services';
import { ServicesDescriptions } from '../components/Staticdatabase';

const ServicesPage = (props) => {
  return (
    <div className="main-container" id="topOfPage">
      <Services list={ServicesDescriptions} />
      <div className="services-floating-nav">
        <div key={'backToTop'}>
          <Link to="topOfPage" spy={true} smooth={true} duration={500}>
            back to top ^
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
