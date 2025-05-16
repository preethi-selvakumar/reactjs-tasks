import React from 'react';
import TemperatureDisplay from './TemperatureDisplay';

function App() {
  return (
    <div>
      <TemperatureDisplay temperature={35} />
      <TemperatureDisplay temperature={10} />
      <TemperatureDisplay temperature={25} />
    </div>
  );
}

export default App;
