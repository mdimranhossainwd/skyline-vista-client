import { useQuery } from "@tanstack/react-query";
import { PropertyTableCard } from "../../components/shared/card/PropertyTableCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const MyOwnPropertyPage = () => {
  const axios = useAxios();
  const { user } = useAuth();

  //  Load all Agent-own-Properties Data
  const getData = async () => {
    const { data } = await axios.get("/get-brought-room");
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
      <div className="w-full mx-auto">
        <Heading heading="Your Own Property Here." />
        <PropertyTableCard properties={getAgentOwnProperty} refetch={refetch} />
      </div>
    </>
  );
};
