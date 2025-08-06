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
// Use the same base URL as ApiService for continuity
const baseUrl = import.meta.env.VITE_RM_API_URL;

// Custom baseQuery to migrate ApiService's retry logic
const customBaseQuery = async (
  args: string,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<ReturnType<typeof fetchBaseQuery>>
) => {
  // Step 1: Extract maxRetries and retryDelay constants from ApiService's makeRequest
  const maxRetries = 3;
  const retryDelay = 1000;
  let retryCount = 0;

  while (retryCount < maxRetries) {
    try {
      // Step 2: Implement ApiService's delay mechanism before each retry
      await new Promise((resolve) =>
        setTimeout(resolve, retryDelay * retryCount)
      );
      const response = await fetchBaseQuery({ baseUrl })(
        args,
        api,
        extraOptions
      );
      // Step 3: Check for 429 status and retry, mirroring ApiService's rate limit handling
      if (
        response.error &&
        'status' in response.error &&
        typeof response.error.status === 'number' &&
        response.error.status === 429 &&
        retryCount < maxRetries - 1
      ) {
        retryCount++;
        continue;
      }
      return response;
    } catch (error: unknown) {
      // Step 4: Handle general errors with retry, replicating ApiService's catch block
      if (retryCount < maxRetries - 1) {
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
  // Step 5: Return max retries exceeded error, consistent with ApiService's final fallback
  return { error: { status: 500, data: { message: 'Max retries exceeded' } } };
};

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: customBaseQuery, // Step 6: Use custom baseQuery to integrate ApiService's retry logic
  endpoints: (builder) => ({
    fetchInitialCharacters: builder.query<
      ServiceResponse<CharacterDetails[]>,
      number
    >({
      // Step 7: Migrate ApiService's fetchInitialCharacters URL structure
      query: (page: number) => `/character?page=${page}`, // Explicitly typed page
      // Step 8: Transform response to match ApiService's ServiceResponse format
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
      // Step 9: Handle errors with ApiService's getErrorMessage logic
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
    }),
    searchCharacters: builder.query<
      ServiceResponse<CharacterDetails[]>,
      { query: string; page: number }
    >({
      // Step 10: Migrate ApiService's searchCharacters query logic, including trim and fallback
      query: ({ query, page }: { query: string; page: number }) =>
        query.trim()
          ? `/character/?name=${encodeURIComponent(query.trim())}&page=${page}`
          : `/character?page=${page}`, // Explicitly typed destructured object
      // Step 11: Transform response to maintain ServiceResponse consistency
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
      // Step 12: Apply error transformation using ApiService's error messages
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
    }),
    getCharacter: builder.query<ServiceResponse<CharacterDetails>, number>({
      // Step 13: Migrate ApiService's getCharacter URL structure
      query: (id: number) => `/character/${id}`, // Explicitly typed id
      // Step 14: Transform single character response to ServiceResponse format
      transformResponse: (response: unknown) => {
        if (typeof response !== 'object' || response === null)
          throw new Error('Invalid response format');
        const resp = response as CharacterDetails;
        return {
          status: 'success',
          data: resp,
        };
      },
      // Step 15: Handle errors for single character fetch
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
    }),
  }),
});

// Step 16: Reuse ApiService's error message function for consistency
const getErrorMessage = (status: number): string => {
  const messages: Record<number, string> = {
    400: 'Invalid search parameters',
    404: 'No characters found',
    429: 'Too many requests, retrying...',
    500: 'Server error',
  };
  return messages[status] || `API error (${status})`;
};

export const {
  useFetchInitialCharactersQuery,
  useSearchCharactersQuery,
  useGetCharacterQuery,
} = rickAndMortyApi;

// Step 17: Export API and hooks for component integration
export default rickAndMortyApi;
