import { useQuery } from "@tanstack/react-query";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const MyOwnPropertyPage = () => {
  const axios = useAxios();
  const { user } = useAuth();

  //  Load all Agent-own-Properties Data
  const getData = async () => {
    const { data } = await axios.get(`/get-room-by-email?email=${user?.email}`);
    return data?.data;
  };

  // Fetch All Data to TanStack Query
  const { data: getAgentOwnProperty, refetch } = useQuery({
    queryKey: ["getAgentOwnProperty"],
    queryFn: getData,
  });

  console.log(getAgentOwnProperty);

  return (
    <>
      <Heading heading="Your Own Property Here." />
    </>
  );
};
