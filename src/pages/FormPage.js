import React from 'react';
import { downloadablePdf } from '../components/Staticdatabase';

const FormPage = () => {
  return (
    <div className="main-container">
      <div className="form-page">
        {downloadablePdf.map(({ label, src, id }) => (
          <p key={id}>
            {label}
            <a className="button" href={src}>
              Download
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default FormPage;
