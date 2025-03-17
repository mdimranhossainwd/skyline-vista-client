import { useQuery } from "@tanstack/react-query";
import { PropertyTableCard } from "../../components/shared/card/PropertyTableCard";
import { Heading } from "../../components/shared/heading/Heading";
import { useAxios } from "../../hooks/useAxios";

export const ManagePropertiesPage = () => {
  const axios = useAxios();
  //   Load all All-Properties Data
  const getData = async () => {
    const { data } = await axios.get("/get-rooms");
    return data?.data;
  };

  //   Fetch All Data to TanStack Query
  const { data: getPropertiesData, refetch } = useQuery({
    queryKey: ["getPropertiesData"],
    queryFn: getData,
  });

  console.log(getPropertiesData);

  return (
    <>
      <div className="w-full mx-auto">
        <Heading heading="All Properties Managed" />
        <PropertyTableCard properties={getPropertiesData} refetch={refetch} />
      </div>
    </>
  );
};
