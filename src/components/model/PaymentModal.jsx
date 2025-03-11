import { differenceInCalendarDays } from "date-fns";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../utils/Model";

export const PaymentModal = ({ isOpen, setIsOpen, viewRoomInfo }) => {
  const { user } = useAuth();
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
  } = viewRoomInfo || {};

  const totalPrice = parseInt(
    differenceInCalendarDays(
      new Date(availability?.available_dates[2]),
      new Date(availability?.available_dates[0])
    ) *
      amount +
      (pricing?.cleaning_fee + pricing?.service_fee)
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Review Info Booking Room"
      >
        <div className="my-4 pb-5 text-gray-500 border-[#DDDDDD] border-b-[1px]">
          <span>{title}</span> <br />
          <span>location: {location?.country}</span> <br />
          <span>Guest: {user?.displayName}</span> <br />
          <span>Price: ${totalPrice}</span>
        </div>
      </Modal>
    </>
  );
};
