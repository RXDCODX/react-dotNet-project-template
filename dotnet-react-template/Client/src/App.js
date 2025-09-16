import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import WeatherService from './services/WeatherService';
import { WeatherForecast } from './types/WeatherForecast';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await WeatherService.getWeatherForecast();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        setError('Ошибка при загрузке данных с сервера');
        console.error('Error fetching weather data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1 className={styles.loading}>Загрузка данных...</h1>
        </header>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Ошибка</h1>
          <p className={styles.error}>{error}</p>
        </header>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>React 19 + .NET Web API</h1>
        <p>Данные получены с .NET Web API:</p>
        <div className={styles.weatherContainer}>
          {weatherData.map((forecast, index) => (
            <div key={index} className={styles.weatherCard}>
              <h3>{forecast.date}</h3>
              <p>Температура: {forecast.temperatureC}°C ({forecast.temperatureF}°F)</p>
              <p>Описание: {forecast.summary}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
