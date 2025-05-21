import React from "react";

const isLoggedIn = true; 

const LoginMessage = () => {
  return (
    <div className="login-container">
      <h2 className="login-text">
        {isLoggedIn ? "Welcome" : "Please Log In"}
      </h2>
    </div>
  );
};

export default LoginMessage;
