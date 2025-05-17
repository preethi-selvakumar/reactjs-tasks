import React from 'react';

const MessageOne = () => {
  return <p>3. React helps you build dynamic and interactive user interfaces with ease.</p>;
};

const MessageTwo = () => {
  return <p>Functional components are simpler and easier to maintain than class components.</p>;
};

const MessageThree = () => {
  return <p>Learning React opens doors to frontend development and modern web frameworks.</p>;
};

const Task3MultipleFunctional = () => {
  return (
    <div className="container">
      <MessageOne />
      <MessageTwo />
      <MessageThree />
      <hr className="line" />
    </div>
  );
};

export default Task3MultipleFunctional;
