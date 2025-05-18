import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function ParentComponent() {
  const text = "13. This is Parent Component";

  return (
    <div>
      <ChildOne text={text} />
      <ChildTwo text={text} />
    </div>
  );
}

export default ParentComponent;
