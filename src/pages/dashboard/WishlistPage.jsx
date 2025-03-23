import { useQuery } from "@tanstack/react-query";
import { OfferTableCard } from "../../components/shared/card/OfferTableCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const WishlistPage = () => {
  const { user } = useAuth();
  const axios = useAxios();

  //   Load users offer Data
  const getData = async () => {
    const { data } = await axios.get(`/get-offer-room?email=${user?.email}`);
    return data.data;
  };

  //   Fetch user's offer data all
  const { data: getOfferProperty, refetch } = useQuery({
    queryKey: ["getOfferProperty"],
    queryFn: getData,
  });

  console.log(getOfferProperty);

  return (
    <div>
      <Heading heading="Your Wishlist Property" />
      <OfferTableCard properties={getOfferProperty} refetch={refetch} />
    </div>
  );
};
