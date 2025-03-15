export const PropertyTableCard = ({ properties }) => {
  console.log(properties);

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div className="bg-[#444] text-white grid grid-cols-6 px-4 py-3 text-center font-bold">
          <div>Title</div>
          <div>Location</div>
          <div>Type</div>
          <div>Price</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Table Body */}
        {properties?.map((property) => (
          <div
            key={property._id}
            className="grid grid-cols-6 text-center border-b-[1px] border-[#DDD] hover:bg-gray-100 px-4 py-2"
          >
            <div>
              {property.title.length > 20
                ? `${property.title.slice(0, 20)}...`
                : property.title}
            </div>
            <div>
              {property.location.city}, {property.location.state}
            </div>
            <div>{property.room_details.property_type}</div>
            <div>${property.pricing.price_per_night} / night</div>
            <div>{property.status}</div>
            <div className="flex gap-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
