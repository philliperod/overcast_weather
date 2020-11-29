import React, { useState } from 'react';
import { Navbar } from './NavbarElements';

const Nav = () => {
  const [location, setLocation] = useState('');
  //   const [error, setError] = useState(false);

  //   const getLocationWeather = async () => {
  //     const apiKey = '3c005018751f1dcc72c1d0f6c2e92f7b';
  //     const response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?zip=${location},us&appid=${apiKey}&units=metric`
  //     );

  //     if (response.status === 200) {
  //       return { success: true };
  //     }
  //   };

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
