import React, { useState } from "react";

const items = ["Html", "Css", "Js", "ReactJs"];

const ToggleList = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={toggleList}>
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul className="toggle-list">
          {items.map((item, index) => (
            <li key={index} className="toggle-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToggleList;
