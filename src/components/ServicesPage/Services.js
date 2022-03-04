import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesNav } from '../Staticdatabase';
import ServicesAccordion from './ServicesAccordion';

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
    servicesNav.map(({ id, category, title }) => {
      return (
        <li key={id}>
          <a
            href={`#anchor-service${id}`}
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
        {/*<h3 className="nav-text primary">sort by service</h3>*/}
        <ul className="sort-by-service">
          <button className="view-all-button" onClick={FilterByCategory('')}>
            <span> view all </span>
          </button>
          <SortByService />
        </ul>
      </div>

      {searchResults.map(
        ({
          id,
          service,
          image,
          blurb,
          serviceDetails,

          linkedinHandle,
        }) => (
          <div className="services-content" id={linkedinHandle} key={id}>
            <div className={'top-stagger-bg'}></div>
            <div className={'services-content-about  service-top-col'}>
              <h2 className="h2-title secondary-dark">{service}</h2>
              <img src={image} className="services-Img" alt="service-theme" />
              <p className="servicesBlurb">{blurb}</p>
            </div>
            <div className={'bottom-stagger-bg'}></div>
            <div className={'services-content-prices  service-bottom-col'}>
              <div className="services-item">
                {serviceDetails.map(({ title, details, disclaimer }) => (
                  <ul className="services-col" key={id + title}>
                    <h3 className="h3-title secondary-dark">{title}</h3>
                    {details.map((props) => (
                      <ServicesAccordion key={props.id} {...props} />
                    ))}

                    <p className="individualDisclaimer">{disclaimer}</p>
                  </ul>
                ))}
              </div>

              <span className="disclaimer">
                *Prices subject to change without notice.
                <Link to="/policies">View our Cancellation Policy</Link>
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Services;
