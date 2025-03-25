import axios from "axios";

export const instance = axios.create({
  baseURL: "https://skyline-vista-server.vercel.app/api/rooms",
  withCredentials: true,
});

export const useAxios = () => {
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      console.log(error);
    }
  );
  return instance;
};
