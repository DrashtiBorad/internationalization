import { QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";

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

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_COUNTRIES_API as string
);
