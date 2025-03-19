import { useState } from "react";
import toast from "react-hot-toast";
import { useAxios } from "../../hooks/useAxios";
import { Modal } from "../../utils/Model";

export const RoleModel = ({ isOpen, setIsOpen, user, refetch }) => {
  const axios = useAxios();
  console.log(user);
  const [isRole, setIsRole] = useState(user?.role);

  //  Update User Role Functions
  const handleRoleChange = async () => {
    try {
      await axios.patch(`/update-user/${user?._id}`, { role: isRole });
      setIsOpen(false);
      toast.success("User role updated successfully!");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h3 className="text-xl font-semibold font-ubuntu mb-3 text-gray-600">
            Change The User Role
          </h3>
          <p className="font-normal text-gray-500">
            Changing user's role changes their API token access
          </p>
          <div>
            <div className="flex items-center gap-4 mt-5">
              <div>
                <img
                  src={user?.photo}
                  alt="User Avatar"
                  className="w-18 h-16 rounded-full"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h4 className="text-xl font-semibold font-ubuntu">
                  {user?.name}
                </h4>
                <select
                  className="border border-[#ddd] rounded-md p-2"
                  defaultValue={user?.role}
                  onChange={(e) => setIsRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="agent">Agent</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center mt-9">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#E8EAEE] py-2 px-5 text-black font-medium rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleRoleChange}
                type="submit"
                className="bg-[#E21B60] py-2 px-5 text-white font-medium rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
