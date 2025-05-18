import React from 'react';

function WelcomeUser({ name }) {
  return (
    <p className="welcome-user">6. Welcome, {name}!</p>
  );
}

WelcomeUser.defaultProps = {
  name: "Guest"
};

export default WelcomeUser;
