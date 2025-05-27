import { useEffect, useState } from 'react';
import { ForecastList } from '../_shared/ForecastList/ForecastList';
import style from './PerWeekPage.module.scss';
import type { Forecast } from '@models/Forecast';
import { buildForecastFromApiJson } from '@utils/BuildForecastShortFromApi';

export const PerWeekPage = () => {
  const [list, setList] = useState<Forecast>();

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=f111976d52ed2b2a14ffd07259300462',
    )
      .then(res => res.json())
      .then(data => {
        const converted = buildForecastFromApiJson(data);

        setList(converted);
      });
  }, []);

  return (
    <div className={style.container}>
      <ForecastList dailyForecastData={list?.weatherForecast ?? []} />
    </div>
  );
};
