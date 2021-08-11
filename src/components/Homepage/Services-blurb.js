import React from "react";

import nails from "../../images/nails.jpg";
import waxing from "../../images/waxing.png";
import lashBrow from "../../images/lash-brow.png";
import massages from "../../images/massage.png";

const serviceBlurb = [
  {
    index: 1,
    img: nails,
    title: "nails",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.",
  },
  {
    index: 2,
    img: waxing,
    title: "waxing",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.",
  },
  {
    index: 3,
    img: lashBrow,
    title: "lashes and brows",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.",
  },
  {
    index: 4,
    img: massages,
    title: "massages",
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Elementum elit nisl elementum ut nulla. Pellentesque morbi eu, vulputate vulputate nunc, tempus.",
  },
];
const DisplayServicesBlurb = () =>
  serviceBlurb.map(({ index, img, title, blurb }) => (
    <div key={title} className={`services-item-` + index}>
      <img src={img} alt={title + `-icon`} />
      <h3 className="h3-title primary">{title}</h3>
      <p>{blurb}</p>
    </div>
  ));
const HomeServicesBlurb = () => {
  return (
    <div className="services-bg">
      <div className="services-card">
        <DisplayServicesBlurb />
      </div>
    </div>
  );
};

export default HomeServicesBlurb;
