import React, { useState, useEffect } from 'react';
import { Navbar } from './NavbarElements';
const dotenv = require('dotenv').config();
const apiKey = process.env.REACT_APP_API_KEY;
const zipApi = process.env.REACT_APP_ZIP_KEY;

const Nav = () => {
  const [location, setLocation] = useState([]);
  const [responseObj, setResponseObj] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Navbar>
        <form action='' method='get'>
          <input
            type='text'
            name='location'
            id='location'
            placeholder='Enter Zip Code'
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <button type='submit'>Submit</button>
          <p>{location}</p>
          <p>{console.log(responseObj)}</p>
        </form>
        <header>
          <div className='current-weather'>{JSON.stringify(responseObj)}</div>
        </header>
      </Navbar>
    </>
  );
};

export default Nav;
