import React, { useState, useEffect } from 'react';

// import GetintouchForm from '../components/GetInTouchForm';

import { faqQuestions, faqSortbyNav } from '../components/Staticdatabase';

const FaqPage = (props) => {
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
    faqSortbyNav.map(({ id, category, img, altText, title }) => {
      return (
        <li key={id}>
          <button
            className="service-links"
            onClick={FilterByCategory(category)}
          >
            {title}
          </button>
        </li>
      );
    });

  return (
    <div className="main-container Faq">
      <h2 className="h2-title primary">frequently asked questions</h2>
      <div className="faq-sort-by-service">
        <h3 className="nav-title primary">sort by service</h3>
        <ul className="faq-nav-list">
          <SortByService />
        </ul>

        <button
          className="button view-all-button"
          onClick={FilterByCategory('')}
        >
          <span>view all</span>
        </button>
      </div>
      <h1 className="h2-title primary">{<WhichTitle />}</h1>
      {searchResults.map(({ id, question, answer }) => (
        <div key={id} className="QA">
          <p className="question-bold secondary-dark">{question}</p>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
