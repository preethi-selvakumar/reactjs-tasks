import React from "react";

function ShowHideText() {
  const showText = true;

  return (
    <>
      <div className="container">
        <h2 className="project-title">Mini Project 3: Show/Hide Text</h2>
        {showText && <p className="display-text">Hello, World!</p>}
      </div>
      <hr className="line" />
    </>
  );
}

export default ShowHideText;
