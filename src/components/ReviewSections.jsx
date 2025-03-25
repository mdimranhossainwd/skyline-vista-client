import { useQuery } from "@tanstack/react-query";
import {
  FaCheckCircle,
  FaComments,
  FaKey,
  FaMapMarkedAlt,
  FaSprayCan,
  FaTag,
} from "react-icons/fa";
import { useAxios } from "../hooks/useAxios";
import { ReviewCard } from "./shared/card/ReviewCard";
export const ReviewSections = () => {
  const axios = useAxios();

  //   Load all reviews Data
  const getData = async () => {
    const { data } = await axios.get("/get-reviews");
    return data?.data;
  };

  //   Fetch All Data to TanStack Query
  const { data: getReviewData, refetch } = useQuery({
    queryKey: ["getReviewData"],
    queryFn: getData,
  });

  console.log(getReviewData);

  const ratings = [
    {
      label: "Cleanliness",
      value: 4.8,
      icon: <FaSprayCan className="w-6 h-6" />,
    },
    {
      label: "Accuracy",
      value: 4.9,
      icon: <FaCheckCircle className="w-6 h-6" />,
    },
    { label: "Check-in", value: 4.9, icon: <FaKey className="w-6 h-6" /> },
    {
      label: "Communication",
      value: 4.9,
      icon: <FaComments className="w-6 h-6" />,
    },
    {
      label: "Location",
      value: 4.9,
      icon: <FaMapMarkedAlt className="w-6 h-6" />,
    },
    { label: "Value", value: 4.8, icon: <FaTag className="w-6 h-6" /> },
  ];

  return (
    <>
      <div className="p-6 bg-white rounded-lg text-center border-t-[1px] border-b-[1px] pb-8 border-[#ddd]">
        <img
          src="https://i.ibb.co.com/k2Fhj8cg/Screenshot-2.jpg"
          alt=""
          className="mx-auto"
        />
        <h2 className="text-2xl font-medium mb-3">Guest favorite</h2>
        <p className="text-gray-600 text-lg mb-12">
          This home is a guest favorite based on <br /> ratings, reviews, and
          reliability
        </p>

        <div className="mt-6"></div>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">Overall rating</span>
            <div className="h-1.5 w-40 bg-gray-300 rounded-full mt-2 relative">
              <div
                className="h-1.5 bg-black rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          {ratings.map((rating, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl">{rating.icon}</span>
              <span className="text-lg font-semibold mt-2">{rating.value}</span>
              <span className="text-gray-600 text-sm">{rating.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        <ReviewCard review={getReviewData} />
      </div>
    </>
  );
};
