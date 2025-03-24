import { Modal } from "../../utils/Model";

export const OfferPaymentModel = ({ isOpen, setIsOpen, property }) => {
  const {
    _id,
    offer,
    offer_status,
    offer_amount,
    offer_date,
    email,
    name,
    __v,
  } = property || {};

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Brought This Property">
      <div className="my-4 pb-5 text-gray-500 border-[#DDDDDD] border-b-[1px]">
        <span className="text-lg">{offer?.title}</span> <br />
        <span>Your Email: {email}</span> <br />
        <span>Host Name: {offer?.host?.name}</span> <br />
        <span>Offer Amount: $ {offer_amount}</span> <br />
        <span>
          Offer Status:{" "}
          <span
            className={`px-2 py-1 rounded text-xs ${
              property.offer_status === "Requested"
                ? "bg-blue-100 text-blue-600 rounded-full"
                : property.offer_status === "Brought"
                ? "bg-green-100 text-green-600 rounded-full"
                : "bg-red-100 text-red-600 rounded-full"
            }`}
          >
            {offer_status}
          </span>
        </span>
      </div>

      {/* <Elements stripe={stripePromise}>
        <CheckoutForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          viewRoomInfo={viewRoomInfo}
          totalPrice={totalPrice}
        />
      </Elements> */}
    </Modal>
  );
};
