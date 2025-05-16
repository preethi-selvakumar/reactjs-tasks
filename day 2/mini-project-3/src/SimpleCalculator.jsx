import React from 'react';

function SimpleCalculator() {
  function handleSubmit(event) {
    event.preventDefault(); 

    const num1 = Number(event.target.num1.value);
    const num2 = Number(event.target.num2.value);
    const sum = num1 + num2;

    document.getElementById("result").innerText = "Sum: " + sum;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Simple Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="num1" placeholder="Enter first number" required />
        <br /><br />
        <input type="number" name="num2" placeholder="Enter second number" required />
        <br /><br />
        <button type="submit">Add</button>
      </form>
      <br />
      <h3 id="result"></h3> 
    </div>
  );
}

export default SimpleCalculator;
