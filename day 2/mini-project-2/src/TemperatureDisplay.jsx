import React from "react";

const TemperatureDisplay = ({ temperature }) => {
  let status = "";

  if (temperature > 30) {
    status = "Hot";
  } 
  else if (temperature < 15) {
    status = "Cold";
  } 
  else {
    status = "Normal";
  }

  return (
    <div>
      <p>Temperature: {temperature}°C</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default TemperatureDisplay;
