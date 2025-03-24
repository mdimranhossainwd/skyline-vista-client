import { useState } from "react";
import toast from "react-hot-toast";
import { useAxios } from "../../../hooks/useAxios";
import { useRole } from "../../../hooks/useRole";
import { OfferPaymentModel } from "../../model/OfferPaymentModel";

export const OfferTableCard = ({ properties, refetch }) => {
  const axios = useAxios();
  const [role] = useRole();
  const [isOpen, setIsOpen] = useState(false);
  console.log("role==========>", role);

  //   Only User/Guest Canceled His Offer Room Data Functions
  const handleDeletedRoom = async (id) => {
    try {
      await axios.delete(`/delete-offer-room/${id}`);
      toast.success("Offer Room Canceled Successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  };

  //   Update Offer Room status Functions
  const handleUpdateStatustRoom = async (id, currentStatus) => {
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
            }  items-center text-center border-b-[1px] border-[#DDD] hover:bg-white px-4 py-2`}
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
              {role === "agent" && (
                <button
                  onClick={() =>
                    handleUpdateStatustRoom(property?._id, "Brought")
                  }
                  disabled={property.offer_status === "Brought"}
                  className="p-2.5 rounded-md hover:bg-[#DDD] disabled:cursor-not-allowed"
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
                    class="lucide lucide-circle-check-big"
                  >
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                </button>
              )}
              <div>
                <button
                  onClick={() => {
                    if (role === "agent") {
                      handleUpdateStatustRoom(property?._id, "Rejected");
                    } else if (role === "user") {
                      handleDeletedRoom(property?._id);
                    }
                  }}
                  disabled={
                    role === "agent" && property.offer_status === "Rejected"
                  }
                  className="p-2.5 rounded-md hover:bg-[#DDD] disabled:cursor-not-allowed"
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
              {role === "user" && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="cursor-pointer"
                >
                  pay
                </button>
              )}
            </div>
            <OfferPaymentModel
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              property={property}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
