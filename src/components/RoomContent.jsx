import React from "react";

export const RoomContent = ({ host }) => {
  return (
    <div>
      <h2 className="text-xl font-medium font-ubuntu">
        Room in Greater {location?.city} , {location?.country}
      </h2>
      <p className="text-gray-600 mb-8">1 double bed · Shared bathroom</p>

      <div className="mt-3 flex justify-between items-center gap-2 border border-[#DDDDDD] py-3 px-6 rounded-lg">
        <img src="https://i.ibb.co.com/ksJnqw32/Screenshot-2.jpg" alt="" />
        <p className="text-md font-semibold mx-auto text-gray-600">
          One of the most loved homes on <br /> Airbnb, according to guests
        </p>
        <span className="ml-auto font-medium text-xl mr-10">4.86 </span>
        <div>
          <h4 className="text-xl font-medium underline cursor-pointer">
            192 <br />
          </h4>
          <span>Reviews</span>
        </div>
      </div>

      {/* Host Information */}
      <div className="flex items-center gap-3 mt-5 py-4 border-b-[1px] border-[#DDDDDD]">
        <img
          src={host?.profile_image}
          alt="Host"
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <p className="font-semibold">{host?.name}</p>
          <p className="text-sm text-gray-500">
            {host?.is_superhost ? "Superhost" : "Host"} · 12 years hosting
          </p>
        </div>
      </div>
    </div>
  );
};
