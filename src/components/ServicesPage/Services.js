import React, { isValidElement } from 'react';
import placeholder from '../../images/services-placeholder.jpg';

const servicesDescriptions = [
  {
    id: 1,
    row: '',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        category: 'Service 1',
        details: { id: 'item-1', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-2', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-3', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-4', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-5', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-6', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-7', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-8', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-9', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-10', name: 'item name', price: 99.99 },
      },
    ],
  },
  {
    id: 2,
    row: '-2',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        category: 'Service 2',
        details: { id: '2-item-1', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-2', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-3', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-4', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-5', name: 'item name', price: 99.99 },
      },
    ],
  },
  {
    id: 3,
    row: '',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        category: 'Service 1',
        details: { id: 'item-1', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-2', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-3', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-4', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-5', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-6', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-7', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-8', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-9', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 1',
        details: { id: 'item-10', name: 'item name', price: 99.99 },
      },
    ],
  },
  {
    id: 4,
    row: '-2',
    service: 'about the service',
    image: placeholder,
    blurb:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.',
    serviceDetails: [
      {
        category: 'Service 2',
        details: { id: '2-item-1', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-2', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-3', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-4', name: 'item name', price: 99.99 },
      },
      {
        category: 'Service 2',
        details: { id: '2-item-5', name: 'item name', price: 99.99 },
      },
    ],
  },
];
const isEven = (n) => {
  return n % 2 == 0;
};
const WhichClass = (idx) => (isEven(idx) ? 'left-col' : 'right-col');

const Service = ({ service, image, blurb, serviceDetails, idx, row }) => (
  <div className="services-content">
    <div className={'services-about-content  service-' + WhichClass(idx) + row}>
      <h2 className="h2-title primary">{service}</h2>
      <img src={image} className="services-Img" alt="service-theme-photo" />
      <p>{blurb}</p>
    </div>
    <div className={'services-pricing  service-' + WhichClass(idx + 1) + row}>
      <h2 className="h2-title primary">pricing</h2>
      <ul className="services-item">
        {serviceDetails.map(({ details }) => (
          <li>
            <p>{details.name}</p>
            <p className="price">{`${details.price}`}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Services = () =>
  servicesDescriptions.map((service, idx) => (
    <Service key={service.id} {...service} idx={idx} />
  ));

export default Services;
