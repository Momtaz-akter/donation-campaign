import bannerImg from "../../Resources/banner.jpg";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  const overlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  };

  return (
    <div
      className="flex flex-col justify-center items-center text-center relative"
      style={bannerStyle}
    >
      <div
        className="flex flex-col justify-center items-center text-center relative"
        style={overlayStyle}
      >
        <h2 className="text-4xl font-bold py-5 ">
          I Grow By Helping People In Need
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-md w-full max-w-xs"
          />
          <button className="bg-red-500 px-4 py-1 text-white text-lg font-semibold rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
