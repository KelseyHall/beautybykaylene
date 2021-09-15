import React from 'react';
import MasonryGallery from '../components/GalleryPage/DefaultGallery';
import InstagramFeed from '../components/GalleryPage/InstagramFeed';
import GetintouchForm from '../components/GetInTouchForm';

const galleryPage = () => {
  return (
    <div>
      <div className="gallery-Default">
        <MasonryGallery />
        <InstagramFeed />
      </div>
      <GetintouchForm />
    </div>
  );
};

export default galleryPage;
