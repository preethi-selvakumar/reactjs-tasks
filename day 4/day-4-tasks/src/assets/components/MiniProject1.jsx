import React from 'react';

const Profile = ({ name = "Preethi", age = 24, city = "Madurai" }) => {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

export default Profile;
