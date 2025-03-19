import { Modal } from "../../utils/Model";

export const RoleModel = ({ isOpen, setIsOpen, user }) => {
  console.log(user);

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
            <div className="flex items-center justify-between mt-5">
              <div>
                <img
                  src={user?.photo}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <span className="text-gray-600 font-semibold">User Role</span>
              <select
                className="border border-gray-300 rounded-md p-2"
                defaultValue={user?.role}
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
