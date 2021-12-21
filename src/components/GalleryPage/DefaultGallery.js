import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';

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

const MasonryGalleryPhoto = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  //makes a string of all images, to link to image viewer
  const images = GalleryDatabase.map(({ img }) => img);

  return (
    <div className="gallery-masonry-grid">
      {GalleryDatabase.map(({ id, className, img, altText }) => (
        <div key={id} className={'photocard ' + className}>
          <img
            src={img}
            onClick={() => openImageViewer(images.indexOf(img))}
            alt={altText}
            key={id}
          />
        </div>
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

const MasonryGallery = () => {
  return <MasonryGalleryPhoto />;
};

export default MasonryGallery;
