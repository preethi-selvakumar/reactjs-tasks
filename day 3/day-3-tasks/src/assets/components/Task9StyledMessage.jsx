import React from "react";

function Task9StyledMessage() {
  const messageStyle = {
    color: "green",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "20px",
  };

  return (
    <div>
      <p style={messageStyle}>
        9. Inline styling in React allows quick visual customization directly in
        JSX.
      </p>
      <hr className="line" />
    </div>
  );
}

export default Task9StyledMessage;
