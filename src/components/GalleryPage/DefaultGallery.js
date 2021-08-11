import React from 'react';

import picture from '../../images/services-placeholder.jpg';
import picture2 from '../../images/placeholder.jpg';
import picture3 from '../../images/temp-coverphoto.jpg';
import picture4 from '../../images/massage.png';
import picture5 from '../../images/backdrop.jpg';

const galleryDatabase = [
  {
    id: 1,
    img: picture,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 2,
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 3,
    img: picture3,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 4,
    img: picture4,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 5,
    img: picture2,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 6,
    img: picture4,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 7,
    img: picture5,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 8,
    img: picture,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 9,
    img: picture2,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
  {
    id: 10,
    img: picture3,
    title: 'Picture Title',
    description: 'Description placeholder',
    altText: 'picture',
  },
];

const MasonryGalleryPhoto = () =>
  galleryDatabase.map(({ id, img, title, description, altText }) => (
    <div className="photocard" key={id}>
      <img src={img} altText={altText} />
      <p>{title}</p>
      <p>{description}</p>
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
