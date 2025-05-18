import React from 'react';

function CardComponent({ title, description }) {
  return (
    <div className="card">
      <h2 className="card-title">12. {title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default CardComponent;
