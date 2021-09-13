import React, { isValidElement } from 'react';
import placeholder from '../../images/services-placeholder.jpg';

const servicesDescriptions = [
  {
    id: 1,
    linkedinHandle: 'anchor-service1',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus. Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'sub-title1',
        details: [
          { id: '1-item-1', serviceName: 'item name', price: 99.99 },
          { id: '1-item-2', serviceName: 'item name', price: 99.99 },
          { id: '1-item-3', serviceName: 'item name', price: 99.99 },
          { id: '1-item-4', serviceName: 'item name', price: 99.99 },
          { id: '1-item-5', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title2',
        details: [
          { id: '1-item-6', serviceName: 'item name', price: 99.99 },
          { id: '1-item-7', serviceName: 'item name', price: 99.99 },
          { id: '1-item-8', serviceName: 'item name', price: 99.99 },
          { id: '1-item-9', serviceName: 'item name', price: 99.99 },
          { id: '1-item-10', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title3',
        details: [
          { id: '1-item-11', serviceName: 'item name', price: 99.99 },
          { id: '1-item-12', serviceName: 'item name', price: 99.99 },
          { id: '1-item-13', serviceName: 'item name', price: 99.99 },
          { id: '1-item-14', serviceName: 'item name', price: 99.99 },
          { id: '1-item-15', serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
  {
    id: 2,
    linkedinHandle: 'anchor-service2',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'sub-title1',
        details: [
          { id: '2-item-1', serviceName: 'item name', price: 99.99 },
          { id: '2-item-2', serviceName: 'item name', price: 99.99 },
          { id: '2-item-3', serviceName: 'item name', price: 99.99 },
          { id: '2-item-4', serviceName: 'item name', price: 99.99 },
          { id: '2-item-5', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title2',
        details: [
          { id: '2-item-6', serviceName: 'item name', price: 99.99 },
          { id: '2-item-7', serviceName: 'item name', price: 99.99 },
          { id: '2-item-8', serviceName: 'item name', price: 99.99 },
          { id: '2-item-9', serviceName: 'item name', price: 99.99 },
          { id: '2-item-10', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title3',
        details: [
          { id: '2-item-11', serviceName: 'item name', price: 99.99 },
          { id: '2-item-12', serviceName: 'item name', price: 99.99 },
          { id: '2-item-13', serviceName: 'item name', price: 99.99 },
          { id: '2-item-14', serviceName: 'item name', price: 99.99 },
          { id: '2-item-15', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title4',
        details: [
          { id: '2-item-16', serviceName: 'item name', price: 99.99 },
          { id: '2-item-17', serviceName: 'item name', price: 99.99 },
          { id: '2-item-18', serviceName: 'item name', price: 99.99 },
          { id: '2-item-19', serviceName: 'item name', price: 99.99 },
          { id: '2-item-20', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title5',
        details: [
          { id: '2-item-21', serviceName: 'item name', price: 99.99 },
          { id: '2-item-22', serviceName: 'item name', price: 99.99 },
          { id: '2-item-23', serviceName: 'item name', price: 99.99 },
          { id: '2-item-24', serviceName: 'item name', price: 99.99 },
          { id: '2-item-25', serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
  {
    id: 3,
    linkedinHandle: 'anchor-service3',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'sub-title1',
        details: [
          { id: '3-item-1', serviceName: 'item name', price: 99.99 },
          { id: '3-item-2', serviceName: 'item name', price: 99.99 },
          { id: '3-item-3', serviceName: 'item name', price: 99.99 },
          { id: '3-item-4', serviceName: 'item name', price: 99.99 },
          { id: '3-item-5', serviceName: 'item name', price: 99.99 },
        ],
      },
      {
        title: 'sub-title2',
        details: [
          { id: '3-item-6', serviceName: 'item name', price: 99.99 },
          { id: '3-item-7', serviceName: 'item name', price: 99.99 },
          { id: '3-item-8', serviceName: 'item name', price: 99.99 },
          { id: '3-item-9', serviceName: 'item name', price: 99.99 },
          { id: '3-item-10', serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
  {
    id: 4,
    linkedinHandle: 'anchor-service4',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        title: 'sub-title1',
        details: [
          { id: '4-item-1', serviceName: 'item name', price: 99.99 },
          { id: '4-item-2', serviceName: 'item name', price: 99.99 },
          { id: '4-item-3', serviceName: 'item name', price: 99.99 },
          { id: '4-item-4', serviceName: 'item name', price: 99.99 },
          { id: '4-item-5', serviceName: 'item name', price: 99.99 },
        ],
      },
    ],
  },
];
const isEven = (n) => {
  return n % 2 == 0;
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
        <img src={image} className="services-Img" alt="service-theme-photo" />
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
  servicesDescriptions.map((service, idx) => (
    <Service key={service.id} {...service} idx={idx} />
  ));

export default Services;
