import React from 'react';
import notFoundCartoon from '../images/gossmani.png';

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h1 className="h1-title primary">Oops something went wrong</h1>
      <div className="pageNotFound-contents">
        <img
          src={notFoundCartoon}
          alt="Gossamers getting a manicure from bugs bunny"
        />
        <h3 className="h3-title secondary">lets get you back on track</h3>
        <a href="/" className="button">
          bring me home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
