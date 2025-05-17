import React from "react";

function Task11ConditionalRender() {
  const showMessage = true;

  return (
    <div className="container">
      {showMessage && <p>11. React is Cool!</p>}
      <hr className="line" />
    </div>
  );
}

export default Task11ConditionalRender;
