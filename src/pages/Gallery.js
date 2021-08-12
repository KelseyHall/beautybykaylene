import React from 'react';
import MasonryGallery from '../components/GalleryPage/DefaultGallery';
import InstagramFeed from '../components/GalleryPage/InstagramFeed';

const galleryPage = () => {
  return (
    <div className="gallery-Default">
      <MasonryGallery />
      <InstagramFeed />
    </div>
  );
};

export default galleryPage;
