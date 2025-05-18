import React from 'react';

function ColorfulText({ text, color }) {
  return (
    <div>
      <h2 className="project-heading">Mini Project 3: Colorful Text</h2>
      <div className="card">
        <p style={{ color: color, fontSize: '20px', textAlign: 'center' }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ColorfulText;
