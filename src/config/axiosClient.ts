import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosClient.interceptors.request.use(async (request) => {
  //   const user = localStorage.getItem("user");
  //   const token = JSON.parse(user!)?.token;

  //   if (token) {
  //     request.headers.Authorization = `Bearer ${token}`;
  //   }
  return request;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("error:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
