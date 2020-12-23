import { useState, useEffect } from 'react';

const GetPosition = () => {
  const [location, setLocation] = useState();
  const [error, setError] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation({ latitude, longitude });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not located.');
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  console.log(location);
  return { location, error };
};

export default GetPosition;
