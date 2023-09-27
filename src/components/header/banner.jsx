import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  const overlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  };

  return (
    <div
      className="flex relative flex-col justify-center items-center text-center"
      style={bannerStyle}>
      <div
        className="flex relative flex-col justify-center items-center text-center"
        style={overlayStyle}>
        <h2 className="py-5 text-4xl font-bold">
          I Grow By Helping People In Need
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="w-full max-w-xs input input-bordered input-md"
          />
          <button className="px-4 py-1 text-lg font-semibold text-white bg-red-500 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
