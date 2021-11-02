import React from 'react';
import { Link } from 'react-scroll';
// import nailIcon from '../images/nails.png';
// import waxingIcon from '../images/waxing.png';
// import lashBrowIcon from '../images/lash-brow.png';
// import massageIcon from '../images/massage.png';
import Services from '../components/ServicesPage/newServicesPage';
import { ServicesDescriptions } from '../components/Staticdatabase';
// import GetintouchForm from '../components/GetInTouchForm';

// const servicesJumpToNav = [
//   {
//     id: 1,
//     category: 'nails',
//     img: nailIcon,
//     altText: 'nails',
//     title: 'nails',
//   },
//   {
//     id: 2,
//     category: 'lashes & brows',
//     img: lashBrowIcon,
//     altText: 'lashes and brows',
//     title: 'lashes & brows',
//   },
//   {
//     id: 3,
//     category: 'waxing',
//     img: waxingIcon,
//     altText: 'waxing',
//     title: 'waxing',
//   },

//   {
//     id: 4,
//     category: 'massage',
//     img: massageIcon,
//     altText: 'massage',
//     title: 'massage',
//   },
// ];

// const ServiceJumpToNavDisplay = () =>
//   servicesJumpToNav.map(({ id, img, altText, title }) => {
//     return (
//       <div key={id}>
//         <Link
//           to={`anchor-service${id}`}
//           spy={true}
//           smooth={true}
//           duration={500}
//         >
//           <img src={img} alt={`${altText}-icon`} />
//           <span>{title}</span>
//         </Link>
//       </div>
//     );
//   });

const ServicesPage = () => {
  return (
    <div className="main-container" id="topOfPage">
      {/*<div className="jump-to-service-wrapper">
        <p className="nav-text primary">Jump to...</p>
        <div className="jump-to-service"><ServiceJumpToNavDisplay /></div>
      </div>*/}

      <Services list={ServicesDescriptions} />

      <div className="services-floating-nav">
        {/*<ServiceJumpToNavDisplay />*/}

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
