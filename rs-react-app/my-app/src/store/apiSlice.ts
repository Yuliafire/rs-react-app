import {
  createApi,
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryExtraOptions,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
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


const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH;

const customBaseQuery = async (
  args: string,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<ReturnType<typeof fetchBaseQuery>>
) => {
  const maxRetries = 1;
  const retryDelay = 500;
  let retryCount = 0;

  while (retryCount <= maxRetries) {
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, retryDelay * retryCount)
      );
      const response = await fetchBaseQuery({ baseUrl })(
        args,
        api,
        extraOptions
      );
      if (
        response.error &&
        'status' in response.error &&
        typeof response.error.status === 'number' &&
        response.error.status === 429 &&
        retryCount < maxRetries
      ) {
        console.log(
          `Attempt ${retryCount + 1}/${maxRetries + 1} for ${args}, retrying due to 429`
        );
        retryCount++;
        continue;
      }
      return response;
    } catch (error: unknown) {
      if (retryCount < maxRetries) {
        console.log(
          `Attempt ${retryCount + 1}/${maxRetries + 1} for ${args}, retrying due to error`
        );
        retryCount++;
        continue;
      }
      let message: string;
      if (error instanceof Error) {
        message = error.message;
      } else {
        message = 'Network error';
      }
      return { error: { status: 'FETCH_ERROR', data: { message } } };
    }
  }
  return { error: { status: 500, data: { message: 'Max retries exceeded' } } };
};

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Character', 'CharacterList'],
  endpoints: (builder) => ({
    fetchInitialCharacters: builder.query<
      ServiceResponse<CharacterDetails[]>,
      number
    >({
      query: (page: number) => `/character?page=${page}`,
      transformResponse: (response: unknown) => {
        if (typeof response !== 'object' || response === null)
          throw new Error('Invalid response format');
        const resp = response as {
          results: CharacterDetails[];
          info?: {
            count: number;
            pages: number;
            next: string | null;
            prev: string | null;
          };
        };
        return {
          status: 'success',
          data: resp.results,
          ...(resp.info && { info: resp.info }),
        };
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const status =
          typeof baseQueryReturnValue.status === 'number'
            ? baseQueryReturnValue.status
            : 500;
        return {
          status: 'error',
          data: [] as CharacterDetails[],
          message: getErrorMessage(status),
        };
      },
      providesTags: (_result, _error, page) => [
        { type: 'CharacterList', id: `PAGE_${page}` },
      ],
    }),
    searchCharacters: builder.query<
      ServiceResponse<CharacterDetails[]>,
      { query: string; page: number }
    >({
      query: ({ query, page }: { query: string; page: number }) =>
        query.trim()
          ? `/character/?name=${encodeURIComponent(query.trim())}&page=${page}`
          : `/character?page=${page}`,
      transformResponse: (response: unknown) => {
        if (typeof response !== 'object' || response === null)
          throw new Error('Invalid response format');
        const resp = response as {
          results: CharacterDetails[];
          info?: {
            count: number;
            pages: number;
            next: string | null;
            prev: string | null;
          };
        };
        return {
          status: 'success',
          data: resp.results,
          ...(resp.info && { info: resp.info }),
        };
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const status =
          typeof baseQueryReturnValue.status === 'number'
            ? baseQueryReturnValue.status
            : 500;
        return {
          status: 'error',
          data: [] as CharacterDetails[],
          message: getErrorMessage(status),
        };
      },
      providesTags: (_result, _error, { query, page }) => [
        { type: 'CharacterList', id: `SEARCH_${query}_PAGE_${page}` },
      ],
    }),
    getCharacter: builder.query<ServiceResponse<CharacterDetails>, number>({
      query: (id: number) => `/character/${id}`,
      transformResponse: (response: unknown) => {
        if (typeof response !== 'object' || response === null)
          throw new Error('Invalid response format');
        const resp = response as CharacterDetails;
        return {
          status: 'success',
          data: resp,
        };
      },
      transformErrorResponse: (baseQueryReturnValue: FetchBaseQueryError) => {
        const status =
          typeof baseQueryReturnValue.status === 'number'
            ? baseQueryReturnValue.status
            : 500;
        return {
          status: 'error',
          data: {} as CharacterDetails,
          message: getErrorMessage(status),
        };
      },
      providesTags: (_result, _error, id) => [
        { type: 'Character', id: `CHAR_${id}` },
      ],
    }),
  }),
});

const getErrorMessage = (status: number): string => {
  const messages: Record<number, string> = {
    400: 'Invalid search parameters',
    404: 'No characters found',
    429: 'Too many requests, retrying once...',
    500: 'Server error',
  };
  return messages[status] || `API error (${status})`;
};

export const {
  useFetchInitialCharactersQuery,
  useSearchCharactersQuery,
  useGetCharacterQuery,
} = rickAndMortyApi;

export default rickAndMortyApi;
