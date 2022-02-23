import React, { useState } from 'react';

const PolicyAccordion = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="policy">
      <button onClick={handleToggle} className="button">
        {title}
      </button>
      {isOpen && <div>{body}</div>}
    </div>
  );
};

export default PolicyAccordion;
