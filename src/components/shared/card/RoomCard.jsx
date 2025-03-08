import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const RoomCard = ({ item }) => {
  const {
    host,
    location,
    room_details,
    pricing,
    availability,
    _id,
    title,
    description,
    amenities,
    images,
    amount,
    safety_features,
    room_status,
    status,
    created_at,
    updated_at,
  } = item || {};

  return (
    <Link to={`/view-room-details/${_id}`}>
      <div className="overflow-hidden">
        {/* Image Slider */}
        <div className="">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="w-full h-54 rounded-xl"
          >
            {images?.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="w-full h-56 rounded-xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-3 mb-4">
          <h3 className="text-[15px] font-medium">{title?.slice(0, 10)}</h3>
          <div>
            <span className="text-sm font-normal text-[#6a6a6a]">
              Hosted by- {host?.name}
            </span>
          </div>
          <p>
            <span className="font-semibold">${amount}</span> night
          </p>
        </div>

        <style>
          {`
          .swiper-pagination-bullet {
            background-color: white !important; /* Set bullet dots to white */
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background-color: white !important; /* Active bullet dot is also white */
            opacity: 1;
          }
        `}
        </style>
      </div>
    </Link>
  );
};
