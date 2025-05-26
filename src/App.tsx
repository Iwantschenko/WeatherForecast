import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/_shared/Header';
export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
