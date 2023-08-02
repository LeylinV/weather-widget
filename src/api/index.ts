// components/api.ts
import axios from 'axios';
import { WeatherData } from '@/types/WeatherData';
import { apiKey, apiUrl } from './vars';

export async function getWeatherForCity(cityName: string): Promise<WeatherData> {
    try {
        const response = await axios.get(apiUrl, {
          params: {
            q: cityName,
            appid: apiKey,
            units: 'metric'
          }
        });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return {} as WeatherData;
  }
}
