import type { DailyWeatherForecastShort } from '@models/DailyForecastShort';
import type { Forecast } from '@models/Forecast';

const kelvinToCelsius = (k: number) => +(k - 273.15).toFixed(2);

export const buildForecastFromApiJson = (apiData: any): Forecast => {
  const dailyData: DailyWeatherForecastShort[] = apiData.daily.map(
    (day: any) => {
      const dateObj = new Date(day.dt * 1000);

      return {
        date: dateObj.toISOString().split('T')[0],
        dayOfWeek: dateObj.toLocaleDateString('en-US', { weekday: 'long' }),
        weatherIconUrl: `https://openweathermap.org/img/wn/${day.weather?.[0]?.icon ?? '01d'}@2x.png`,
        windSpeedMs: day.wind_speed ?? 0,
        windDeg: day.wind_deg ?? 0,
        tempMaxC: kelvinToCelsius(day.temp.max),
        tempMinC: kelvinToCelsius(day.temp.min),
      };
    },
  );

  return {
    lat: apiData.lat,
    lon: apiData.lon,
    timezone: apiData.timezone,
    timezone_offset: apiData.timezone_offset,
    weatherForecast: dailyData.slice(0, 7),
  };
};
