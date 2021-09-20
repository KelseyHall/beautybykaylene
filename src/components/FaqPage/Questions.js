import React from 'react';

import { FaqQuestions } from '../Staticdatabase';

export const filteredQuestions = (option) => {
  console.log(option);
};

const DisplayQuestions = () =>
  FaqQuestions.map(({ id, question, answer }) => (
    <div key={id} className="QA">
      <p className="question-bold secondary">{question}</p>
      <p>{answer}</p>
    </div>
  ));

const QuestionAndAnswer = () => {
  return <DisplayQuestions />;
};

export default QuestionAndAnswer;
