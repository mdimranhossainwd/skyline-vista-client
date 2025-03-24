import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import { RoleModel } from "../../model/RoleModel";

export const UserCard = ({ user, refetch }) => {
  const axios = useAxios();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setIsCurrentUser] = useState(null);

  // Deleted USER Only Admin
  const handdleDeleteUser = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/delete-user/${id}`);
      refetch();
      toast.success("Deleted User Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  //   Update User Role
  const handleCurrentUserRole = async (id) => {
    const findByCurrentUser = await user.find((item) => item?._id === id);
    setIsCurrentUser(findByCurrentUser);
    setIsOpen(true);
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full min-w-[1000px] border-collapse text-left">
        {/* Table Header */}
        <div className="bg-[#444] text-white grid grid-cols-6 px-4 py-3 text-center font-bold">
          <div>Serial</div>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Joined</div>
          <div>Actions</div>
        </div>

        {/* Table Body */}
        {user?.map((user, index) => (
          <div
            key={user._id}
            className="grid items-center grid-cols-6 text-center border-b-[1px] border-[#DDD] hover:bg-white px-4 py-2"
          >
            <div>{index + 1}</div>
            <div>{user.name}</div>
            <div>{user?.email}</div>
            <div>{user?.role}</div>
            <div>
              {new Date(user?.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })}
            </div>

            <div className="flex justify-center items-center text-gray-600">
              <button
                onClick={() => handleCurrentUserRole(user?._id)}
                className="p-2.5 rounded-md hover:bg-[#DDD] cursor-pointer"
              >
                <NavLink>
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
                    class="lucide lucide-pencil"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </NavLink>
              </button>
              <button
                onClick={() => handdleDeleteUser(user?._id)}
                className="p-2.5 rounded-md hover:bg-[#DDD] cursor-pointer"
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
                  class="lucide lucide-trash"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <RoleModel
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={currentUser}
          refetch={refetch}
        />
      </div>
    </div>
  );
};
