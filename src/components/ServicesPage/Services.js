import React from "react";
import placeholder from "../../images/services-placeholder.jpg";

const servicesDescriptions = [
  {
    id: 1,
    className: "services-about-content  service-left-col full-bleed-left",
    service: "about the service",
    image: placeholder,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.",
    serviceDetails: [
      {
        category: "Service 1",
        details: { id: "item-1", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-2", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-3", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-4", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-5", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-6", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-7", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-8", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-9", name: "item name", price: 99.99 },
      },
      {
        category: "Service 1",
        details: { id: "item-10", name: "item name", price: 99.99 },
      },
    ],
  },
  {
    id: 2,
    className: "services-about-content service-right-col-2 full-bleed-right",
    service: "about the service",
    image: placeholder,
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consecteturpulvinar viverra eu sem maecenas leo. Ut donec commodo posuere acat. Massa adipiscing ac enim eget faucibus justo, ut. Felis luctusarcu, duis purus. Eget turpis sit proin ullamcorper. Ut morbi nequeat sed neque viverra sit dui. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Consectetur pulvinar viverra eu semmaecenas leo. Ut donec commodo posuere ac at. Massa adipiscing acenim eget faucibus justo, ut. Felis luctus arcu, duis purus.",
    serviceDetails: [
      {
        category: "Service 2",
        details: { id: "2-item-1", name: "item name", price: 99.99 },
      },
      {
        category: "Service 2",
        details: { id: "2-item-2", name: "item name", price: 99.99 },
      },
      {
        category: "Service 2",
        details: { id: "2-item-3", name: "item name", price: 99.99 },
      },
      {
        category: "Service 2",
        details: { id: "2-item-4", name: "item name", price: 99.99 },
      },
      {
        category: "Service 2",
        details: { id: "2-item-5", name: "item name", price: 99.99 },
      },
    ],
  },
];

const Services = () =>
  servicesDescriptions.map((service) => (
    <Service key={service.id} {...service} />
  ));
// const filterPrices = () => {};

// const DisplayPrices = () =>
//   servicesPricing.map(({ details }) => (
//     <ul className="services-item">
//       <li key={details.id}>
//         <p>{details.name}</p>
//         <p className="price">{`${details.price}`}</p>
//       </li>
//     </ul>
//   ));

// export function ShowPrices() {
//   return (
//     <div className="services-pricing service-right-col full-bleed-right">
//       <h2 className="h2-title primary">pricing</h2>
//       <DisplayPrices />
//     </div>
//   );
// }
const Service = ({ service, image, blurb, serviceDetails }) => (
  <div>
    <div>
      <h2 className="h2-title primary">{service}</h2>
      <img src={image} className="services-Img" alt="service-theme-photo" />
      <p>{blurb}</p>
    </div>
    {serviceDetails.map(({ details }) => (
      <ul className="services-item">
        <li>
          <p>{details.name}</p>
          <p className="price">{`${details.price}`}</p>
        </li>
      </ul>
    ))}
  </div>
);

export default Services;
