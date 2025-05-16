import React from 'react';

function UserAvatar({ url, alt }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={url} alt={alt} style={{ width: '150px', borderRadius: '50%' }} />
      <p>{alt}</p>
    </div>
  );
}

export default UserAvatar;
