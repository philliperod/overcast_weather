import { useState, useEffect } from 'react';

export const getPosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({}) => {
    setPosition({
      lat: coords.latitude,
      long: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not located.');
      return;
    }
    geo.getCurrentPosition(onChange, onError);
  }, []);
  return { ...position, error };
};
