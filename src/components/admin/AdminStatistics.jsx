import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../hooks/useAxios";

export const AdminStatistics = () => {
  const axios = useAxios();

  // Load statistics data from the server
  const getData = async () => {
    const { data } = await axios.get("/get-statics");
    return data;
  };

  //   Fetch Data using to TanSt Query
  const { data: getStaticsData, refetch } = useQuery({
    queryKey: ["getStaticsData"],
    queryFn: getData,
  });
  console.log(getStaticsData);

  return (
    <div>
      <div className="mt-8">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Sales Card */}
          <div className="relative flex flex-col bg-clip-border rounded-lg border border-[#ddd] bg-white text-gray-700">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40`}
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
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-bold text-blue-gray-600">
                Total Sales
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                ${getStaticsData?.totalSales}
              </h4>
            </div>
          </div>
          {/* Users Card */}
          <div className="relative flex flex-col bg-clip-border rounded-lg border border-[#ddd] bg-white text-gray-700">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}
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
                class="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-bold text-blue-gray-600">
                Total User
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                {getStaticsData?.totalUsers}
              </h4>
            </div>
          </div>
          {/* Total Bookings */}
          <div className="relative flex flex-col bg-clip-border rounded-lg border border-[#ddd] bg-white text-gray-700">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}
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
                class="lucide lucide-chef-hat"
              >
                <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
                <path d="M6 17h12" />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-bold text-blue-gray-600">
                Total Bookings
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                {getStaticsData?.totalBookings}
              </h4>
            </div>
          </div>
          {/* Total Rooms */}
          <div className="relative flex flex-col bg-clip-border rounded-lg border border-[#ddd] bg-white text-gray-700">
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}
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
                class="lucide lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-lg leading-normal font-bold text-blue-gray-600">
                Total Rooms
              </p>
              <h4 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900">
                {getStaticsData?.totalRooms}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
