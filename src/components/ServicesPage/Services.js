import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesNav } from '../Staticdatabase';

//to Determine what background class
// const isEven = (n) => {
//   return n % 2 === 0;
// };
// const WhichRow = (idx) => (isEven(idx) ? '' : '-2');

const Services = ({ list }) => {
  const [categorySearch, setCategorySearch] = useState('');
  const [visible, setVisible] = useState(false);
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
        <div className="sort-by-service">
          {/*<h3 className="nav-text primary">sort by service</h3>*/}
          <ul>
            <button className="view-all-button" onClick={FilterByCategory('')}>
              <span> view all </span>
            </button>
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

          linkedinHandle,
        }) => (
          <div className="services-content" id={linkedinHandle} key={id}>
            <div className={'services-about-content  service-top-col'}>
              <h2 className="h2-title secondary-dark">{service}</h2>
              <img src={image} className="services-Img" alt="service-theme" />
              <p className="servicesBlurb">{blurb}</p>
            </div>
            <div className={'stagger-bg'}></div>
            <div className={'services-pricing  service-bottom-col'}>
              <div className="services-item">
                {serviceDetails.map(({ title, details, disclaimer }) => (
                  <ul className="services-sub" key={id + title}>
                    <h3 className="h3-title secondary-dark">{title}</h3>
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
                          <span>
                            <button
                              style={{
                                background: 'none',
                                border: 'none',
                                textAlign: 'center',
                                width: '100%',
                              }}
                              onClick={() => setVisible(!visible)}
                            >
                              {visible ? 'v' : '^'}
                            </button>{' '}
                            {visible && (
                              <p className="serviceDescription">{`${description}`}</p>
                            )}
                          </span>
                        </li>
                      )
                    )}

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
