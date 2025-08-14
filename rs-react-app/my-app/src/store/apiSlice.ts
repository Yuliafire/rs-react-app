import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CharacterDetails } from '../../src/types/types';

interface ServiceResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_PATH || 'https://rickandmortyapi.com/api',
  }),
  tagTypes: ['Character', 'CharacterList'],
  endpoints: (builder) => ({
    fetchInitialCharacters: builder.query<ServiceResponse<CharacterDetails[]>, number>({
      query: (page: number) => `/character?page=${page}`,
      transformResponse: (response: { results: CharacterDetails[]; info: { count: number; pages: number; next: string | null; prev: string | null } }) => ({
        status: 'success',
        data: response.results,
        info: response.info,
      }),
      transformErrorResponse: (error) => ({
        status: 'error',
        data: [] as CharacterDetails[],
        message: getErrorMessage(error.status as number),
      }),
      providesTags: (_result, _error, page) => [{ type: 'CharacterList', id: `PAGE_${page}` }],
    }),
    searchCharacters: builder.query<ServiceResponse<CharacterDetails[]>, { query: string; page: number }>({
      query: ({ query, page }) =>
        query.trim()
          ? `/character/?name=${encodeURIComponent(query.trim())}&page=${page}`
          : `/character?page=${page}`,
      transformResponse: (response: { results: CharacterDetails[]; info: { count: number; pages: number; next: string | null; prev: string | null } }) => ({
        status: 'success',
        data: response.results,
        info: response.info,
      }),
      transformErrorResponse: (error) => ({
        status: 'error',
        data: [] as CharacterDetails[],
        message: getErrorMessage(error.status as number),
      }),
      providesTags: (_result, _error, { query, page }) => [
        { type: 'CharacterList', id: `SEARCH_${query}_PAGE_${page}` },
      ],
    }),
    getCharacter: builder.query<ServiceResponse<CharacterDetails>, number>({
      query: (id: number) => `/character/${id}`,
      transformResponse: (response: CharacterDetails) => ({
        status: 'success',
        data: response,
      }),
      transformErrorResponse: (error) => ({
        status: 'error',
        data: {} as CharacterDetails,
        message: getErrorMessage(error.status as number),
      }),
      providesTags: (_result, _error, id) => [{ type: 'Character', id: `CHAR_${id}` }],
    }),
  }),
});

const getErrorMessage = (status: number | string): string => {
  const messages: Record<number, string> = {
    400: 'Invalid search parameters',
    404: 'No characters found',
    429: 'Too many requests, please try again later',
    500: 'Server error',
  };
  return messages[status as number] || `API error (${status})`;
};

export const {
  useFetchInitialCharactersQuery,
  useSearchCharactersQuery,
  useGetCharacterQuery,
} = rickAndMortyApi;

export default rickAndMortyApi;
