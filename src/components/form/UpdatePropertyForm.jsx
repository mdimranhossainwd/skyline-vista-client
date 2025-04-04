import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { Heading } from "../shared/heading/Heading";

export const UpdatePropertyForm = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const getRoomData = useLoaderData();

  const {
    host,
    location,
    room_details,
    pricing,
    availability,
    _id,
    title,
    description,
    amenities,
    images,
    amount,
    safety_features,
  } = getRoomData?.data || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Agent Update Properties Functions
  const onSubmit = async (data) => {
    const finalData = {
      title: data.title,
      description: data.description,
      host: {
        name: user?.displayName,
        profile_image: user?.photoURL,
        is_superhost: data.is_superhost || false,
        response_time: data.response_time,
        response_rate: parseInt(data.response_rate),
        total_listings: parseInt(data.total_listings),
        verified: true, // Optional static value, you can change it
      },
      location: {
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude),
        zip_code: data.zip_code,
        neighborhood: data.neighborhood,
      },
      room_details: {
        property_type: data.property_type,
        room_type: data.room_type,
        accommodates: parseInt(data.accommodates),
        bedrooms: parseInt(data.bedrooms),
        beds: parseInt(data.beds),
        bathrooms: parseInt(data.bathrooms),
      },
      pricing: {
        price_per_night: parseInt(data.price_per_night),
        currency: data.currency || "USD",
        cleaning_fee: parseInt(data.cleaning_fee),
        service_fee: parseInt(data.service_fee),
        security_deposit: parseInt(data.security_deposit),
        weekly_discount: parseInt(data.weekly_discount),
        monthly_discount: parseInt(data.monthly_discount),
      },
      availability: {
        minimum_nights: parseInt(data.minimum_nights),
        maximum_nights: parseInt(data.maximum_nights),
        available_dates: data.available_dates
          .split(",")
          .map((date) => date.trim()),
      },
      amenities: data.amenities.split(",").map((item) => item.trim()),
      safety_features: data.safety_features
        .split(",")
        .map((item) => item.trim()),
      images: data.images.split(",").map((img) => img.trim()),
      amount: data.amount,
      room_status: "available",
    };

    try {
      await axios.put(`/update-room/${_id}`, finalData);
      toast.success("Properties Update Successfully");
      reset();
      navigate("/dashboard/my-own-properties");
    } catch (error) {
      console.log(error);
    }

    console.log(finalData);
  };

  return (
    <>
      <div>
        <Heading heading="Update This Properties Info" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-6 bg-white border border-[#ddd] rounded-md"
      >
        {/* Title & Description */}
        <label className="block mb-2">
          Title:
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full p-2 border border-[#DDD] rounded"
            defaultValue={title}
          />
          {errors.title && (
            <span className="text-red-500">{errors.title.message}</span>
          )}
        </label>

        <label className="block mb-2">
          Description:
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border border-[#DDD] rounded"
            defaultValue={description}
          ></textarea>
          {errors.description && (
            <span className="text-red-500">{errors.description.message}</span>
          )}
        </label>

        {/* --------- HOST ----------- */}
        <h3 className="text-lg font-semibold mt-4 mb-1">Host Details:</h3>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-2">
            Host Name:
            <input
              {...register("host_name", { required: "Host name is required" })}
              className="w-full p-2 border border-[#DDD] rounded cursor-not-allowed"
              defaultValue={user?.displayName}
            />
          </label>
  
          <label className="block mb-2">
            Profile Image URL:
            <input
              {...register("profile_image", {
                required: "Profile Image URL is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={user?.photoURL}
            />
          </label>
        </div> */}

        <label className=" mb-2 flex justify-between items-center">
          <span className="mr-2">Is Superhost:</span>
          <div className="relative w-12 h-6 bg-gray-300 rounded-full transition-all">
            <input
              type="checkbox"
              {...register("is_superhost")}
              className="sr-only peer"
              defaultValue={host?.is_superhost}
            />
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transition-all peer-checked:translate-x-6 peer-checked:bg-pink-300"></div>
          </div>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block mb-2">
            Response Time:
            <input
              {...register("response_time", {
                required: "Response time is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={host?.response_time}
            />
          </label>

          <label className="block mb-2">
            Response Rate (%):
            <input
              type="number"
              {...register("response_rate", {
                required: "Response rate is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={host?.response_rate}
            />
          </label>

          <label className="block mb-2">
            Total Listings:
            <input
              type="number"
              {...register("total_listings", {
                required: "Total listings is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={host?.total_listings}
            />
          </label>
        </div>

        {/* ----------- LOCATION --------- */}
        <h3 className="text-lg font-semibold mt-4 mb-1">Location:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block mb-2">
            Address:
            <input
              {...register("address", { required: "Address is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.address}
            />
          </label>

          <label className="block mb-2">
            City:
            <input
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.city}
            />
          </label>

          <label className="block mb-2">
            State:
            <input
              {...register("state", { required: "State is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.state}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <label className="block mb-2">
            Country:
            <input
              {...register("country", { required: "Country is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.country}
            />
          </label>

          <label className="block mb-2">
            Latitude:
            <input
              type="number"
              step="any"
              {...register("latitude", { required: "Latitude is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.latitude}
            />
          </label>

          <label className="block mb-2">
            Longitude:
            <input
              type="number"
              step="any"
              {...register("longitude", { required: "Longitude is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.longitude}
            />
          </label>

          <label className="block mb-2">
            Zip Code:
            <input
              {...register("zip_code", { required: "Zip Code is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.zip_code}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-2">
            Neighborhood:
            <input
              {...register("neighborhood")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={location?.neighborhood}
            />
          </label>
        </div>

        {/* -------- ROOM DETAILS -------- */}
        <h3 className="text-lg font-semibold mt-4">Room Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <label className="block mb-2">
            Property Type:
            <input
              {...register("property_type", {
                required: "Property Type is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={room_details?.property_type}
            />
          </label>

          <label className="block mb-2">
            Room Type:
            <input
              {...register("room_type", { required: "Room Type is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={room_details?.room_type}
            />
          </label>
        </div>

        <label className="block mb-2">
          Accommodates:
          <input
            type="number"
            {...register("accommodates", {
              required: "Accommodates is required",
            })}
            className="w-full p-2 border border-[#DDD] rounded"
            defaultValue={room_details?.accommodates}
          />
        </label>

        <div className="grid grid-cols-3 gap-4">
          <label className="block mb-2">
            Bedrooms:
            <input
              type="number"
              {...register("bedrooms", { required: "Bedrooms is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={room_details?.bedrooms}
            />
          </label>

          <label className="block mb-2">
            Beds:
            <input
              type="number"
              {...register("beds", { required: "Beds is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={room_details?.beds}
            />
          </label>

          <label className="block mb-2">
            Bathrooms:
            <input
              type="number"
              {...register("bathrooms", { required: "Bathrooms is required" })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={room_details?.bathrooms}
            />
          </label>
        </div>

        {/* -------- PRICING -------- */}
        <h3 className="text-lg font-semibold mt-4">Pricing</h3>
        <div className="grid grid-cols-3 gap-4">
          <label className="block mb-2">
            Price per Night:
            <input
              type="number"
              {...register("price_per_night", {
                required: "Price per night is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.price_per_night}
            />
          </label>

          <label className="block mb-2">
            Cleaning Fee:
            <input
              type="number"
              {...register("cleaning_fee")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.cleaning_fee}
            />
          </label>

          <label className="block mb-2">
            Service Fee:
            <input
              type="number"
              {...register("service_fee")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.service_fee}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block mb-2">
            Security Deposit:
            <input
              type="number"
              {...register("security_deposit")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.security_deposit}
            />
          </label>

          <label className="block mb-2">
            Weekly Discount (%):
            <input
              type="number"
              {...register("weekly_discount")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.weekly_discount}
            />
          </label>

          <label className="block mb-2">
            Monthly Discount (%):
            <input
              type="number"
              {...register("monthly_discount")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={pricing?.monthly_discount}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-2">
            Amount:
            <input
              type="number"
              {...register("amount", {
                required: "Price Amount is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={amount}
            />
          </label>
        </div>

        {/* -------- AVAILABILITY -------- */}
        <h3 className="text-lg font-semibold mt-4 mb-1">Availability:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="block mb-2">
            Minimum Nights:
            <input
              type="number"
              {...register("minimum_nights", {
                required: "Minimum Nights is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={availability?.minimum_nights}
            />
          </label>

          <label className="block mb-2">
            Maximum Nights:
            <input
              type="number"
              {...register("maximum_nights", {
                required: "Maximum Nights is required",
              })}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={availability?.maximum_nights}
            />
          </label>

          <label className="block mb-2">
            Available Dates (comma separated):
            <input
              {...register("available_dates")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={availability?.available_dates.join(",")}
            />
          </label>
        </div>

        {/* -------- Amenities, Safety, Images -------- */}
        <h3 className="text-lg font-semibold mt-4 mb-1">Others:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block mb-2">
            Amenities (comma separated):
            <input
              {...register("amenities")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={amenities?.join(",")}
            />
          </label>

          <label className="block mb-2">
            Safety Features (comma separated):
            <input
              {...register("safety_features")}
              className="w-full p-2 border border-[#DDD] rounded"
              defaultValue={safety_features?.join(",")}
            />
          </label>
        </div>

        <label className="block mb-2">
          Images URLs (comma separated):
          <input
            {...register("images")}
            className="w-full p-2 border border-[#DDD] rounded"
            defaultValue={images?.join(",")}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-lg mt-6 hover:cursor-pointer text-md font-medium"
        >
          Update Property
        </button>
      </form>
    </>
  );
};
