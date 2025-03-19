import { Trash2 } from "lucide-react";

export const ReviewCard = ({ review }) => {
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
              <h2 className="text-lg font-semibold ">{review?.name}</h2>
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
          <p className=" mb-4">{review?.comment}</p>

          {/* Review Rating */}
          <div className="flex items-center justify-between">
            <span className="text-yellow-400 font-semibold">
              {review?.rating}
            </span>
            {/* Delete Button */}
            <button
              // onClick={() => onDelete(review._id)}
              className="flex items-center gap-1 text-red-400 hover:text-red-500 transition"
            >
              <Trash2 size={18} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
