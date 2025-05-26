// eslint-disable-next-line import/no-extraneous-dependencies
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { RouterURlParts } from '@constants/RouterURLParts';
import { PerWeekPage } from './modules/PerWeekPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path={RouterURlParts.Root} element={<App />}>
        <Route index element={<PerWeekPage />} />
      </Route>
    </Routes>
  </HashRouter>
);
