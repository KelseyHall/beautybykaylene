import React from 'react';
import ServiceMap from '../../images/mapPlaceHolder.png';

const AreasOfService = () => {
  return (
    <div className="areas-of-service">
      <h1 className="h1-title primary">
        areas of service <hr />
      </h1>
      <img src={ServiceMap} className="serviceMap" alt="map" />
      <div className="commuting-chart">
        <div className="services-area-1"></div>
        <p>free commute</p>
        <div className="services-area-2"></div>
        <p>$5-10 commuting fee</p>
        <div className="services-area-3"></div>
        <p>$15-20 commuting fee</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu dictum
        netus morbi nisi in ligula. Aliquam sit quam ante pellentesque morbi
        curabitur. Pretium tincidunt amet, elit consequat amet gravida feugiat
        ornare. Quam dictum elementum ac augue at urna, nisl, lorem et. Massa
        blandit senectus proin aliquet quis ullamcorper in iaculis.
      </p>
    </div>
  );
};

export default AreasOfService;