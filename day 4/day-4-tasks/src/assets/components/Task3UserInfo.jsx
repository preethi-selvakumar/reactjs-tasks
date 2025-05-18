import React from "react";

function UserInfo(props) {
  return (
    <p className="user-info">
      2. {props.name} is {props.age} years old.
    </p>
  );
}

export default UserInfo;
