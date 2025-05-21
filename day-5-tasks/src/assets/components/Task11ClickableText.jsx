import React from "react";

const items = ["Apple", "Banana", "Cherry", "Mango"];

const ClickableList = () => {
  const handleClick = (item) => {
    alert(`You clicked on: ${item}`);
  };

  return (
    <div >
      <h2>Click an Item</h2>
      <ul className="clickable-list">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            className="clickable-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClickableList;
