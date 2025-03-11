import { differenceInCalendarDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useLoaderData } from "react-router-dom";
import { PaymentModal } from "../components/model/PaymentModal";
import { RoomContent } from "../components/RoomContent";
import { ImageCard } from "../components/shared/card/ImageCard";

export const RoomDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const viewRoomInfo = useLoaderData();
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
  } = viewRoomInfo?.data || {};

  // total days * per night amount

  const totalPrice = parseInt(
    differenceInCalendarDays(
      new Date(availability?.available_dates[2]),
      new Date(availability?.available_dates[0])
    ) * amount
  );

  console.log(totalPrice);

  const [state, setState] = useState([
    {
      startDate: new Date(availability?.available_dates[0]),
      endDate: new Date(availability?.available_dates[2]),
      key: "selection",
    },
  ]);

  return (
    <div className="container mx-auto px-6 lg:px-0">
      <div className="flex items-center justify-between py-5">
        <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            <span className="font-medium underline">Share</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="font-medium underline">Save</span>
          </div>
        </div>
      </div>

      <ImageCard images={images} />

      <div className="my-6 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <RoomContent host={host} amenities={amenities} location={location} />
          <div className="py-8 border my-8 border-[#DDDDDD]">
            <DateRangePicker
              showDateDisplay={false}
              rangeColors={["#F6536D"]}
              onChange={(item) => {
                console.log(item);
                setState([
                  {
                    startDate: new Date(availability?.available_dates[0]),
                    endDate: new Date(availability?.available_dates[2]),
                    key: "selection",
                  },
                ]);
              }}
              moveRangeOnFirstSelection={false}
              direction="horizontal"
              ranges={state}
              staticRanges={[]}
              className="w-full md:w-auto -ml-4"
              inputRanges={[]}
            />
          </div>
        </div>

        {/* Right Section - Booking Card (col-span-4) */}
        <div className="col-span-12 w-full lg:col-span-4 h-auto md:h-[360px] mx-auto md:mx-0 bg-white rounded-lg shadow-lg px-6 py-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">${totalPrice}</p>
              <span className="text-gray-600">/ night</span>
            </div>

            <div className="mt-4 border border-[#DDDDDD] p-4 rounded-lg">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-600">CHECK-IN</p>
                  <p className="font-medium">
                    {availability?.available_dates[0]}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">CHECKOUT</p>
                  <p className="font-medium">
                    {availability?.available_dates[2]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-lg mt-6 hover:cursor-pointer text-lg font-semibold"
          >
            Reserve
          </button>
          <PaymentModal
            viewRoomInfo={viewRoomInfo?.data}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <div className="my-8 border-b-[1px] pb-6 border-[#DDDDDD]">
            <div className="flex items-center justify-between text-lg font-normal">
              <p className="underline">Cleaning Fee </p>
              <span>$ {pricing?.cleaning_fee}</span>
            </div>
            <div className="flex items-center justify-between text-lg font-normal">
              <p className="underline">Skyline Service Fee </p>
              <span>$ {pricing?.service_fee}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
