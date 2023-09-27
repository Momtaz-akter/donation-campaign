import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

const RootLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
