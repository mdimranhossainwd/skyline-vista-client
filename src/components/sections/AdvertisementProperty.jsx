import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../hooks/useAxios";
import { RoomCard } from "../shared/card/RoomCard";
import { Heading } from "../shared/heading/Heading";

export const AdvertisementProperty = () => {
  const axios = useAxios();

  const getRooms = async () => {
    const { data } = await axios.get("/get-rooms");
    return data;
  };

  const { data: getRoomsData } = useQuery({
    queryKey: ["getRoomsData"],
    queryFn: getRooms,
  });

  console.log(getRoomsData);

  return (
    <div className="container mx-auto">
      <Heading
        heading="All Advertisement Property"
        description="Intrinsicly engage performance based manufactured products rather than user-centric web services. Collaboratively embrace revolutionary value with pandemic functionalities. Collaboratively."
      />

      <div className="grid grid-cols-4 gap-3 pt-3 pb-8">
        {getRoomsData?.data?.map((item) => (
          <RoomCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};
