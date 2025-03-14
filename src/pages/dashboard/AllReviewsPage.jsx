import { useQuery } from "@tanstack/react-query";
import { Heading } from "../../components/shared/heading/Heading";
import { useAxios } from "../../hooks/useAxios";

export const AllReviewsPage = () => {
  const axios = useAxios();

  //   Load all reviews Data
  const getData = async () => {
    const { data } = await axios.get("/get-reviews");
    return data?.data;
  };

  //   Fetch All Data to TanStack Query
  const { data: getReviewData, refetch } = useQuery({
    queryKey: ["getReviewData"],
    queryFn: getData,
  });

  console.log(getReviewData);

  return (
    <>
      <Heading heading="All Reviews Mangaged" />
    </>
  );
};
