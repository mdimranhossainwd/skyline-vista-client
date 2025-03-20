export const ProfileCard = ({ user, refetch }) => {
  const { _id, name, email, role, photo, createdAt, updatedAt, __v } =
    user?.user || {};

  return (
    <>
      <div className=" mx-auto bg-white rounded-xl border-b-[1px] border-[#ddd] overflow-hidden">
        {/* Cover Image */}
        <div className="relative">
          <img
            className="h-52 w-full object-cover"
            src="https://images.pexels.com/photos/13620071/pexels-photo-13620071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cover"
          />
          <button className="absolute flex items-center gap-1 top-3 right-3 px-4 py-1 text-sm bg-white rounded-full shadow font-medium text-gray-600 hover:bg-gray-100">
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
              class="lucide lucide-pencil"
            >
              <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
              <path d="m15 5 4 4" />
            </svg>
            <span>Edit</span>
          </button>
        </div>

        {/* Profile Info */}

        <div key={user?._id} className="flex flex-col items-center p-5">
          <img
            className="w-32 h-32 object-cover rounded-full border-4 relative border-[#ddd] -mt-12 shadow-md"
            src={photo}
            alt="profile"
          />
          <h2 className="text-xl font-medium mt-3">{name}</h2>
          <p className="text-gray-500 text-md">Leasing {role}</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-5 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-at-sign"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-slack"
              >
                <rect width="3" height="8" x="13" y="2" rx="1.5" />
                <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
                <rect width="3" height="8" x="8" y="14" rx="1.5" />
                <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
                <rect width="8" height="3" x="14" y="13" rx="1.5" />
                <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
                <rect width="8" height="3" x="2" y="8" rx="1.5" />
                <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
