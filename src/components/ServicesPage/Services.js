import React from 'react';
import { ServicesDescriptions } from '../Staticdatabase';
const isEven = (n) => {
  return n % 2 === 0;
};
const WhichRow = (idx) => (isEven(idx) ? '' : '-2');

const Service = ({
  service,
  image,
  blurb,
  serviceDetails,
  idx,

  linkedinHandle,
}) => (
  <div className="services-content" id={linkedinHandle}>
    <div className={'services-about-content  service-top-col' + WhichRow(idx)}>
      <div className={'content'}>
        <h2 className="h2-title primary">{service}</h2>
        <img src={image} className="services-Img" alt="service-theme" />
        <p>{blurb}</p>
      </div>
    </div>
    <div className={'stagger-bg' + WhichRow(idx)}></div>
    <div className={'services-pricing  service-bottom-col' + WhichRow(idx)}>
      <div className="content">
        <h2 className="h2-title primary">pricing</h2>
        <div className="services-item">
          {serviceDetails.map(({ title, details }) => (
            <ul className="services-sub">
              <h3 className="h3-title secondary">{title}</h3>
              {details.map(({ id, serviceName, price }) => (
                <li key={id}>
                  <p>{serviceName}</p>
                  <p className="price">{`$${price}`}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Services = () =>
  ServicesDescriptions.map((service, idx) => (
    <Service key={service.id} {...service} idx={idx} />
  ));

export default Services;
