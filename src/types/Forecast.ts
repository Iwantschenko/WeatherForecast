import type { DailyWeatherForecastShort } from './DailyForecastShort';

export interface Forecast {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  weatherForecast: DailyWeatherForecastShort[];
}
