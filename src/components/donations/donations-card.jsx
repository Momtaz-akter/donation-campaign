import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {
  const { id, img, title, category_name, card_bg, text_color, category_bg } =
    donation;

  return (
    <Link to={`/donations/${id}`}>
      <div
        className={`mx-auto h-72 shadow-xl card card-compact w-100 bg-[${card_bg}]`}>
        <figure>
          <img className={`w-full`} src={img} alt="Shoes" />
        </figure>
        <div className={`card-body`} style={{ backgroundColor: card_bg }}>
          <p
            className="p-1 mr-44 font-medium text-center rounded lg:mr-36"
            style={{
              color: text_color,
              backgroundColor: category_bg,
            }}>
            {category_name}
          </p>
          <h2 className="text-lg font-medium" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

DonationsCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationsCard;
