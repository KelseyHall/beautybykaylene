import React, { useState } from 'react';
import downArrow from '../../images/smallDownArrow.png';
import upArrow from '../../images/smallUpArrow.png';
const ServicesAccordion = ({ serviceName, price, time, description }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => setIsOpen((prev) => !prev);
  const showContent = () => {
    if (description.length > 0) {
      return isOpen ? (
        <img src={downArrow} className="arrows" alt="downArrow" />
      ) : (
        <img src={upArrow} className="arrows" alt="upArrow" />
      );
    } else {
      return;
    }
  };
  return (
    <li>
      <div className="service-individual-item">
        <p className="service-individual-item-name">
          {serviceName}
          <span className="service-individual-item-time">{`${time}`}</span>
        </p>

        <p className="service-individual-item-price">{`$${price}`}</p>
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
          {showContent()}
        </button>{' '}
        {isOpen && (
          <p className="service-individual-item-description">{`${description}`}</p>
        )}
      </span>
    </li>
  );
};

export default ServicesAccordion;
