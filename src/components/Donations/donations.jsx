import PropTypes from 'prop-types';
import DonationsCard from './donations-card';

const Donations = ({ donations }) => {
  return (
    <div className="py-5 mx-auto">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {donations?.map((donation) => (
          <DonationsCard key={donation.id} donation={donation} />
        ))}
      </div>
    </div>
  );
};

Donations.propTypes = {
  donations: PropTypes.array,
};

export default Donations;
