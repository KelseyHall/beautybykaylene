import React, { useState, useEffect } from 'react';

import { servicesNav } from '../Staticdatabase';

//to Determine what background class
const isEven = (n) => {
  return n % 2 === 0;
};
const WhichRow = (idx) => (isEven(idx) ? '' : '-2');

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
  }, [categorySearch, list]);

  const SortByService = () =>
    servicesNav.map(({ id, category, img, altText, title }) => {
      return (
        <li key={id}>
          <a
            to={`anchor-service${id}`}
            className="service-links"
            onClick={FilterByCategory(category)}
          >
            {/*<img src={img} alt={`${altText}-icon`} />*/}
            {title}
          </a>
        </li>
      );
    });

  return (
    <div>
      <div className="services-jump-to-service-wrapper">
        <div className="sort-by-service">
          {/*<h3 className="nav-text primary">sort by service</h3>*/}
          <ul>
            <a className="view-all-button" onClick={FilterByCategory('')}>
              view all
            </a>
            <SortByService />
          </ul>
        </div>
      </div>

      {searchResults.map(
        ({
          id,
          service,
          image,
          blurb,
          serviceDetails,
          idx,
          linkedinHandle,
        }) => (
          <div className="services-content" id={linkedinHandle} key={id}>
            <div
              className={
                'services-about-content  service-top-col' + WhichRow(idx)
              }
            >
              <div className={'content'}>
                <h2 className="h2-title primary">{service}</h2>
                <img src={image} className="services-Img" alt="service-theme" />
                <p className="servicesBlurb">{blurb}</p>
              </div>
            </div>
            <div className={'stagger-bg' + WhichRow(idx)}></div>
            <div
              className={'services-pricing  service-bottom-col' + WhichRow(idx)}
            >
              <div className="content">
                <div className="services-item">
                  {serviceDetails.map(({ title, details }) => (
                    <ul className="services-sub" key={id + title}>
                      <h3 className="h3-title secondary">{title}</h3>
                      {details.map(
                        ({ id, serviceName, price, time, description }) => (
                          <li key={id}>
                            <div className="service-namePrice">
                              <p className="serviceName">
                                {serviceName}
                                <span className="time">{`${time}`}</span>
                              </p>

                              <p className="price">{`$${price}`}</p>
                            </div>
                            <p className="serviceDescription">{`${description}`}</p>
                          </li>
                        )
                      )}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Services;
