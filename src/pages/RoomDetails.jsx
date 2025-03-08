import { useLoaderData } from "react-router-dom";
import { ImageCard } from "../components/shared/card/ImageCard";

export const RoomDetails = () => {
  const viewRoomInfo = useLoaderData();
  console.log(Object.keys(viewRoomInfo?.data).join(","));
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
    room_status,
    status,
    created_at,
    updated_at,
  } = viewRoomInfo?.data || {};

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-5">
        <h2 className="text-2xl font-medium">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2  cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            <span className="font-medium underline">Share</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="font-medium underline">Save</span>
          </div>
        </div>
      </div>

      <ImageCard images={images} />
    </div>
  );
};
