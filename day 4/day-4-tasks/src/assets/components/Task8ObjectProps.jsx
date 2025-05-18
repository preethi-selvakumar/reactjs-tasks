import React from 'react';

function UserDetails({ user }) {
  return (
    <div className="user-details">
      <p>8. Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserDetails;
