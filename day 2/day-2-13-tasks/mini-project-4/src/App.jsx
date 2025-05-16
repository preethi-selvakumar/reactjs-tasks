import React from 'react';
import UserAvatar from './UserAvatar';
import avatarImage from './assets/images/11_avatar-512.webp'; 

function App() {
  return (
    <div>
      <h1>User Avatar</h1>
      <UserAvatar 
        url={avatarImage} 
        alt="My Local Avatar" 
      />
    </div>
  );
}

export default App;
