import React, { useState, useEffect } from 'react';
import { Navbar } from './NavbarElements';
const apiKey = '3c005018751f1dcc72c1d0f6c2e92f7b';

const Nav = () => {
  const [location, setLocation] = useState([]);
  const [responseObj, setResponseObj] = useState({});
  //   const [error, setError] = useState(false);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const getWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=${apiKey}&units=imperial`
    )
      .then((response) => response.json())
      .then((response) => setResponseObj(response));

    console.log(response);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
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
            onSubmit={handleSubmit}
          />
          <button type="submit">Submit</button>
          <p>{location}</p>
        </form>
        <header>
          <div className="current-weather">{JSON.stringify(responseObj)}</div>
        </header>
      </Navbar>
    </>
  );
};

export default Nav;
