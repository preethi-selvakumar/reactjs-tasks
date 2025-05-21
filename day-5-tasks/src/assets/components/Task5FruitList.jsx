import React from "react";

const fruits = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Banana", color: "goldenrod" },
  { id: 3, name: "Grapes", color: "purple" },
  { id: 4, name: "Orange", color: "orange" },
  { id: 5, name: "Kiwi", color: "green" },
];

const FruitList = () => {
  return (
    <div>
      <ul>
        {fruits.map(({ id, name, color }) => (
          <li key={id} style={{ color: color, fontWeight: "bold", fontSize: "1.2rem" }}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
