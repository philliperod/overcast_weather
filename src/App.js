import React from 'react';
import Current from './Components/Current';
import FiveDays from './Components/FiveDays';
import Hourly from './Components/Hourly';
import Nav from './Components/Navbar';
import Radar from './Components/Radar';
const dotenv = require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [zipCode, setZipCode] = useState('');
  const [weather, setWeather] = useState([]);

  const fetchWeather = async (zipCode) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => setResponseObj(response));
  };

  return (
    <div className="App">
      <Nav />
      <Current />
      <Hourly />
      <Radar />
      <FiveDays />
    </div>
  );
}

export default App;
