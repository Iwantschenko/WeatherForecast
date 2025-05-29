import type { CustomWeather } from '@models/CurrentWeather';
import styles from './DetailsWeatherForecastPage.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const DetailsWeatherForecastPage = () => {
  const [detailsForecast, setDetailsForecast] = useState<CustomWeather>();
  const [errorMessage, setError] = useState<string | null>(null);
  const { date } = useParams();

  useEffect(() => {
    if (date) {
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=${date}&appid=f111976d52ed2b2a14ffd07259300462`,
      )
        .then(res => res.json())
        .then(data => setDetailsForecast(data))
        .catch(error => setError(error));
    }
  }, [date]);

  return (
    <div className={styles.Container}>
      {detailsForecast ? (
        errorMessage ? (
          <p>{errorMessage}</p>
        ) : (
          <div className={styles.ForecastItem}>
            <h2 className={styles.ForecastItemTitle}>
              Weather on {detailsForecast.date}
            </h2>

            <div className={styles.ForecastItemInfo}>
              <p className={styles.ForecastItemSecondary}>
                🌡️ Temp (afternoon): {detailsForecast.temperature.afternoon}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                🔻 Min: {detailsForecast.temperature.min}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                🔺 Max: {detailsForecast.temperature.max}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                🌙 Night: {detailsForecast.temperature.night}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                🌅 Morning: {detailsForecast.temperature.morning}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                🌆 Evening: {detailsForecast.temperature.evening}K
              </p>
              <p className={styles.ForecastItemSecondary}>
                💧 Humidity: {detailsForecast.humidity.afternoon}%
              </p>
              <p className={styles.ForecastItemSecondary}>
                🌬️ Wind: {detailsForecast.wind.max.speed} m/s, dir{' '}
                {detailsForecast.wind.max.direction}°
              </p>
              <p className={styles.ForecastItemSecondary}>
                ☁️ Clouds: {detailsForecast.cloud_cover.afternoon}%
              </p>
              <p className={styles.ForecastItemSecondary}>
                📈 Pressure: {detailsForecast.pressure.afternoon} hPa
              </p>
              <p className={styles.ForecastItemSecondary}>
                🌧️ Precipitation: {detailsForecast.precipitation.total} mm
              </p>
            </div>
          </div>
        )
      ) : (
        <p className={styles.ForecastItemSecondary}>Loading...</p>
      )}
    </div>
  );
};
