import React from 'react';
import Current from './Components/Current';
import FiveDays from './Components/FiveDays';
import Nav from './Components/Navbar';
import Radar from './Components/Radar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Current />
      <Radar />
      <FiveDays />
    </div>
  );
}

export default App;
