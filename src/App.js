import React, { useState } from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import { useQuery } from 'react-query';
import axios from 'axios';
import Current from './Components/Current';
import FiveDays from './Components/FiveDays';
import Hourly from './Components/Hourly';
import Nav from './Components/Navbar';
import Radar from './Components/Radar';
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [zipCode, setZipCode] = useState('');

  // const Exchange = () => {
  //   const {} = useQuery('forecast', getWeatherData, {});
  // };

  // const getWeatherData = async () => {
  //   const { data } = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}&units=imperial`
  //   );
  //   console.log(data);
  //   return data;
  // };

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
