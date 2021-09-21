import React, { useState, useEffect } from 'react';

import { faqQuestions } from '../Staticdatabase';

const DisplayQuestions = () =>
  faqQuestions.map(({ id, question, answer }) => (
    <div key={id} className="QA">
      <p className="question-bold secondary">{question}</p>
      <p>{answer}</p>
    </div>
  ));

const QuestionAndAnswer = () => {
  return <DisplayQuestions />;
};

export default QuestionAndAnswer;
