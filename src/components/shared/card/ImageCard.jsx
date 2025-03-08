export const ImageCard = ({ images }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 relative">
        <div className="col-span-2 row-span-2 h-72 md:h-[330px] relative group">
          <img
            src={images[0]}
            alt="Main"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>

        {images.slice(1, 5).map((img, index) => (
          <div key={index} className="h-36 md:h-40 relative group">
            <img
              src={img}
              alt={`Gallery-${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
