import React from 'react';

import picture from '../../images/services-placeholder.jpg';
import picture2 from '../../images/placeholder.jpg';
import picture3 from '../../images/temp-coverphoto.jpg';
import picture4 from '../../images/massage.png';
import picture5 from '../../images/backdrop.jpg';

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
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 3,
    className: 'tall',
    img: picture3,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 4,
    className: 'square',
    img: picture4,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 5,
    className: 'tall',
    img: picture2,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 6,
    className: 'square',
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
    img: picture2,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 10,
    className: 'tall',
    img: picture3,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
];

const MasonryGalleryPhoto = () =>
  galleryDatabase.map(({ id, className, img, title, description, altText }) => (
    <div className={'photocard ' + className} key={id}>
      <img src={img} altText={altText} />
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
