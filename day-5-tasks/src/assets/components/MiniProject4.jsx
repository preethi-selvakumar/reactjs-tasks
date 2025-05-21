import React from "react";

const NumberFilter = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const colors = [
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
    "linear-gradient(135deg, #c3cfe2, #c3cfe2)",
    "linear-gradient(135deg, #f6d365, #fda085)",
    "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
    "linear-gradient(135deg, #84fab0, #8fd3f4)",
  ];

  const containerStyle = {
    textAlign: "center",
    paddingTop: "40px",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "30px",
    fontSize: "2rem",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  };

  const getItemStyle = (index) => ({
    background: colors[index % colors.length],
    color: "#333",
    padding: "20px 30px",
    borderRadius: "15px",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    cursor: "default",
    minWidth: "80px",
  });

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Even Numbers Only</h2>
      <ul style={listStyle}>
        {evenNumbers.map((num, index) => (
          <li key={index} style={getItemStyle(index)}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NumberFilter;
