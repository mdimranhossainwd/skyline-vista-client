import { useForm } from "react-hook-form";

export const AddPropertyForm = () => {
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
      className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-xl font-bold mb-4">Create a Listing</h2>

      {/* Title & Description */}
      <label className="block mb-2">
        Title:
        <input
          {...register("title", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.title && (
          <span className="text-red-500">Title is required</span>
        )}
      </label>

      <label className="block mb-2">
        Description:
        <textarea
          {...register("description", { required: true })}
          className="w-full p-2 border rounded"
        ></textarea>
        {errors.description && (
          <span className="text-red-500">Description is required</span>
        )}
      </label>

      {/* Host Details */}
      <label className="block mb-2">
        Host Name:
        <input
          {...register("host.name")}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Profile Image URL:
        <input
          {...register("host.profile_image")}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Is Superhost:
        <input
          type="checkbox"
          {...register("host.is_superhost")}
          className="ml-2"
        />
      </label>

      <label className="block mb-2">
        Response Time:
        <input
          {...register("host.response_time")}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Response Rate (%):
        <input
          type="number"
          {...register("host.response_rate")}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Total Listings:
        <input
          type="number"
          {...register("host.total_listings")}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Location */}
      <label className="block mb-2">
        Address:
        <input
          {...register("location.address", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        City:
        <input
          {...register("location.city", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        State:
        <input
          {...register("location.state", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Country:
        <input
          {...register("location.country", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Room Details */}
      <label className="block mb-2">
        Property Type:
        <input
          {...register("room_details.property_type", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Room Type:
        <input
          {...register("room_details.room_type", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Accommodates:
        <input
          type="number"
          {...register("room_details.accommodates", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Bedrooms:
        <input
          type="number"
          {...register("room_details.bedrooms", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Bathrooms:
        <input
          type="number"
          {...register("room_details.bathrooms", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Pricing */}
      <label className="block mb-2">
        Price per Night (USD):
        <input
          type="number"
          {...register("pricing.price_per_night", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Availability */}
      <label className="block mb-2">
        Minimum Nights:
        <input
          type="number"
          {...register("availability.minimum_nights", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Maximum Nights:
        <input
          type="number"
          {...register("availability.maximum_nights", { required: true })}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Amenities & Safety Features */}
      <label className="block mb-2">
        Amenities (comma separated):
        <input
          {...register("amenities")}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Safety Features (comma separated):
        <input
          {...register("safety_features")}
          className="w-full p-2 border rounded"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Submit Listing
      </button>
    </form>
  );
};
