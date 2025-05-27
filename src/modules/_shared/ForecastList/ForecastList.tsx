import type { DailyWeatherForecastShort } from '@models/DailyForecastShort';
import { ForecastItem } from '../ForecastItem';
import styles from './ForecastList.module.scss';

interface Props {
  dailyForecastData: DailyWeatherForecastShort[];
}

export const ForecastList: React.FC<Props> = ({ dailyForecastData }) => {
  return (
    <section className={styles.ForecastListContainer}>
      {dailyForecastData.map(item => (
        <ForecastItem key={item.dayOfWeek} forecast={item} />
      ))}
    </section>
  );
};
