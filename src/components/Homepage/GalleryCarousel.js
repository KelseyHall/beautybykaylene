import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import { CarouselSlides } from '../Staticdatabase';

const CarouselGallery = () => (
  <div className="gallery">
    <div className="carousel-gallery">
      <Carousel slides={CarouselSlides} showNavigation={true} />{' '}
    </div>
  </div>
);

export default CarouselGallery;
