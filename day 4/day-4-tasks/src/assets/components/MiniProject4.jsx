import React from 'react';

function ClickCounter({ onClick }) {
  return (
    <button onClick={onClick} className="alert-button">
      Click Me
    </button>
  );
}

export default ClickCounter;
