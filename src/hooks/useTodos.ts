import { getToods } from "@/services/restAPi";
import Cachekey from "@/services/restAPi/cacheKey";
import { useQuery } from "@tanstack/react-query";

export const useGetTodos = () => {
  return useQuery({
    queryKey: [Cachekey.TODOS],
    queryFn: getToods,
  });
};
