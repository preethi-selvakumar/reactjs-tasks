import React from "react";

const items = []; 

const ItemList = () => {
  return (
    <div>
      <h2>Items</h2>
      {items.length === 0 ? (
        <p className="empty-text">No items available</p>
      ) : (
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index} className="item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
