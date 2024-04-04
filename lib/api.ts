/* eslint-disable prettier/prettier */
import axios from 'axios';
const baseUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=22.3223441&longitude=114.167752&current=temperature_2m&tim';

const getWeather = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

export {getWeather};
