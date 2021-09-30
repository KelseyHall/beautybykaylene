import React from 'react';
import { Link } from 'react-scroll';
import nailIcon from '../images/nails.png';
import waxingIcon from '../images/waxing.png';
import lashBrowIcon from '../images/lash-brow.png';
import massageIcon from '../images/massage.png';
import Services from '../components/ServicesPage/Services';
// import GetintouchForm from '../components/GetInTouchForm';

const servicesJumpToNav = [
  {
    id: 1,
    img: nailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    img: waxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },
  {
    id: 3,
    img: lashBrowIcon,
    altText: 'lash and brows',
    title: 'lash & brows',
  },
  {
    id: 4,
    img: massageIcon,
    altText: 'massage',
    title: 'massage',
  },
];

const ServiceJumpToNavDisplay = () =>
  servicesJumpToNav.map(({ id, img, altText, title }) => {
    return (
      <div key={id}>
        <Link
          to={`anchor-service${id}`}
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={img} alt={`${altText}-icon`} />
          <span>{title}</span>
        </Link>
      </div>
    );
  });

const ServicesPage = () => {
  return (
    <div className="main-container" id="topOfPage">
      <div className="jump-to-service-wrapper">
        <p className="nav-text primary">Jump to...</p>
        <div className="jump-to-service">
          <ServiceJumpToNavDisplay />
        </div>
      </div>

      <Services />

      <div className="services-floating-nav">
        <ServiceJumpToNavDisplay />

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
