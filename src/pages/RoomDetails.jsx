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

  const formattedImages = images?.map((img) => ({
    src: img,
    thumbnail: img,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  }));

  return (
    <div>
      <ImageCard images={images} />
    </div>
  );
};
