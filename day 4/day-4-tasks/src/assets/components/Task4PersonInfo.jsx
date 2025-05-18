import React from 'react';

function PersonInfo({ name, city }) {
  return (
    <p className="person-info"> 3. {name} lives in {city}.</p>
  );
}

export default PersonInfo;
