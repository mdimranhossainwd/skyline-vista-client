import { useLoaderData } from "react-router-dom";

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
    <div>
      <h2>Hello World</h2>
    </div>
  );
};
