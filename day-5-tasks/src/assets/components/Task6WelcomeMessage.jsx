import React from "react";

const isLoggedIn = true;

const WelcomeMessage = () => {
  return (
    <div className="welcome-container">
      {isLoggedIn && <h2 className="welcome-text">Hello, User!</h2>}
    </div>
  );
};

export default WelcomeMessage;
