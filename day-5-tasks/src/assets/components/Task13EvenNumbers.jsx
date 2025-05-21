import React from "react";

const EvenNumbersList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  return (
    <div className="even-container">
      <ul className="even-list">
        {evenNumbers.map((num, index) => (
          <li key={index} className="even-item">
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvenNumbersList;
