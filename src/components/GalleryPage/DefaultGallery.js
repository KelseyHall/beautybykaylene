import React from 'react';

import { GalleryDatabase } from '../Staticdatabase';

const MasonryGalleryPhoto = () =>
  GalleryDatabase.map(({ id, className, img, title, description, altText }) => (
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
