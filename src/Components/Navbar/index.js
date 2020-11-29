import React, { useState, useEffect } from 'react';
import { Navbar } from './NavbarElements';
// const url = 'api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '3c005018751f1dcc72c1d0f6c2e92f7b';

const Nav = () => {
  const [location, setLocation] = useState('76542');

  const getLocationWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=${apiKey}&units=imperial`
    );
    const result = await response.json();
    console.log(result);

    // if (response.status === 200) {
    //     return { success: true };
    // }
  };

  useEffect(() => {
    getLocationWeather(location);
  }, [location]);

  const handleChange = (event) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  return (
    <>
      <Navbar>
        <form action="" method="get">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Enter Zip Code"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <p>{location}</p>
        </form>
      </Navbar>
    </>
  );
};

export default Nav;
