import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import Error from '../components/error';
import Home from '../components/home';
import Donation from '../components/donation/donation';
import DonationDetails from '../components/donations/donation-details';

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
        element: <Donation></Donation>,
        errorElement: <Error />,
      },
      {
        path: '/donations/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/statistics',
      },
    ],
  },
]);
