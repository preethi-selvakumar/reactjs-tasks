import React from 'react';
import './assets/css/ProfileCard.css'; 

function ProfileCard() {
  const cardStyle = {
    border: '2px solid #333',
    padding: '20px',
    width: '250px',
    margin: '20px auto',
    borderRadius: '10px',
    backgroundColor: '#fff',
    textAlign: 'center'
  };

  const nameStyle = {
    color: 'teal'
  };

  return (
    <div className="profile-card" style={cardStyle}>
      <h2 style={nameStyle}>Name: Preethi</h2> 
      <p>Age: 25</p>
      <p>Location: Madurai</p>
    </div>
  );
}

export default ProfileCard;
