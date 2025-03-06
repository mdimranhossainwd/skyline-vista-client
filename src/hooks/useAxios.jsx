import axios from "axios";

export const instance = axios.create({
  baseURL: "https://localhost:5000/api/rooms",
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
