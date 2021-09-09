import React from 'react';
import AboutUsImg from '../../images/temp-coverphoto.jpg';
const AboutUsContent = () => {
  return (
    <div className="about-us">
      <h1 className="h1-title primary">
        about us
        <hr className="homeUnderline" />
      </h1>
      <div className="about-us-selfie">
        <img src={AboutUsImg} alt="headshot of Kaylene" />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque mattis
        faucibus tortor eu. Proin imperdiet sed nulla convallis consectetur
        tristique ut non nisl. Consequat, morbi suscipit venenatis vel urna
        tristique montes. Eu tristique sed congue venenatis arcu lacus, porta
        leo ac. Vel tempus venenatis leo, cursus tristique et ut. Aliquam tellus
        luctus malesuada at dictum suspendisse tristique mauris eget. Elit at
        placerat nulla eget rutrum enim elementum risus diam. Non massa eu nunc
        nibh metus. Consectetur nullam at auctor malesuada turpis libero
        commodo. Ut dui, feugiat in massa sit amet, feugiat.
      </p>
    </div>
  );
};

export default AboutUsContent;
