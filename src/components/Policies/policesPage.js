import React from 'react';
import { ServicesDescriptions } from '../Staticdatabase';
import Services, { searchResultsReuse } from '../sortServices';
const Policies = () => {
  return (
    <div>
      <h2>Policies Page</h2>
      <Services list={ServicesDescriptions} />
      {/*searchResults.map(
        ({
          id,
          service,
          image,
          blurb,
          serviceDetails,
          idx,
          linkedinHandle,
        }) => (
          <div className="services-content" id={linkedinHandle}>
            <div className={'services-about-content  service-top-col'}>
              <div className={'content'}>
                <h2 className="h2-title primary">{service}</h2>
                <img src={image} className="services-Img" alt="service-theme" />
                <p className="servicesBlurb">{blurb}</p>
              </div>
            </div>
            <div className={'stagger-bg'}></div>
            <div className={'services-pricing  service-bottom-col'}>
              <div className="content">
                <div className="services-item">
                  {serviceDetails.map(({ title, details }) => (
                    <ul className="services-sub">
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
                        )*/}
    </div>
  );
};

export default Policies;
