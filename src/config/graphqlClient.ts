import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://countries.trevorblades.com"
);

export const customFetcher =
  <TData, TVariables extends object = Record<string, never>>(
    query: string,
    variables?: TVariables
  ) =>
  async (): Promise<TData> => {
    return graphqlClient.request<TData>({
      document: query,
      variables: variables || ({} as TVariables),
    });
  };
