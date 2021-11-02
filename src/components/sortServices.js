import React, { useState, useEffect } from 'react';

import { servicesNav } from '../components/Staticdatabase';

export let searchResultsReuse = [];

const Services = ({ list }) => {
  const [categorySearch, setCategorySearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const FilterByCategory = (e) => () => {
    setCategorySearch(e);
  };
  useEffect(() => {
    const results = list.filter((item) =>
      item.service.includes(categorySearch)
    );
    setSearchResults(results);
  }, [categorySearch]);

  //   console.log(
  //     list.map(({ ...item }) => item.serviceDetails.map((item) => item.title))
  //   );
  const SortByService = () =>
    servicesNav.map(({ id, category, img, altText, title }) => {
      return (
        <li key={id}>
          <button
            to={`anchor-service${id}`}
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
    <div>
      <div className="services-jump-to-service-wrapper">
        <div className="sort-by-service">
          <p className="nav-text primary">sort by service</p>
          <ul>
            <SortByService />
          </ul>
          <button className="view-all-button" onClick={FilterByCategory('')}>
            <p>view all</p>
          </button>
        </div>
      </div>
    </div>
  );
};
console.log('this is search results' + searchResultsReuse);
export default Services;
