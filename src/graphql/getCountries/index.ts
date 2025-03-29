import * as Types from '../types';

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { customFetcher } from '../../config/graphqlClient';
export type GetCountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', name: string, code: string }> };



export const GetCountriesDocument = `
    query getCountries {
  countries {
    name
    code
  }
}
    `;

export const useGetCountriesQuery = <
      TData = GetCountriesQuery,
      TError = unknown
    >(
      variables?: GetCountriesQueryVariables,
      options?: Omit<UseQueryOptions<GetCountriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCountriesQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GetCountriesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getCountries'] : ['getCountries', variables],
    queryFn: customFetcher<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, variables),
    ...options
  }
    )};

useGetCountriesQuery.getKey = (variables?: GetCountriesQueryVariables) => variables === undefined ? ['getCountries'] : ['getCountries', variables];
