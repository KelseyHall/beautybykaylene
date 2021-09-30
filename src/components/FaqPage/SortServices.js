import React from 'react';

import NailIcon from '../../images/nails.png';
import WaxingIcon from '../../images/waxing.png';
import LashBrowIcon from '../../images/lash-brow.png';
import MassageIcon from '../../images/massage.png';
import GeneralIcon from '../../images/general.png';

const sortbyNav = [
  {
    id: 1,
    category: 'nails',
    img: NailIcon,
    altText: 'nails',
    title: 'nails',
  },
  {
    id: 2,
    category: 'waxing',
    img: WaxingIcon,
    altText: 'waxing',
    title: 'waxing',
  },
  {
    id: 3,
    category: 'lash & brow',
    img: LashBrowIcon,
    altText: 'lash-brow',
    title: 'lash & brow',
  },
  {
    id: 4,
    category: 'massage',
    img: MassageIcon,
    altText: 'massage',
    title: 'massage',
  },
  {
    id: 5,
    category: 'general',
    img: GeneralIcon,
    altText: 'general',
    title: 'general',
  },
];

const SortByService = ({ FilterByCategory }) =>
  sortbyNav.map(({ id, category, img, altText, title }) => {
    return (
      <li key={id}>
        <button className="service-links" onClick={FilterByCategory(category)}>
          <img src={img} alt={`${altText}-icon`} />
          <p>{title}</p>
        </button>
      </li>
    );
  });

const SortServicesNav = ({ FilterByCategory }) => {
  <div className="sort-by-service">
    <h3 className="nav-title primary">sort by service</h3>
    <ul>
      <SortByService />
    </ul>

    <button className="view-all-button" onClick={FilterByCategory('')}>
      <p>view all</p>
    </button>
  </div>;
};

export default SortServicesNav;
