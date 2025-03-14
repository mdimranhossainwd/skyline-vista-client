import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";
import { useAxios } from "./useAxios";

export const useRole = () => {
  const { user } = useAuth();
  const [role, setIsRole] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get(`/get-user/${user?.email}`)
      .then((res) => setIsRole(res?.data?.data?.user?.role));
  }, [user]);
  return [role];
};
