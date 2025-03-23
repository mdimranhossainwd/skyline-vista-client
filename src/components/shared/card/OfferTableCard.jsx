import { useRole } from "../../../hooks/useRole";

export const OfferTableCard = ({ properties }) => {
  console.log(properties);
  const [role] = useRole();

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div
          className={`bg-[#444] text-white grid 
           ${role === "user" ? "grid-cols-9" : "grid-cols-8"}
           px-4 py-3 text-center font-bold`}
        >
          <div>No</div>
          {role === "user" && (
            <>
              <div>Guest</div>
              <div>Location</div>
            </>
          )}
          {role === "agent" && <div>Agent</div>}
          {/* <div>Location</div> */}
          <div>Title</div>
          <div>Price</div>
          <div>Offer Price</div>
          <div>Status</div>
          <div>Offer Date</div>
          <div>Actions</div>
        </div>
        {/* Table Body */}
        {properties?.map((property, index) => (
          <div
            key={property._id}
            className={`grid ${
              role === "agent" ? "grid-cols-8" : "grid-cols-9"
            }  items-center text-center border-b-[1px] border-[#DDD] hover:bg-gray-100 px-4 py-2`}
          >
            <div>{index + 1}.</div>
            {role === "user" && (
              <>
                <div>{property?.offer?.host?.name}</div>
                <div>{property?.offer?.location?.country}</div>
              </>
            )}
            {role === "agent" && <div>{property?.name}</div>}

            <div>
              {property?.offer?.title.length > 20
                ? `${property?.offer?.title.slice(0, 10)}...`
                : property?.offer?.title}
            </div>
            <div>${property?.offer?.pricing?.price_per_night} / night</div>
            <div>${property?.offer_amount}</div>
            <div>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  property.offer_status === "Requested"
                    ? "bg-blue-100 text-blue-600"
                    : property.status === "Brought"
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
                    class="lucide lucide-circle-check-big"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
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
