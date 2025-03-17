import { useRole } from "../../../hooks/useRole";

export const PropertyTableCard = ({ properties }) => {
  const [role] = useRole();
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
        {properties?.map((property, index) => (
          <div
            key={property._id}
            className="grid grid-cols-6 items-center text-center border-b-[1px] border-[#DDD] hover:bg-gray-100 px-4 py-2"
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
            <div className="flex gap-2 justify-center items-center">
              {role === "agent" && (
                <div className="p-2.5 rounded-md hover:bg-[#DDD] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pencil"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </div>
              )}

              <div className="p-2.5 rounded-md hover:bg-[#DDD] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-trash-2"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                  <line x1="10" x2="10" y1="11" y2="17" />
                  <line x1="14" x2="14" y1="11" y2="17" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
