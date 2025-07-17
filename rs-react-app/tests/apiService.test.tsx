import ApiService from '../src/services/apiService';
import type { CharacterDetails, ApiResponse } from '../src/types/types';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Test data
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
): ApiResponse => ({
  info: { count, pages: Math.ceil(count / 20), next: null, prev: null },
  results,
});

const mockFetch = vi.fn();
global.fetch = mockFetch as typeof global.fetch;

describe('ApiService', () => {
  const BASE_URL = 'https://rickandmortyapi.com/api';

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('makeRequest', () => {
    it('handles successful requests', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ data: 'test' }),
      });

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
      });

      const result = await ApiService['makeRequest'](`${BASE_URL}/error`);
      expect(result).toEqual({
        status: 'error',
        message: 'No characters found',
      });
    });

    it('handles network errors', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'));
      const result = await ApiService['makeRequest'](`${BASE_URL}/error`);
      expect(result).toEqual({ status: 'error', message: 'Network error' });
    });
  });

  describe('fetchInitialCharacters', () => {
    it('limits results to requested count', async () => {
      const characters = Array(50).fill(mockCharacter);
      mockFetch.mockResolvedValue(
        createMockSuccessResponse(createMockApiResponse(characters, 50))
      );
      const result = await ApiService.fetchInitialCharacters(25);

      if (result.status === 'success') {
        expect(result.data.length).toBe(25);
      } else {
        throw new Error('Expected success response');
      }
    });
  });

  describe('searchCharacters', () => {
    it('searches with encoded term', async () => {
      mockFetch.mockResolvedValue(
        createMockSuccessResponse(createMockApiResponse([mockCharacter]))
      );
      await ApiService.searchCharacters('Rick Sanchez');
      expect(mockFetch).toHaveBeenCalledWith(
        `${BASE_URL}/character/?name=Rick%20Sanchez`
      );
    });

    it('falls back to initial fetch when search term is empty', async () => {
      mockFetch.mockResolvedValue(
        createMockSuccessResponse(createMockApiResponse([mockCharacter]))
      );
      await ApiService.searchCharacters('   ');
      expect(mockFetch).toHaveBeenCalledWith(`${BASE_URL}/character`);
    });

    it('handles no results', async () => {
      mockFetch.mockResolvedValue(createMockErrorResponse(404));
      const result = await ApiService.searchCharacters('Unknown');
      expect(result).toEqual({
        status: 'error',
        message: 'No characters found',
      });
    });
  });

  describe('mapToResultItems', () => {
    it('maps characters to result items', () => {
      const result = ApiService.mapToResultItems([mockCharacter]);
      expect(result).toEqual([
        {
          id: 1,
          name: 'Rick Sanchez',
          description: 'Human - Alive',
          url: '',
          gender: 'Male',
          image: mockCharacter.image,
          status: 'Alive',
          species: 'Human',
        },
      ]);
    });

    it('handles empty array', () => {
      const result = ApiService.mapToResultItems([]);
      expect(result).toEqual([]);
    });
  });

  describe('getErrorMessage', () => {
    it('returns specific messages for known status codes', () => {
      expect(ApiService['getErrorMessage'](400)).toBe(
        'Invalid search parameters'
      );
      expect(ApiService['getErrorMessage'](404)).toBe('No characters found');
      expect(ApiService['getErrorMessage'](429)).toBe('Too many requests');
      expect(ApiService['getErrorMessage'](500)).toBe('Server error');
    });

    it('returns generic message for unknown status codes', () => {
      expect(ApiService['getErrorMessage'](418)).toBe('API error (418)');
    });
  });
});

function createMockSuccessResponse<T>(data: T): Response {
  return {
    ok: true,
    status: 200,
    json: async () => data,
  } as Response;
}

function createMockErrorResponse(status: number): Response {
  return {
    ok: false,
    status,
    json: async () => ({}),
  } as Response;
}
