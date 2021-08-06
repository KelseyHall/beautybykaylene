import React from 'react';
import GetintouchForm from '../components/GetInTouchForm';
import ServiceMap from '../images/mapPlaceHolder.png';

const contactUsPage = () => {
  return (
    <div className="main-container">
      <div className="contactUs">
        <div className="contactContent-1">
          <h1 className="h1-title primary">title</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            congue auctor interdum varius non, ut enim, ultricies semper.
            Dictumst dolor, magna amet aenean nulla malesuada convallis in. Eros
            tincidunt vulputate pellentesque neque. Sed consequat in nulla
            mattis at convallis leo, dignissim pellentesque. Sit cras quam enim
            id aliquam.
          </p>
          <h1 className="h1-title primary">book appointment</h1>
          <h3 className="h3-title secondary">905.644.8880</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            congue auctor interdum varius non, ut enim, ultricies semper.
            Dictumst dolor, magna amet aenean nulla malesuada convallis in. Eros
            tincidunt vulputate
          </p>
        </div>
        <div className="contactContent-2">
          <div className="get-in-touch-form">
            <GetintouchForm />
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default contactUsPage;
