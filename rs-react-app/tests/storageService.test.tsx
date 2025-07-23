import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useStorage } from '../src/services/storageService';

const RICKMORTY_SEARCH_KEY = 'rickmorty-search-term';
const RICKMORTY_HISTORY_KEY = 'rickmorty-search-history';

describe('storageService', () => {
  let mockStorage: Record<string, string> = {};

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
        mockStorage[key] = undefined as unknown as string;
      }
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('getSearchTerm', () => {
    it('should return empty string when no term is stored', () => {
      expect(useStorage.getSearchTerm()).toBe('');
    });

    it('should return stored term when exists', () => {
      const testTerm = 'Rick Sanchez';
      mockStorage[RICKMORTY_SEARCH_KEY] = JSON.stringify(testTerm);
      expect(useStorage.getSearchTerm()).toBe(testTerm);
    });

    it('should return empty string when JSON is invalid', () => {
      mockStorage[RICKMORTY_SEARCH_KEY] = 'invalid-json';
      expect(useStorage.getSearchTerm()).toBe('');
    });
  });

  describe('saveSearchTerm', () => {
    it('should save term to localStorage', () => {
      const testTerm = 'Morty';
      useStorage.saveSearchTerm(testTerm);
      expect(JSON.parse(mockStorage[RICKMORTY_SEARCH_KEY])).toBe(testTerm);
    });

    it('should add term to search history', () => {
      const testTerm = 'Summer';
      useStorage.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history).toContain(testTerm);
    });

    it('should not duplicate terms in history', () => {
      const testTerm = 'Jerry';
      useStorage.saveSearchTerm(testTerm);
      useStorage.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history.filter((x: string) => x === testTerm).length).toBe(1);
    });

    it('should limit history to 10 items', () => {
      for (let i = 0; i < 15; i++) {
        useStorage.saveSearchTerm(`Term ${i}`);
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
      useStorage.clearSearchTerm();
      expect(mockStorage[RICKMORTY_SEARCH_KEY]).toBeUndefined();
    });
  });

  describe('getSearchHistory', () => {
    it('should return empty array when no history exists', () => {
      expect(useStorage.getSearchHistory()).toEqual([]);
    });

    it('should return stored history', () => {
      const testHistory = ['Rick', 'Morty'];
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(testHistory);
      expect(useStorage.getSearchHistory()).toEqual(testHistory);
    });

    it('should return empty array when JSON is invalid', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = 'invalid-json';
      expect(useStorage.getSearchHistory()).toEqual([]);
    });
  });

  describe('clearSearchHistory', () => {
    it('should remove history from storage', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(['Rick']);
      useStorage.clearSearchHistory();
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

      expect(useStorage.getSearchTerm()).toBe('');
      expect(useStorage.getSearchHistory()).toEqual([]);
      expect(() => useStorage.saveSearchTerm('test')).not.toThrow();
      expect(() => useStorage.clearSearchTerm()).not.toThrow();
    });
  });
});
