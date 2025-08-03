import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useStorage } from '../src/shared/services/storageService';

const RICKMORTY_SEARCH_KEY = 'rickmorty-search-term';
const RICKMORTY_HISTORY_KEY = 'rickmorty-search-history';

describe('storageService', () => {
  let mockStorage: Record<string, string | undefined> = {};

  beforeEach(() => {
    mockStorage = {};

    vi.spyOn(Storage.prototype, 'getItem').mockImplementation((key: string) => {
      return mockStorage[key] || null;
    });

    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(
      (key: string, value: string) => {
        mockStorage[key] = value;
      }
    );

    vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(
      (key: string) => {
        mockStorage[key] = undefined;
      }
    );

    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getSearchTerm', () => {
    it('should return empty string when no term is stored', () => {
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchTerm()).toBe('');
    });

    it('should return stored term when exists', () => {
      const testTerm = 'Rick Sanchez';
      mockStorage[RICKMORTY_SEARCH_KEY] = JSON.stringify(testTerm);
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchTerm()).toBe(testTerm);
    });

    it('should return empty string when JSON is invalid', () => {
      mockStorage[RICKMORTY_SEARCH_KEY] = 'invalid-json';
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchTerm()).toBe('');
    });
  });

  describe('saveSearchTerm', () => {
    it('should add term to search history', () => {
      const testTerm = 'Summer';
      const { result } = renderHook(() => useStorage());
      result.current.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history).toContain(testTerm);
    });

    it('should not duplicate terms in history', () => {
      const testTerm = 'Jerry';
      const { result } = renderHook(() => useStorage());
      result.current.saveSearchTerm(testTerm);
      result.current.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history.filter((x: string) => x === testTerm).length).toBe(1);
    });

    it('should limit history to 10 items', () => {
      const { result } = renderHook(() => useStorage());
      for (let i = 0; i < 15; i++) {
        result.current.saveSearchTerm(`Term ${i}`);
      }
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history.length).toBe(10);
      expect(history[0]).toBe('Term 14');
      expect(history[9]).toBe('Term 5');
    });
  });

  describe('clearSearchTerm', () => {
    it('should remove search term from storage', () => {
      mockStorage[RICKMORTY_SEARCH_KEY] = JSON.stringify('Beth');
      const { result } = renderHook(() => useStorage());
      result.current.clearSearchTerm();
      expect(mockStorage[RICKMORTY_SEARCH_KEY]).toBeUndefined();
    });
  });

  describe('getSearchHistory', () => {
    it('should return empty array when no history exists', () => {
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchHistory()).toEqual([]);
    });

    it('should return stored history', () => {
      const testHistory = ['Rick', 'Morty'];
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(testHistory);
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchHistory()).toEqual(testHistory);
    });

    it('should return empty array when JSON is invalid', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = 'invalid-json';
      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchHistory()).toEqual([]);
    });
  });

  describe('clearSearchHistory', () => {
    it('should remove history from storage', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(['Rick']);
      const { result } = renderHook(() => useStorage());
      result.current.clearSearchHistory();
      expect(mockStorage[RICKMORTY_HISTORY_KEY]).toBeUndefined();
    });
  });

  describe('error handling', () => {
    it('should handle localStorage errors gracefully', () => {
      vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('Storage error');
      });
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Storage error');
      });
      vi.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => {
        throw new Error('Storage error');
      });

      const { result } = renderHook(() => useStorage());
      expect(result.current.getSearchTerm()).toBe('');
      expect(result.current.getSearchHistory()).toEqual([]);
      expect(() => result.current.saveSearchTerm('test')).not.toThrow();
      expect(() => result.current.clearSearchTerm()).not.toThrow();
      expect(() => result.current.clearSearchHistory()).not.toThrow();
    });
  });
});
