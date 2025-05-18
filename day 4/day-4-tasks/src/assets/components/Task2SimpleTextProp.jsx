import React from 'react';

function MessageComponent(props) {
  return (
    <div>
      <p className="message">{props.message}</p>
      <hr />
    </div>
  );
}

export default MessageComponent;
