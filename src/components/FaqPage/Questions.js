import React from 'react';

const questions = [
  {
    id: 1,
    type: 'nails',
    question:
      'nails Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: 2,
    type: 'waxing',
    question: 'waxing Lorem ipsum dolor sit amet, consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt inneque, sed quis arcu turpis gravida aliquam dignissim. Bibendum netussed amet id eleifend bibendum convallis. Dui odio purus, laoreet felismorbi nisi, tellus vitae. Ultricies urna porta est in tellus consecteturfaucibus convallis dictum. Risus hendrerit maecenas nec non cras egetelementum. Tellus phasellus nulla urna morbi. In tincidunt elit nullamaecenas. Neque, aliquam id aenean risus eget metus lectus felis in. Eudictum eu, ac quis sit non. Cursus sagittis et ullamcorper non pharetra,fringilla mauris. Ut et enim proin lectus purus. Cursus vulputate atfaucibus varius purus vitae fermentum. Lorem ullamcorper vitae volutpatsit consectetur faucibus suspendisse tortor integer. Rutrum venenatisquam leo in at vitae turpis pretium vitae. Pellentesque feugiat arcucras at. Nibh non pharetra donec egestas euismod purus vestibulum. Namfringilla dui varius nec ac morbi sollicitudin sit fermentum. Et congue',
  },
  {
    id: 3,
    type: 'lashbrow',
    question:
      'lashbrow Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: 4,
    type: 'massage',
    question:
      'massage Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
  {
    id: 5,
    type: 'general',
    question:
      'general Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing eli?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsanfeugiat integer risus libero pulvinar tellus senectus sapien. Ultrices tellus odio nisl non nibh lacinia. Consectetur metus odio magna volutpatin. Rutrum adipiscing convallis facilisis vestibulum eleifend inullamcorper laoreet enim. Placerat quis donec dolor et at mattis atfeugiat nibh. Sit nibh faucibus at vitae quis eros, molestie luctus.Viverra mauris pulvinar sed volutpat. In viverra arcu purus sed purusvel amet vel.',
  },
];

export const filteredQuestions = (option) => {
  console.log(option);
};

const DisplayQuestions = () =>
  questions.map(({ id, question, answer }) => (
    <div key={id} className="QA">
      <p className="question-bold secondary">{question}</p>
      <p>{answer}</p>
    </div>
  ));

const QuestionAndAnswer = () => {
  return <DisplayQuestions />;
};

export default QuestionAndAnswer;
