import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import picture from '../../images/square-img.jpg';
import picture2 from '../../images/vertical-img-2.jpg';
import picture3 from '../../images/horizonal-img-1.jpg';
import picture4 from '../../images/horizonal-img-2.jpg';
import picture5 from '../../images/vertical-img-1.jpg';

const slides = [
  { key: 1, content: <img src={picture} alt="1" /> },
  { key: 2, content: <img src={picture2} alt="2" /> },
  { key: 3, content: <img src={picture3} alt="3" /> },
  { key: 4, content: <img src={picture4} alt="4" /> },
  { key: 5, content: <img src={picture5} alt="5" /> },
];

const CarouselGallery = () => (
  <div className="gallery">
    <div className="carousel-gallery">
      <Carousel slides={slides} showNavigation={true} />{' '}
    </div>
  </div>
);

export default CarouselGallery;
