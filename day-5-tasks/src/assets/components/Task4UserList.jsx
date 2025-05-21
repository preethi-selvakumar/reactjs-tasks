import React from "react";

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "Diana", age: 28 },
  { id: 5, name: "Ethan", age: 35 },
];

const UserList = () => {
  return (
    <div className="user-list-container">
      <ul className="user-list">
        {users.map(({ id, name, age }) => (
          <li key={id} className="user-item">
            <span className="user-name">{name}</span> — <span className="user-age">{age} years old</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
