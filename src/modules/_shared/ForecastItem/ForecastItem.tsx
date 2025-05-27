import type { DailyWeatherForecastShort } from '@models/DailyForecastShort';
import styles from './ForecastItem.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  forecast: DailyWeatherForecastShort;
}

export const ForecastItem: React.FC<Props> = ({ forecast }) => {
  const temperatureFormat = (temperature: number) => {
    return temperature >= 0 ? `+${temperature}C` : `-${temperature}C`;
  };

  const getWindDirectionFull = (deg: number): string => {
    const arrows = ['↑', '↗', '→', '↘', '↓', '↙', '←', '↖'];
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(deg / 45) % 8;

    return `${arrows[index]} ${directions[index]} (${deg}°)`;
  };

  return (
    <article className={styles.ForecastItem}>
      <div className="">
        <h4 className={styles.ForecastItemTitle}>{forecast.dayOfWeek}</h4>
        <p className={styles.ForecastItemSecondary}>{forecast.date}</p>
        <Link to={`./${forecast.date}`} className={styles.ForecastItemLink}>
          <img
            src={forecast.weatherIconUrl}
            alt="forecast icons"
            className={styles.ForecastItemIcon}
          />
        </Link>
      </div>
      <div className="">
        <p className={cn(styles.ForecastItemTitle, 'smallText')}>
          {getWindDirectionFull(forecast.windDeg)}
        </p>
        <p className={cn(styles.ForecastItemTitle, 'smallText')}>
          {forecast.windSpeedMs}
        </p>
        <div className={styles.ForecastItemInfo}>
          <div className={styles.ForecastItemInfoLeft}>
            <div className="">
              <p className={cn(styles.ForecastItemTitle, 'uppercase')}>min</p>
              <p className={cn(styles.ForecastItemSecondary, 'smallText')}>
                {temperatureFormat(forecast.tempMinC)}
              </p>
            </div>
          </div>
          <div className={styles.ForecastItemInfoRight}>
            <div className="">
              <p className={cn(styles.ForecastItemTitle, 'uppercase')}>max</p>
              <p className={cn(styles.ForecastItemSecondary, 'smallText')}>
                {temperatureFormat(forecast.tempMaxC)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
