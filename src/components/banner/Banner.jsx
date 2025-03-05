const Banner = () => {
  return (
    <div
      className="relative w-full h-[500px] mb-10 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/13608798/pexels-photo-13608798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
      <div className="relative z-10 text-center px-6 -mt-28">
        <h1 className="text-white font-ubuntu text-[40px] leading-[44px] font-medium">
          Hotels grounded in luxury, <br /> craft, and sustainability
        </h1>
        <p className="text-white text-md mt-4 max-w-lg mx-auto">
          Enhance your travel experience, whether you're looking for a creative
          escape or an adventure in nature.
        </p>
      </div>
    </div>
  );
};

export default Banner;
