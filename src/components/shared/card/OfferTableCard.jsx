import toast from "react-hot-toast";
import { useAxios } from "../../../hooks/useAxios";
import { useRole } from "../../../hooks/useRole";

export const OfferTableCard = ({ properties, refetch }) => {
  const axios = useAxios();
  const [role] = useRole();
  console.log("role==========>", role);

  //   Update Offer Room status
  const handleRejectRoom = async (id, currentStatus) => {
    try {
      await axios.patch(`/update-offer-status/${id}`, {
        offer_status: currentStatus,
      });
      toast.success("Update Status successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div
          className={`bg-[#444] text-white grid 
           ${role === "agent" ? "grid-cols-8" : "grid-cols-9"}
           px-4 py-3 text-center font-bold`}
        >
          <div>No</div>
          {role === "user" && (
            <>
              <div>Agent</div>
              <div>Location</div>
            </>
          )}
          {role === "agent" && <div>Guest</div>}
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
                <button className="p-2.5 rounded-md hover:bg-[#DDD] cursor-pointer">
                  check
                </button>
              )}
              <div>
                <button
                  onClick={() => handleRejectRoom(property?._id, "Rejected")}
                  disabled={property.offer_status === "Rejected"}
                  className="p-2.5 rounded-md hover:bg-[#DDD] disabled:cursor-not-allowed cursor-pointer"
                >
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
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
