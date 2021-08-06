import React from 'react';

import nails from '../images/nails.jpg';
import waxing from '../images/waxing.png';
import lashBrow from '../images/lash-brow.png';
import massages from '../images/massage.png';

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="home-banner">
        <h2 className="h2-title primary ">lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis
          pharetra ac tellus varius. Faucibus egestas euismod pellentesque nisl,
          sodales molestie. Fermentum cursus leo.
        </p>
        <button className="button">button</button>
      </div>

      <h1 className="h1-title primary">
        about us
        <hr />
      </h1>
      <div className="about-us">
        <div className="about-us-selfie"></div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque mattis
          faucibus tortor eu. Proin imperdiet sed nulla convallis consectetur
          tristique ut non nisl. Consequat, morbi suscipit venenatis vel urna
          tristique montes. Eu tristique sed congue venenatis arcu lacus, porta
          leo ac. Vel tempus venenatis leo, cursus tristique et ut. Aliquam
          tellus luctus malesuada at dictum suspendisse tristique mauris eget.
          Elit at placerat nulla eget rutrum enim elementum risus diam. Non
          massa eu nunc nibh metus. Consectetur nullam at auctor malesuada
          turpis libero commodo. Ut dui, feugiat in massa sit amet, feugiat.
        </p>
      </div>

      <h1 className="h1-title primary">testimonials</h1>
      <div className="testimonials">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dolor
          bibendum maecenas aliquet. In sed cras in molestie et, volutpat
          consequat. Vitae integer nunc.
        </p>
        <p className="testimonial-author">-- insert name --</p>
      </div>

      <div className="services">
        <h1 className="h1-title primary">
          services <hr />
        </h1>
        <span className="banner"> </span>
        <div className="services-1">
          <img src={nails} alt="nails-icon" />
          <h3 className="h3-title primary">nails</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate
            vulputate nunc, tempus.{' '}
          </p>
        </div>
        <div className="services-2">
          <img src={waxing} alt="waxing-icon" />
          <h3 className="h3-title primary">waxing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate
            vulputate nunc, tempus.{' '}
          </p>
        </div>
        <div className="services-3">
          <img src={lashBrow} alt="lashes and brows-icon" />
          <h3 className="h3-title primary">lashes and brows</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate
            vulputate nunc, tempus.{' '}
          </p>
        </div>
        <div className="services-4">
          <img src={massages} alt="massages-icon" />
          <h3 className="h3-title primary">massages</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate
            vulputate nunc, tempus.{' '}
          </p>
        </div>
      </div>
      <div className="gallery">insert image player </div>
    </div>
  );
};

export default HomePage;
