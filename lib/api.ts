/* eslint-disable prettier/prettier */
import axios from 'axios';
const baseUrl = 'https://api.open-meteo.com/v1/forecast?';

type WeatherParams = {
  latitude: string;
  longitude: string;
};

const getWeather = async (weatherParams: WeatherParams) => {
  const request = await axios.get(
    baseUrl +
      new URLSearchParams({
        latitude: weatherParams.latitude,
        longitude: weatherParams.longitude,
        current:
          'temperature_2m,wind_speed_10m,weather_code,relative_humidity_2m',
        timezone: 'auto',
      }),
  );
  console.log('request.data', request.data);
  return request.data;
};

export {getWeather};
