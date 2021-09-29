import React from 'react';
// import SocialMedia from './SocialMedia';

const GetintouchForm = () => {
  return (
    <div className="getInTouch">
      <h1 className="h1-title primary">get in touch</h1>
      <hr />
      <form>
        <input type="input" placeholder="what service are you interested in?" />
        <input type="input" placeholder="name" />
        <input type="input" placeholder="phone number" />
        <input type="input" placeholder="email" />
        <textarea
          type="textarea"
          placeholder="add more details on your inqury here..."
        />
        <button>Ask me!</button>
      </form>
      {/*<SocialMedia />*/}
    </div>
  );
};

export default GetintouchForm;
