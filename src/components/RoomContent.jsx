import React from "react";

export const RoomContent = ({ host }) => {
  return (
    <div>
      <h2 className="text-xl font-medium font-ubuntu">
        Room in Greater {location?.city} , {location?.country}
      </h2>
      <p className="text-gray-600 mb-8">1 double bed · Shared bathroom</p>

      <div className="mt-3 flex justify-between items-center gap-2 border border-[#DDDDDD] py-3 px-6 rounded-lg">
        <img src="https://i.ibb.co.com/ksJnqw32/Screenshot-2.jpg" alt="" />
        <p className="text-md font-semibold mx-auto text-gray-600">
          One of the most loved homes on <br /> Airbnb, according to guests
        </p>
        <span className="ml-auto font-medium text-xl mr-10">4.86 </span>
        <div>
          <h4 className="text-xl font-medium underline cursor-pointer">
            192 <br />
          </h4>
          <span>Reviews</span>
        </div>
      </div>

      {/* Host Information */}
      <div className="flex items-center gap-3 mt-5 py-4 border-b-[1px] border-[#DDDDDD]">
        <img
          src={host?.profile_image}
          alt="Host"
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <p className="font-semibold">{host?.name}</p>
          <p className="text-sm text-gray-500">
            {host?.is_superhost ? "Superhost" : "Host"} · 12 years hosting
          </p>
        </div>
      </div>

      <div className="space-y-5 py-8 border-b-[1px] border-[#DDDDDD]">
        <div className="flex gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bed-single"
          >
            <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
            <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
            <path d="M3 18h18" />
          </svg>
          <div>
            <h3 className="text-md font-medium">Room in a condo</h3>
            <p className="text-[#6A6A6A]">
              Your own room in a home, plus access to shared spaces.
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div>
            <h3 className="text-md font-medium">Peace and quiet</h3>
            <p className="text-[#6A6A6A]">
              Guests say this home is in a quiet area.
            </p>
          </div>
        </div>
        <div className="flex gap-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map"
          >
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
            <path d="M15 5.764v15" />
            <path d="M9 3.236v15" />
          </svg>
          <div>
            <h3 className="text-md font-medium">City view</h3>
            <p className="text-[#6A6A6A]">Soak up the view during your stay.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
