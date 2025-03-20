import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAxios } from "../../hooks/useAxios";
import { Modal } from "../../utils/Model";

export const UserInfoModel = ({ isOpen, setIsOpen, user, refetch }) => {
  const axios = useAxios();
  const { register, handleSubmit } = useForm();
  const { _id, name, email, photo } = user || {};

  //   Update User Info Functions
  const handleUpdateUserInfo = async (id) => {
    try {
      await axios.put(`/update-user-info/${_id}`, id);
      refetch();
      toast.success("Updated User Info Successfully");
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(handleUpdateUserInfo)}>
        <h2 className="text-2xl font-semibold text-gray-900">
          Sign in or create an account
        </h2>
        <p className="mt-2 text-gray-600">
          Welcome back! Please enter your details.
        </p>

        {/* Form */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9]"
            defaultValue={name}
            style={{
              borderColor: "#E9E9E9",
            }}
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="mt-1 block w-full px-4 py-2 border  focus:ring focus:ring-[#E9E9E9] cursor-not-allowed"
            style={{
              borderColor: "#E9E9E9",
            }}
            defaultValue={email}
            disabled
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="photo"
            id="photo"
            {...register("photo", { required: true })}
            className="mt-1 block w-full px-4 py-2 border focus:ring-[#E9E9E9]"
            style={{
              borderColor: "#E9E9E9",
            }}
            defaultValue={photo}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-6 px-4 py-2 text-white bg-gray-800  hover:bg-gray-700"
        >
          Continue
        </button>
      </form>
    </Modal>
  );
};
