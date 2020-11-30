import React, { useState, useEffect } from 'react';
import { Navbar } from './NavbarElements';
const apiKey = '3c005018751f1dcc72c1d0f6c2e92f7b';

const Nav = () => {
  const [location, setLocation] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const getWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=${apiKey}&units=imperial`
    );
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

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
