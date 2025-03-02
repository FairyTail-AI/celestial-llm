import axios from "axios";
import {env} from "@/env.mjs";

export const axiosInstance = (() => {
  const instance = axios.create({
    baseURL: env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  });

  // instance.interceptors.response.use((response) => response,
  //   async (error) => {
  //     if (error.response?.status === 401) {
  //       // Handle token expiration
  //     }
  //     return Promise.reject(error);
  //   }
  // );

  instance.interceptors.response.use(response => response.data)

  return instance
})()




