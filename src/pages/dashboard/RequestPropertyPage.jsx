import { useQuery } from "@tanstack/react-query";
import { OfferTableCard } from "../../components/shared/card/OfferTableCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const RequestPropertyPage = () => {
  const { user } = useAuth();
  const axios = useAxios();

  //   Load users offer Data
  const getData = async () => {
    const { data } = await axios.get(
      `/get-agent-own-offer?email=${user?.email}`
    );
    return data.data;
  };

  //   Fetch user's offer data all
  const { data: getOfferRequestProperty, refetch } = useQuery({
    queryKey: ["getOfferRequestProperty"],
    queryFn: getData,
  });

  console.log(getOfferRequestProperty);

  return (
    <>
      <Heading heading="Brought Property Request Here ." />
      <OfferTableCard properties={getOfferRequestProperty} refetch={refetch} />
    </>
  );
};
