import React from 'react';
import Task12Child from './Task12Child';

function Task12Parent() {
  return (
    <div className="container">
      <p>12. This is the parent component.</p>
      <Task12Child />
      <hr className="line" />
    </div>
  );
}

export default Task12Parent;
