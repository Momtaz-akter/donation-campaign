import { useEffect, useState } from 'react';
import DonationsField from './donations-field';

const Donation = () => {
  const [donations, setDonations] = useState([]);

  const [showMore, setShowMore] = useState(false);

  console.log(showMore);

  useEffect(() => {
    const addedDonations = JSON.parse(localStorage.getItem('donations')) || [];

    setDonations(addedDonations);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 mx-auto my-10 md:grid-cols-2">
        {showMore
          ? donations?.map((donation, index) => (
              <div key={index}>
                <DonationsField donation={donation} />
              </div>
            ))
          : donations?.slice(0, 4).map((donation, index) => (
              <div key={index}>
                <DonationsField donation={donation} />
              </div>
            ))}
      </div>
      <div className="text-center">
        {donations.length > 4 && (
          <button onClick={() => setShowMore(!showMore)} className="mb-5">
            {showMore ? 'see less' : 'see more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
