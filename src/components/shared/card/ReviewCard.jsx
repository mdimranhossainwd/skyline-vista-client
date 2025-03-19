import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAxios } from "../../../hooks/useAxios";

export const ReviewCard = ({ review, refetch }) => {
  const axios = useAxios();

  //  Delete Review Handler Function
  const handleReviewDelete = async (id) => {
    try {
      await axios.delete(`/delete-review/${id}`);
      refetch();
      toast.success("Review deleted successfully!");
    } catch (error) {
      console.log("Error deleting review:", error);
    }
  };

  return (
    <>
      {review?.map((review) => (
        <div className="relative border bg-white border-[#ddd] rounded-2xl p-5 w-full max-w-md mx-auto my-4">
          {/* Reviewer Info */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={review.profile_image}
              alt="User"
              className="w-12 h-12 rounded-full object-cover border "
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-lg font-semibold ">{review?.name}</h2>
                {review?.is_verified && (
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
                    class="lucide lucide-badge-check"
                    className="text-blue-500"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
              </div>
              <p className="text-sm ">
                {new Date(review?.review_date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Review Content */}
          <p className=" mb-4">{review?.comment.slice(0, 190)}...</p>

          {/* Review Rating */}
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 font-semibold">
              {review?.rating}
            </span>
            {/* Delete Button */}
            <button
              onClick={() => handleReviewDelete(review._id)}
              className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
