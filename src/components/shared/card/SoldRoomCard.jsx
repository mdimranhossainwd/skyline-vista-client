import React from "react";

export const SoldRoomCard = ({ property }) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div
          className="bg-[#444] text-white grid 
               grid-cols-8
                  px-4 py-3 text-center font-bold"
        >
          <div>No</div>

          <div>Host</div>
          <div>Location</div>

          <div>Title</div>
          <div>Price</div>
          <div>Brought Price</div>
          <div>Status</div>
          <div>Brought Date</div>
        </div>
        {/* Table Body */}
        {property?.map((property, index) => (
          <div
            key={property._id}
            className="grid grid-cols-8
             items-center text-center border-b-[1px] border-[#DDD] hover:bg-white px-4 py-2"
          >
            <div>{index + 1}.</div>

            <div>{property?.offer?.host?.name}</div>
            <div>{property?.offer?.location?.country}</div>

            <div>
              {property?.offer?.title.length > 20
                ? `${property?.offer?.title.slice(0, 10)}...`
                : property?.offer?.title}
            </div>
            <div>${property?.offer?.pricing?.price_per_night} / night</div>
            <div>${property?.amount}</div>
            <div>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  property.offer_status === "Requested"
                    ? "bg-blue-100 text-blue-600"
                    : property.offer_status === "Brought"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {property.offer_status}
              </span>
            </div>
            {/* <div>{property?.offer_date}</div> */}
            {new Date(property?.offer_date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "numeric",
              year: "numeric",
            })}

            <div className="flex justify-center items-center">
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
