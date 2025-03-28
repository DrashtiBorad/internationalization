import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});
export default queryClient;
