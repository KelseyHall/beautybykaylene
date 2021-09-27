import React from 'react';
import { downloadablePdf } from '../components/Staticdatabase';

const FormPage = () => {
  return (
    <div className="main-container">
      {downloadablePdf.map(({ label, src, id }) => (
        <p key={id}>
          {label}
          <a href={src}>Download</a>
        </p>
      ))}
    </div>
  );
};

export default FormPage;
