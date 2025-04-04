import { useQuery } from "@tanstack/react-query";
import { ProfileCard } from "../../components/shared/card/ProfileCard";
import { useAuth } from "../../hooks/useAuth";
import { useAxios } from "../../hooks/useAxios";

export const ProfilePage = () => {
  const axios = useAxios();
  const { user } = useAuth();

  //    Load user's specific email Data
  const getData = async () => {
    const { data } = await axios.get(`/get-user/${user?.email}`);
    return data?.data;
  };

  // Fetch users Data by TanStack Query
  const { data: getUserInfo, refetch } = useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getData,
  });
  console.log(getUserInfo);

  return (
    <>
      <div>
        <ProfileCard user={getUserInfo} refetch={refetch} />
      </div>
    </>
  );
};
