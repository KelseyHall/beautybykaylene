import React from 'react';

import nails from '../../images/nails.png';
import waxing from '../../images/waxing.png';
import lashBrow from '../../images/lash-brow.png';
import massages from '../../images/massage.png';

import BannerImg from '../../images/placeholder-2.jpg';

const serviceBlurb = [
  {
    index: 1,
    service: 'service1',
    img: nails,
    title: 'nails',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: 2,
    service: 'service2',
    img: waxing,
    title: 'waxing',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: 3,
    service: 'service3',
    img: lashBrow,
    title: 'lashes and brows',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
  {
    index: 4,
    service: 'service4',
    img: massages,
    title: 'massages',
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.',
  },
];
const DisplayServicesBlurb = () =>
  serviceBlurb.map(({ index, service, img, title, blurb }) => (
    <div key={title} className={`services-item-` + index}>
      <a href={`/services/#anchor-${service}`}>
        <img src={img} alt={title + `-icon`} />
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
