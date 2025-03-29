import * as Types from "../types";

import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { customFetcher } from "../../config/graphqlClient";
export type CountryListByNameQueryVariables = Types.Exact<{
  countryName: Types.Scalars["ID"]["input"];
}>;

export type CountryListByNameQuery = {
  __typename?: "Query";
  country: {
    __typename?: "Country";
    name: string;
    native: string;
    capital: string | null;
    currency: string | null;
    emoji: string;
    languages: Array<{ __typename?: "Language"; code: string; name: string }>;
  } | null;
};

export const CountryListByNameDocument = `
    query CountryListByName($countryName: ID!) {
  country(code: $countryName) {
    name
    native
    capital
    currency
    emoji
    languages {
      code
      name
    }
  }
}
    `;

export const useCountryListByNameQuery = <
  TData = CountryListByNameQuery,
  TError = unknown
>(
  variables: CountryListByNameQueryVariables,
  options?: Omit<
    UseQueryOptions<CountryListByNameQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<
      CountryListByNameQuery,
      TError,
      TData
    >["queryKey"];
  }
) => {
  return useQuery<CountryListByNameQuery, TError, TData>({
    queryKey: ["CountryListByName", variables],
    queryFn: customFetcher<
      CountryListByNameQuery,
      CountryListByNameQueryVariables
    >(CountryListByNameDocument, variables),
    ...options,
  });
};

useCountryListByNameQuery.getKey = (
  variables: CountryListByNameQueryVariables
) => ["CountryListByName", variables];
