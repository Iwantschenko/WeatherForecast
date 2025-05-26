import { Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};
