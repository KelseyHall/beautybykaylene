import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const InstagramFeed = () => {
  return (
    <div>
      <InstagramEmbed
        url="https://www.instagram.com/_beautybykaylene/"
        maxWidth={500}
        hideCaption={true}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};
export default InstagramFeed;
