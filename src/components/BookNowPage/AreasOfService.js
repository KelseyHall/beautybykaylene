import React from 'react';
// import ServiceMap from '../../images/mapPlaceHolder.png';

const AreasOfService = () => {
  return (
    <div className="areas-of-service">
      <h1 className="h1-title secondary">
        areas of service <hr />
      </h1>
      <div className="areas-of-service-map">
        <iframe
          title="areasOfService"
          src="https://www.google.com/maps/d/embed?mid=1xvikXkXgCH2z0ktkjAsUYGHQZwQWPwJ3&ehbc=2E312F"
        ></iframe>

        <div className="commuting-chart">
          <div className="services-area-1">
            <div className="icon"></div>
            <p>
              <span>Tier 1</span>
              <span> No Travel Fee</span>
              <span> {`<10 min one way`}</span>
            </p>
          </div>

          <div className="services-area-2">
            <div className="icon"></div>
            <p>
              <span> Tier 2 </span> <span> $10 Travel Fee</span>
              <span> {`<20 min one way`}</span>
            </p>
          </div>

          <div className="services-area-3">
            <div className="icon"></div>
            <p>
              <span> Tier 3</span> <span> $20 Travel Fee</span>
              <span> {`<30 min one way`}</span>
            </p>
          </div>
          <div className="services-area-4">
            <div className="icon"></div>
            <p>
              <span> Tier 4</span> <span> $30 Travel Fee</span>
              <span> {`<45 min one way`}</span>
            </p>
          </div>
          <div className="services-area-5">
            <div className="icon"></div>
            <p>
              <span> Tier 5 </span> <span> $40 Travel Fee</span>
              <span> {`<60 min one way`}</span>
            </p>
          </div>
        </div>
      </div>
      <p className="blurb">
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
