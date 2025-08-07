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
    it('should handle 429 rate limit with retries from real API', async () => {
      let callCount = 0;
      vi.mocked(fetch).mockImplementation(() => {
        callCount++;
        if (callCount < 3) {
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

      expect(callCount).toBe(3);
      expect(result).toMatchObject({
        status: 'fulfilled',
        data: {
          status: 'success',
          data: [expect.objectContaining({ id: 1, name: 'Rick Sanchez' })],
          info: expect.objectContaining({ count: 826, pages: 42 }),
        },
      });
    });
  });
});
