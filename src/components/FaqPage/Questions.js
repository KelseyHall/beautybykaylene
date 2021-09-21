import React, { useState, useEffect } from 'react';

import { FaqQuestions } from '../Staticdatabase';

export const filteredQuestions = (option) => {
  console.log(option);
};
const FilteredQuestions = (e) => {
  const [category, setCategory] = useState([FaqQuestions]);
  const FilterByCategory = (e) => setCategory((category) => category.filter(e));
  return (
    <div key={1} className="QA">
      <p className="question-bold secondary">{}</p>
      <p>{}</p>
    </div>
  );
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
