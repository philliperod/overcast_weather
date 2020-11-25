import React from 'react';
import Current from './Components/Current';
import FiveDays from './Components/FiveDays';
import Radar from './Components/Radar';

function App() {
  return (
    <div className="App">
      <Current />
      <Radar />
      <FiveDays />
    </div>
  );
}

export default App;
