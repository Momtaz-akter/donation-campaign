import { useLoaderData } from 'react-router-dom';
import Donations from './Donations/donations';
import Banner from './header/banner';

const Home = () => {
  const donations = useLoaderData();

  return (
    <div>
      <Banner />
      <Donations donations={donations} />
    </div>
  );
};

export default Home;
