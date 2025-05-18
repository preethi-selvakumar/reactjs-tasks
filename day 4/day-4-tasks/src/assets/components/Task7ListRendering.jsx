import React from 'react';

function HobbiesList({ hobbies }) {
  return (
    <div className="hobbies-list">
      <p>7. Hobbies:</p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default HobbiesList;
