import React from 'react';

function ConditionalWelcome({ name }) {
  return (
    <p className="conditional-welcome">
      9. Welcome, {name ? name : "Guest"}!
    </p>
  );
}

export default ConditionalWelcome;
