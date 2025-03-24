import { useQuery } from "@tanstack/react-query";
import { SoldRoomCard } from "../../components/shared/card/SoldRoomCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";
import { useRole } from "../../hooks/useRole";

export const SoldPropertyPage = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [role] = useRole();

  //   Load users offer Data
  const getData = async () => {
    const { data } = await axios.get(`/get-offer-room?email=${user?.email}`);
    return data.data;
  };

  //   Fetch user's offer data all
  const { data: getOfferProperty } = useQuery({
    queryKey: ["getOfferProperty"],
    queryFn: getData,
  });
  console.log(getOfferProperty);

  //   Load users offer Data
  const getDataAgent = async () => {
    const { data } = await axios.get(
      `/get-agent-own-offer?email=${user?.email}`
    );
    return data.data;
  };

  //   Fetch user's offer data all
  const { data: getOfferRequestProperty } = useQuery({
    queryKey: ["getOfferRequestProperty"],
    queryFn: getDataAgent,
  });

  console.log(getOfferRequestProperty);

  return (
    <>
      <Heading heading="Your Own Sold Properties" />
      <SoldRoomCard
        property={role === "agent" ? getOfferRequestProperty : getOfferProperty}
      />
    </>
  );
};
