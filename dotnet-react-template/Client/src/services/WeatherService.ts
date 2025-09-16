import axios, { AxiosResponse } from 'axios';
import { WeatherForecast } from '@/types/WeatherForecast';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:#{DotNetPort}#';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

class WeatherService {
  async getWeatherForecast(): Promise<WeatherForecast[]> {
    try {
      const response: AxiosResponse<WeatherForecast[]> = await api.get('/api/WeatherForecast');
      return response.data;
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      throw error;
    }
  }
}

export default new WeatherService();
