import React from 'react';

import { GalleryDatabase } from '../Staticdatabase';
// const options = {
//   settings: {
//     overlayColor: '#f6f1f7f2',

//     // showThumbnailsButton: false,
//   },
//   buttons: {
//     showThumbnailsButton: false,
//     showDownloadButton: false,
//     showFullscreenButton: false,
//     showAutoplayButton: false,
//   },
//   caption: {
//     captionColor: '#636363',
//   },
// };

const MasonryGalleryPhoto = () =>
  GalleryDatabase.map(({ id, className, img, title, caption, altText }) => (
    <div key={id} className={'photocard ' + className}>
      <a href={img} data-toggle="lightbox">
        <img src={img} alt={altText} key={id} />
      </a>
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
