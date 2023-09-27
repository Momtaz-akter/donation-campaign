import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
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
