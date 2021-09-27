import React, { useState, useEffect } from 'react';
import NailIcon from '../images/nails.png';
import WaxingIcon from '../images/waxing.png';
import LashBrowIcon from '../images/lash-brow.png';
import MassageIcon from '../images/massage.png';
import GeneralIcon from '../images/general.png';
import GetintouchForm from '../components/GetInTouchForm';

// import QuestionAndAnswer, {
//   filteredQuestions,
//   handleClick,
// } from '../components/FaqPage/Questions';

import { faqQuestions } from '../components/Staticdatabase';

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

  return (
    <div className="faq-backdrop">
      <div className="main-container Faq">
        <h2 className="h2-title primary">frequently asked questions</h2>
        <div className="sort-by-service">
          <h3 className="nav-title primary">sort by service</h3>
          <ul>
            <li>
              <button
                className="service-links"
                onClick={FilterByCategory('nails')}
              >
                <img src={NailIcon} alt="nails-icon" />
                <p>nails</p>
              </button>
            </li>
            <li>
              <button
                className="service-links"
                onClick={FilterByCategory('waxing')}
              >
                <img src={WaxingIcon} alt="waxing-icon" />
                <p>waxing</p>
              </button>
            </li>
            <li>
              <button
                className="service-links"
                onClick={FilterByCategory('lash & brow')}
              >
                <img src={LashBrowIcon} alt="lash-brows-icon" />
                <p>lash & brows</p>
              </button>
            </li>
            <li>
              <button
                className="service-links"
                onClick={FilterByCategory('massage')}
              >
                <img src={MassageIcon} alt="massage-icon" />
                <p>massage</p>
              </button>
            </li>
            <li>
              <button
                className="service-links"
                onClick={FilterByCategory('general')}
              >
                <img src={GeneralIcon} alt="general-icon" />
                <p>general</p>
              </button>
            </li>
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
