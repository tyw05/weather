/* eslint-disable prettier/prettier */
import axios from 'axios';
const baseUrl = 'https://api.open-meteo.com/v1/forecast?';

type WeatherParams = {
  latitude: string;
  longitude: string;
};

const getWeather = async (weatherParams: WeatherParams) => {
  console.log('HI', weatherParams);
  const request = await axios.get(
    baseUrl +
      new URLSearchParams({
        latitude: weatherParams.latitude,
        longitude: weatherParams.longitude,
        current: 'temperature_2m',
        timezone: 'auto',
      }),
  );

  return request.data;
};

export {getWeather};
