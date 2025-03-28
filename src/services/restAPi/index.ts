import axiosClient from "@/config/axiosClient";
import { apiRoutes } from "./apiRoutes";
import { Todos } from "./restAPi/types/todos/apiResponseTypes";

export const getToods = async () => {
  const data = await axiosClient.get<Todos[]>(apiRoutes.getTodos);
  return data.data;
};
