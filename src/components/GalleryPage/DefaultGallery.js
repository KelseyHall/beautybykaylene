import React from 'react';

import picture from '../../images/horizonal-img-1.jpg';
import picture2 from '../../images/horizonal-img-2.jpg';
import picture3 from '../../images/vertical-img-1.jpg';
import picture4 from '../../images/vertical-img-2.jpg';
import picture5 from '../../images/square-img.jpg';

const galleryDatabase = [
  {
    id: 1,
    className: 'wide',
    img: picture,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 2,
    className: 'wide',
    img: picture2,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 3,
    className: 'tall',
    img: picture4,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 4,
    className: 'tall',
    img: picture3,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 5,
    className: 'square',
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 6,
    className: 'tall',
    img: picture4,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 7,
    className: 'square',
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 8,
    className: 'wide',
    img: picture,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 9,
    className: 'square',
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 10,
    className: 'square',
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
];

const MasonryGalleryPhoto = () =>
  galleryDatabase.map(({ id, className, img, title, description, altText }) => (
    <div key={id} className={'photocard ' + className}>
      <img src={img} alt={altText} key={id} />
    </div>
  ));

const MasonryGallery = () => {
  return (
    <div className="gallery-masonry-grid">
      <MasonryGalleryPhoto />
    </div>
  );
};

export default MasonryGallery;
