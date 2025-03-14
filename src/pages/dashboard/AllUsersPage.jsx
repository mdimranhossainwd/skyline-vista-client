import { useQuery } from "@tanstack/react-query";
import { Heading } from "../../components/shared/heading/Heading";
import { useAxios } from "../../hooks/useAxios";

export const AllUsersPage = () => {
  const axios = useAxios();

  //   Load all All-Properties Data
  const getData = async () => {
    const { data } = await axios.get("/all-users");
    return data?.data;
  };

  //   Fetch All Data to TanStack Query
  const { data: getAllUserData, refetch } = useQuery({
    queryKey: ["getAllUserData"],
    queryFn: getData,
  });

  console.log(getAllUserData);

  return (
    <>
      <Heading heading="All User's Managed" />
    </>
  );
};
