import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
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
