import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { Heading } from "../shared/heading/Heading";

export const ReviewForm = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <Heading heading="Give Your Opinion Share" />
        <img
          src="https://i.ibb.co.com/dwPNbRLL/Green-Modern-Villa-For-Rent-Flyer-65b75d68e48932-56271882.png"
          alt=""
          className="w-64 h-52 mx-auto"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto p-4 mt-10 bg-white border border-[#ddd]"
      >
        <div className="grid grid-cols-2 gap-4">
          <label className="block mb-2">
            Name:
            <input
              {...register("name", { required: true })}
              className="w-full p-2 border border-[#ddd] rounded"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </label>

          <label className="block mb-2">
            Rating (1-5):
            <input
              type="number"
              {...register("rating", { required: true, min: 1, max: 5 })}
              className="w-full p-2 border border-[#ddd] rounded"
            />
            {errors.rating && (
              <span className="text-red-500">
                Rating must be between 1 and 5
              </span>
            )}
          </label>
        </div>
        <label className=" mb-2 flex justify-between items-center">
          <span className="mr-2">Verified:</span>
          <div className="relative w-12 h-6 bg-gray-300 rounded-full transition-all">
            <input
              type="checkbox"
              {...register("is_verified")}
              className="sr-only peer"
            />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-6 peer-checked:bg-pink-300"></div>
          </div>
        </label>
        <label className="block mb-2">
          Profile Image URL:
          <input
            {...register("profile_image", { required: true })}
            className="w-full p-2 border disabled cursor-not-allowed border-[#ddd] rounded"
            defaultValue={user?.photoURL}
          />
          {errors.profile_image && (
            <span className="text-red-500">Profile image is required</span>
          )}
        </label>

        <label className="block mb-2">
          Comment:
          <textarea
            {...register("comment", { required: true })}
            className="w-full p-2 border border-[#ddd] rounded"
          ></textarea>
          {errors.comment && (
            <span className="text-red-500">Comment is required</span>
          )}
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-red-400 text-white py-2 rounded-lg mt-6 hover:cursor-pointer text-lg font-semibold"
        >
          Submit Review
        </button>
      </form>
    </>
  );
};
