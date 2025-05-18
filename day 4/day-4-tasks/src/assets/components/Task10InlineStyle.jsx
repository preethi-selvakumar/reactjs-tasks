import React from 'react';

function ColoredText({ color }) {
  return (
    <p style={{ color: color, fontSize: "24px", textAlign: "center", fontWeight: "600" }}>
      10. This text is styled with inline color prop!
    </p>
  );
}

export default ColoredText;
