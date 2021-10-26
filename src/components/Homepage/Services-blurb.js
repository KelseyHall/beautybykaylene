import React from 'react';

import BannerImg from '../../images/placeholder-2.jpg';
import { serviceBlurb } from '../Staticdatabase';

const DisplayServicesBlurb = () =>
  serviceBlurb.map(({ index, number, service, img, title, blurb }) => (
    <div key={index} className={`services-item-` + number}>
      <a href={`/services/#anchor-${service}`}>
        {/* <img src={img} alt={title + `-icon`} /> */}
        <h3 className="h3-title primary">{title}</h3>
        <p>{blurb}</p>
      </a>
    </div>
  ));
const HomeServicesBlurb = () => {
  return (
    <div className="services">
      <h1 className="h1-title primary">
        services <hr className="homeUnderline" />
      </h1>
      <img src={BannerImg} alt="services-banner" className="banner" />
      <div className="services-bg">
        <div className="services-card">
          <DisplayServicesBlurb />
        </div>
      </div>
    </div>
  );
};

export default HomeServicesBlurb;
