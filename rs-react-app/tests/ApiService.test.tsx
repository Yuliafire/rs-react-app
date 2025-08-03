import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { CharacterDetails } from '../src/types/types';
import ApiService from '../src/shared/services/apiService';

const mockCharacter: CharacterDetails = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: '' },
  location: { name: 'Citadel of Ricks', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: '',
};

const createMockApiResponse = (
  results: CharacterDetails[],
  count = results.length
) => ({
  info: { count, pages: Math.ceil(count / 20), next: null, prev: null },
  results,
});

const mockFetch = vi.fn();
globalThis.fetch = mockFetch as typeof globalThis.fetch;

describe('ApiService', () => {
  const BASE_URL = 'https://rickandmortyapi.com/api';

  beforeEach(() => {
    vi.clearAllMocks();
    ApiService['instance'] = undefined;
    vi.stubEnv('VITE_RM_API_URL', BASE_URL);
  });

  describe('makeRequest', () => {
    it('handles successful requests', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ data: 'test' }),
      } as Partial<Response>);

      const result = await ApiService['makeRequest']<{ data: string }>(
        `${BASE_URL}/test`
      );
      expect(result).toEqual({ status: 'success', data: { data: 'test' } });
    });

    it('handles HTTP errors', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({}),
      } as Partial<Response>);

      const result = await ApiService['makeRequest'](`${BASE_URL}/error`);
      expect(result).toEqual({
        status: 'error',
        data: {},
        message: 'No characters found',
      });
    });

    it('handles network errors', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'));
      const result = await ApiService['makeRequest'](`${BASE_URL}/error`);
      expect(result).toEqual({
        status: 'error',
        data: {},
        message: 'Network error',
      });
    }, 10000);
  });

  describe('fetchInitialCharacters', () => {
    it('fetches initial characters successfully', async () => {
      const characters = [mockCharacter];
      mockFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => createMockApiResponse(characters),
      } as Partial<Response>);

      const result = await ApiService.fetchInitialCharacters(1);
      if (result.status === 'success') {
        expect(result.data).toEqual(characters);
        expect(result.info).toEqual(createMockApiResponse(characters).info);
      } else {
        throw new Error('Expected success response');
      }
    });
  });

  describe('searchCharacters', () => {
    it('handles no results', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
        json: async () => ({}),
      } as Partial<Response>);

      const result = await ApiService.searchCharacters('Unknown');
      expect(result).toEqual({
        status: 'error',
        data: {},
        message: 'No characters found',
      });
    });
  });
});
