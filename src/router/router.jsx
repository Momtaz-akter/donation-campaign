import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import Error from '../components/error';
import Home from '../components/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/donation',
      },
      {
        path: '/statistics',
      },
      {
        path: '/donations/:id',
      },
    ],
  },
]);
