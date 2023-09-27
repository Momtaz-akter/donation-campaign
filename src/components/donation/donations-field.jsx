import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsField = ({ donation }) => {
  const {
    id,
    img,
    title,
    category_name,
    card_bg,
    text_color,
    category_bg,
    price,
  } = donation;

  const cardStyle = {
    backgroundColor: card_bg,
  };

  const categoryStyle = {
    color: text_color,
    backgroundColor: category_bg,
  };

  return (
    <div
      className={`card card-compact w-100 h-52 bg-${card_bg} shadow-xl mx-auto grid grid-cols-2 gap-4 items-center `}
      style={cardStyle}
    >
      <figure>
        <img className="w-full h-52 object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="p-4">
        <div>
          <p className="text-sm text-gray-600" style={categoryStyle}>
            {category_name}
          </p>
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-primary">{price}$</h3>
          <Link to={`/donations/${id}`}>
            <button
              className="px-4 py-2 text-white bg-primary rounded"
              style={categoryStyle}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

DonationsField.propTypes = {
  donation: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category_name: PropTypes.string.isRequired,
    card_bg: PropTypes.string.isRequired,
    text_color: PropTypes.string.isRequired,
    category_bg: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default DonationsField;
