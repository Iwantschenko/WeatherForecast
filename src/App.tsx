import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/_shared/Header';
import { useEffect } from 'react';
import { useThemes } from '@hooks/useTheme';
export const App = () => {
  const { activeTheme } = useThemes();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', `${activeTheme}`);
  }, [activeTheme]);

  return (
    <div className="App">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
