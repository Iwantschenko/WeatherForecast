import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RouterURlParts } from '@constants/RouterURLParts';
import { PerWeekPage } from './modules/PerWeekPage';
import { DetailsWeatherForecastPage } from './modules/TodayPage';
import { NotFoundPage } from './modules/NotFoundPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path={RouterURlParts.Root} element={<App />}>
        <Route index element={<PerWeekPage />} />
        <Route path=":date" element={<DetailsWeatherForecastPage />} />
        <Route
          path={RouterURlParts.Home}
          element={<Navigate to={RouterURlParts.Root} replace={true} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
