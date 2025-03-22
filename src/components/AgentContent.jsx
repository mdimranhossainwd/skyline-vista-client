import { useState } from "react";
import { OfferModal } from "./model/OfferModal";

export const AgentContent = ({ offerInfoData }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className=" mt-6 px-4 py-2 text-white bg-gray-800  hover:bg-gray-700"
      >
        Make An Offer
      </button>
      <OfferModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        offerInfoData={offerInfoData}
      />
    </>
  );
};
