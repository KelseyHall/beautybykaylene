import React, { useState } from 'react';
import downArrow from '../../images/smallDownArrow.png';
import upArrow from '../../images/smallUpArrow.png';
const ServicesAccordion = ({ serviceName, price, time, description }) => {
  //   const isOpen = false;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
  return (
    <li>
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
          onClick={handleToggle}
        >
          {isOpen ? (
            <img src={downArrow} className="arrows" alt="downArrow" />
          ) : (
            <img src={upArrow} className="arrows" alt="upArrow" />
          )}
        </button>{' '}
        {isOpen && <p className="serviceDescription">{`${description}`}</p>}
      </span>
    </li>
  );
};

export default ServicesAccordion;
