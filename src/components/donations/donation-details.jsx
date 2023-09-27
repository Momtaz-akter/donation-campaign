import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const DonationDetails = () => {
  const [donation, setDonation] = useState();
  const { id } = useParams();

  const donations = useLoaderData();

  useEffect(() => {
    const idNumber = parseInt(id);

    const findDonation = donations?.find(
      (donation) => donation.id === idNumber
    );

    setDonation(findDonation);
  }, [id, donations]);

  if (!donation) {
    return <div>Loading...</div>;
  }

  const handleDonations = () => {
    const donationToAdd = donation;
    const addedDonations = JSON.parse(localStorage.getItem('donations')) || [];

    const isExist = addedDonations.find(
      (donation) => donation.id === donationToAdd.id
    );

    if (!isExist) {
      addedDonations.push(donationToAdd);
      localStorage.setItem('donations', JSON.stringify(addedDonations));
      Swal.fire('Donation added');
    } else {
      Swal.fire('Already added');
    }
  };

  return (
    <div className="max-w-[400px] md:max-w-[800px]  relative mx-auto my-5">
      <div style={{ position: 'relative' }}>
        <img className="w-full h-[60vh]" src={donation.img} alt="" />
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: '85%',
            left: 0,
            width: '100%',
            height: '15%',
            background: 'rgba(0, 0, 0, 0.5)',
          }}></div>
        <button
          onClick={handleDonations}
          className={`p-2 text-lg font-semibold rounded bg-${donation.category_bg} left-[20%] md:left-[10%]  lg:left-[15%]`}
          style={{
            position: 'absolute',
            top: '93%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            background: donation.category_bg,
            zIndex: 1,
          }}>
          Donate:-{donation.price}$
        </button>
      </div>

      <div>
        <h1 className="py-5 text-2xl font-bold">{donation.title}</h1>
        <p>{donation.description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;
