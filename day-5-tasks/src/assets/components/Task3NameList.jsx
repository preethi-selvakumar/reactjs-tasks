import React from "react";

const names = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Ethan" },
];

const NameList = () => {
  return (
    <div className="name-list-container">
      <ul className="name-list">
        {names.map(({ id, name }) => (
          <li key={id} className="name-item">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
