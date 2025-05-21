import React from "react";

const TimeGreeting = () => {
  const time = new Date().getHours(); 
  let greeting;

  if (time < 12) {
    greeting = "Morning";
  } 
  else if (time < 18) {
    greeting = "Afternoon";
  } 
  else {
    greeting = "Evening";
  }

  return (
    <div>
      <h2 className="greeting-text">Good {greeting}!</h2>
    </div>
  );
};

export default TimeGreeting;
