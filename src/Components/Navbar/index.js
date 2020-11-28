import React from 'react';
import { Navbar } from './NavbarElements';

const Nav = () => {
  const getLocationWeather = async (location) => {
    const apiKey = '3c005018751f1dcc72c1d0f6c2e92f7b';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    );

    if (response.status === 200) {
      return { success: true };
    }
  };

  return (
    <>
      <Navbar>
        <form action="" method="get">
          <input
            type="text"
            name="location"
            id="location"
            placeholder="New location"
          />
          <button type="submit">Generate</button>
        </form>
      </Navbar>
    </>
  );
};

export default Nav;
