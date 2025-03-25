import { useState } from "react";
import { FaGlobe, FaHome, FaUser } from "react-icons/fa";
import { OfferModal } from "./model/OfferModal";

export const AgentContent = ({ offerInfoData, host }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Meet your host</h2>
        <div className="lg:flex gap-4">
          <div className="">
            <div className="bg-gray-50 p-4 rounded-lg">
              <img
                src={host?.profile_image}
                alt="Host Profile"
                className="w-28 h-28 mx-auto rounded-full mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold flex justify-center items-center">
                  {host?.name}

                  {host?.is_superhost === "true" ? (
                    <FaCheckCircle className="text-blue-500 ml-2" />
                  ) : (
                    ""
                  )}

                  {/* Sara  */}
                </h3>
                <p className="text-gray-600">Superhost</p>
                <p className="text-gray-800 font-semibold">
                  614 Reviews | ⭐ 4.76 Rating
                </p>
                <p className="text-gray-600">12 Years hosting</p>
              </div>
            </div>
            <div className="mt-4 text-md space-y-2">
              <p className="flex items-center text-gray-700">
                <FaUser className="mr-2" /> My work: Environmental Activist
              </p>
              <p className="flex items-center text-gray-700">
                <FaGlobe className="mr-2" /> Speaks English and Indonesian
              </p>
              <p className="flex items-center text-gray-700">
                <FaHome className="mr-2" /> Lives in London, United Kingdom
              </p>
              <p className="text-gray-700">
                I’m happy to spend time with my guests or give them space
              </p>
            </div>
          </div>
          <div>
            <div className="p-4 rounded-lg">
              <h3 className="text-xl font-medium">Sara is a Superhost</h3>
              <p className="text-gray-700 text-md">
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for guests.
              </p>
              <div className="mt-2">
                <p className="text-gray-700">
                  Response rate: {host?.response_rate} %
                </p>
                <p className="text-gray-700">{host?.response_time}</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900">
              Message host
            </button>
            <p className="text-xs border-b-[1px] border-[#ddd] pb-6 text-gray-500 mt-2 text-center">
              ⚠ To help protect your payment, always use Airbnb to send money
              and communicate with hosts.
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className=" mt-6 px-4 py-2 text-white bg-gray-800 rounded-md  hover:bg-gray-700"
            >
              Brought Property Offer
            </button>
          </div>
        </div>
      </div>

      <OfferModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        offerInfoData={offerInfoData}
      />
    </>
  );
};
