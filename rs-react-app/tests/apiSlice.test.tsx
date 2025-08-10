import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  beforeAll,
  afterAll,
} from 'vitest';
import { Mock } from 'vitest';
import { rickAndMortyApi } from '../src/store/apiSlice';
import { configureStore } from '@reduxjs/toolkit';
import type { CharacterDetails } from '../src/types/types';
import type { ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import type { RootState } from '../src/store/store';
import {
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

interface MockResponse
  extends Omit<
    Response,
    'json' | 'text' | 'arrayBuffer' | 'blob' | 'formData'
  > {
  ok: boolean;
  status: number;
  statusText: string;
  type: ResponseType;
  url: string;
  redirected: boolean;
  headers: Headers;
  body: ReadableStream<Uint8Array> | null;
  bodyUsed: boolean;
  json: () => Promise<unknown>;
  text: () => Promise<string>;
  arrayBuffer: () => Promise<ArrayBuffer>;
  blob: () => Promise<Blob>;
  formData: () => Promise<FormData>;
  clone: () => Response;
  bytes: () => Promise<Uint8Array>;
}

vi.mock('../src/store/apiSlice', async () => {
  const actual = await vi.importActual<typeof import('../src/store/apiSlice')>(
    '../src/store/apiSlice'
  );
  return {
    ...actual,
    rickAndMortyApi: {
      ...actual.rickAndMortyApi,
      injectEndpoints: (endpoints) => {
        return actual.rickAndMortyApi.injectEndpoints({
          ...endpoints,
          baseQuery: fetchBaseQuery({
            baseUrl: 'https://rickandmortyapi.com/api',
          }) as BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        });
      },
    },
  };
});

const mockCharacter: CharacterDetails = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Earth', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

const mockCharactersResponse = {
  results: [mockCharacter],
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
};

describe('rickAndMortyApi with real API', () => {
  let store: ReturnType<typeof configureStore>;
  let originalFetch: typeof global.fetch;
  let dispatch: ThunkDispatch<RootState, unknown, AnyAction>;

  beforeAll(() => {
    originalFetch = global.fetch;
    global.fetch = vi.fn() as Mock;
  });

  beforeEach(() => {
    store = configureStore({
      reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    });
    dispatch = store.dispatch as ThunkDispatch<RootState, unknown, AnyAction>;
    vi.clearAllMocks();
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  describe('fetchInitialCharacters', () => {
    it('should handle 429 rate limit with one retry from real API', async () => {
      let callCount = 0;
      vi.mocked(fetch).mockImplementation(() => {
        callCount++;
        if (callCount === 1) {
          const mockResponse: MockResponse = {
            ok: false,
            status: 429,
            statusText: 'Too Many Requests',
            type: 'basic',
            url: 'https://rickandmortyapi.com/api/character?page=1',
            redirected: false,
            headers: new Headers(),
            body: null,
            bodyUsed: false,
            json: async () => ({ error: 'Too many requests' }),
            text: async () => JSON.stringify({ error: 'Too many requests' }),
            arrayBuffer: async () => new ArrayBuffer(0),
            blob: async () => new Blob(),
            formData: async () => new FormData(),
            clone: () => ({ ...mockResponse }) as Response,
            bytes: async () => new Uint8Array(),
          };
          return Promise.resolve(mockResponse);
        }
        const mockResponse: MockResponse = {
          ok: true,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character?page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => mockCharactersResponse,
          text: async () => JSON.stringify(mockCharactersResponse),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.fetchInitialCharacters.initiate(1)
      );

      expect(callCount).toBe(2);
      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: [expect.objectContaining({ id: 1, name: 'Rick Sanchez' })],
          info: expect.objectContaining({ count: 826, pages: 42 }),
        },
      });
    });

    it('should fetch characters successfully on valid response', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: true,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character?page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => mockCharactersResponse,
          text: async () => JSON.stringify(mockCharactersResponse),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.fetchInitialCharacters.initiate(1)
      );

      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: [expect.objectContaining({ id: 1, name: 'Rick Sanchez' })],
          info: expect.objectContaining({ count: 826, pages: 42 }),
        },
      });
    });

    it('should handle 404 error for invalid page', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: false,
          status: 404,
          statusText: 'Not Found',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character?page=999',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => ({ error: 'Page not found' }),
          text: async () => JSON.stringify({ error: 'Page not found' }),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.fetchInitialCharacters.initiate(999)
      );

      expect(result).toMatchObject({
        status: 'rejected',
        error: {
          status: 'error',
          data: [] as CharacterDetails[],
          message: 'No characters found',
        },
      });
    });

    it('should handle 500 server error', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: false,
          status: 500,
          statusText: 'Internal Server Error',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character?page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => ({ error: 'Server error' }),
          text: async () => JSON.stringify({ error: 'Server error' }),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.fetchInitialCharacters.initiate(1)
      );

      expect(result).toMatchObject({
        status: 'rejected',
        error: {
          status: 'error',
          data: [] as CharacterDetails[],
          message: 'Server error',
        },
      });
    });
  });

  describe('searchCharacters', () => {
    it('should search characters successfully with query', async () => {
      const mockSearchResponse = {
        results: [mockCharacter],
        info: {
          count: 1,
          pages: 1,
          next: null,
          prev: null,
        },
      };
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: true,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character/?name=Rick&page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => mockSearchResponse,
          text: async () => JSON.stringify(mockSearchResponse),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.searchCharacters.initiate({
          query: 'Rick',
          page: 1,
        })
      );

      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: [expect.objectContaining({ id: 1, name: 'Rick Sanchez' })],
          info: expect.objectContaining({ count: 1, pages: 1 }),
        },
      });
    });

    it('should handle empty query as initial fetch', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: true,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character?page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => mockCharactersResponse,
          text: async () => JSON.stringify(mockCharactersResponse),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.searchCharacters.initiate({
          query: '',
          page: 1,
        })
      );

      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: [expect.objectContaining({ id: 1, name: 'Rick Sanchez' })],
          info: expect.objectContaining({ count: 826, pages: 42 }),
        },
      });
    });

    it('should handle 400 error for invalid query', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: false,
          status: 400,
          statusText: 'Bad Request',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character/?name=invalid&page=1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => ({ error: 'Invalid query' }),
          text: async () => JSON.stringify({ error: 'Invalid query' }),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.searchCharacters.initiate({
          query: 'invalid',
          page: 1,
        })
      );

      expect(result).toMatchObject({
        status: 'rejected',
        error: {
          status: 'error',
          data: [] as CharacterDetails[],
          message: 'Invalid search parameters',
        },
      });
    });
  });

  describe('getCharacter', () => {
    it('should fetch character successfully by id', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: true,
          status: 200,
          statusText: 'OK',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character/1',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => mockCharacter,
          text: async () => JSON.stringify(mockCharacter),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.getCharacter.initiate(1)
      );

      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: expect.objectContaining({ id: 1, name: 'Rick Sanchez' }),
        },
      });
    });

    it('should handle 404 error for non-existent character', async () => {
      vi.mocked(fetch).mockImplementation(() => {
        const mockResponse: MockResponse = {
          ok: false,
          status: 404,
          statusText: 'Not Found',
          type: 'basic',
          url: 'https://rickandmortyapi.com/api/character/999',
          redirected: false,
          headers: new Headers(),
          body: null,
          bodyUsed: false,
          json: async () => ({ error: 'Character not found' }),
          text: async () => JSON.stringify({ error: 'Character not found' }),
          arrayBuffer: async () => new ArrayBuffer(0),
          blob: async () => new Blob(),
          formData: async () => new FormData(),
          clone: () => ({ ...mockResponse }) as Response,
          bytes: async () => new Uint8Array(),
        };
        return Promise.resolve(mockResponse);
      });

      const result = await dispatch(
        rickAndMortyApi.endpoints.getCharacter.initiate(999)
      );

      expect(result).toMatchObject({
        status: 'rejected',
        error: {
          status: 'error',
          data: {} as CharacterDetails,
          message: 'No characters found',
        },
      });
    });
  });
});
