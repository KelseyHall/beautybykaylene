import React, { useState, useEffect } from 'react';
import NailIcon from '../images/nails.png';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';
// import GetintouchForm from '../components/GetInTouchForm';

import { faqQuestions } from '../components/Staticdatabase';
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

const FaqPage = () => {
  const [categorySearch, setCategorySearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const FilterByCategory = (e) => () => {
    setCategorySearch(e);
  };

  useEffect(() => {
    const results = faqQuestions.filter((item) =>
      item.category.includes(categorySearch)
    );
    setSearchResults(results);
  }, [categorySearch]);
  const WhichTitle = () => {
    if (categorySearch === '') {
      return 'all questions';
    } else {
      return categorySearch;
    }
  };

  const SortByService = () =>
    sortbyNav.map(({ id, category, img, altText, title }) => {
      return (
        <li key={id}>
          <button
            className="service-links"
            onClick={FilterByCategory(category)}
          >
            <img src={img} alt={`${altText}-icon`} />
            <p>{title}</p>
          </button>
        </li>
      );
    });

  return (
    <div className="faq-backdrop">
      <div className="main-container Faq">
        <h2 className="h2-title primary">frequently asked questions</h2>
        <div className="sort-by-service">
          <h3 className="nav-title primary">sort by service</h3>
          <ul>
            <SortByService />
          </ul>

          <button className="view-all-button" onClick={FilterByCategory('')}>
            <p>view all</p>
          </button>
        </div>
        <h1 className="primary">{<WhichTitle />}</h1>
        {searchResults.map(({ id, question, answer }) => (
          <div key={id} className="QA">
            <p className="question-bold secondary">{question}</p>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
