import { useForm } from "react-hook-form";

export const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <label className="block mb-2">
        Name:
        <input
          {...register("name", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </label>

      <label className="block mb-2">
        Profile Image URL:
        <input
          {...register("profile_image", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.profile_image && (
          <span className="text-red-500">Profile image is required</span>
        )}
      </label>

      <label className="block mb-2">
        Verified:
        <input type="checkbox" {...register("is_verified")} className="ml-2" />
      </label>

      <label className="block mb-2">
        Rating (1-5):
        <input
          type="number"
          {...register("rating", { required: true, min: 1, max: 5 })}
          className="w-full p-2 border rounded"
        />
        {errors.rating && (
          <span className="text-red-500">Rating must be between 1 and 5</span>
        )}
      </label>

      <label className="block mb-2">
        Comment:
        <textarea
          {...register("comment", { required: true })}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.comment && (
          <span className="text-red-500">Comment is required</span>
        )}
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  );
};
