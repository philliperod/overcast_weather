import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import axios from 'axios';
import Current from './Components/Current';
import FiveDays from './Components/FiveDays';
import Hourly from './Components/Hourly';
import Nav from './Components/Navbar';
import Radar from './Components/Radar';
const dotenv = require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;
const zipApi = process.env.REACT_APP_ZIP_KEY;

function App() {
  const [zipCode, setZipCode] = useState('');
  // const [weather, setWeather] = useState([]);

  // const fetchWeather = async (zipCode) => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => setResponseObj(response));
  // };
  const Exchange = () => {
    const {} = useQuery('forecast', getWeatherData, {});
  };

  const getWeatherData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
    );
    console.log(data);
    return data;
  };

  return (
    <div className='App'>
      <Nav />
      <Current />
      <Hourly />
      <Radar />
      <FiveDays />
    </div>
  );
}

export default App;
