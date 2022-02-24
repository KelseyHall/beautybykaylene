import React from 'react';
import PolicyAccordion from '../components/Policies/PolicyAccordion';
import { policies } from '../components/Staticdatabase';
const Policies = (props) => {
  return (
    <div className="main-container policies">
      <h1 className="h1-title secondary">Policies</h1>
      <div>
        {policies.map((props) => (
          <PolicyAccordion key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default Policies;
