import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;

const oneCallWeather = async (key, { lat, long }) => {
  if (lat && long) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${apiKey}`
    );
    return data;
  }
  return null;
};

export { oneCallWeather };
