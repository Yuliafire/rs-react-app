// storageService.test.ts
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import storageService from '../src/services/storageService';

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
      expect(storageService.getSearchTerm()).toBe('');
    });

    it('should return stored term when exists', () => {
      const testTerm = 'Rick Sanchez';
      mockStorage[RICKMORTY_SEARCH_KEY] = JSON.stringify(testTerm);
      expect(storageService.getSearchTerm()).toBe(testTerm);
    });

    it('should return empty string when JSON is invalid', () => {
      mockStorage[RICKMORTY_SEARCH_KEY] = 'invalid-json';
      expect(storageService.getSearchTerm()).toBe('');
    });
  });

  describe('saveSearchTerm', () => {
    it('should save term to localStorage', () => {
      const testTerm = 'Morty';
      storageService.saveSearchTerm(testTerm);
      expect(JSON.parse(mockStorage[RICKMORTY_SEARCH_KEY])).toBe(testTerm);
    });

    it('should add term to search history', () => {
      const testTerm = 'Summer';
      storageService.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history).toContain(testTerm);
    });

    it('should not duplicate terms in history', () => {
      const testTerm = 'Jerry';
      storageService.saveSearchTerm(testTerm);
      storageService.saveSearchTerm(testTerm);
      const history = JSON.parse(mockStorage[RICKMORTY_HISTORY_KEY] || '[]');
      expect(history.filter((x: string) => x === testTerm).length).toBe(1);
    });

    it('should limit history to 10 items', () => {
      for (let i = 0; i < 15; i++) {
        storageService.saveSearchTerm(`Term ${i}`);
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
      storageService.clearSearchTerm();
      expect(mockStorage[RICKMORTY_SEARCH_KEY]).toBeUndefined();
    });
  });

  describe('getSearchHistory', () => {
    it('should return empty array when no history exists', () => {
      expect(storageService.getSearchHistory()).toEqual([]);
    });

    it('should return stored history', () => {
      const testHistory = ['Rick', 'Morty'];
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(testHistory);
      expect(storageService.getSearchHistory()).toEqual(testHistory);
    });

    it('should return empty array when JSON is invalid', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = 'invalid-json';
      expect(storageService.getSearchHistory()).toEqual([]);
    });
  });

  describe('clearSearchHistory', () => {
    it('should remove history from storage', () => {
      mockStorage[RICKMORTY_HISTORY_KEY] = JSON.stringify(['Rick']);
      storageService.clearSearchHistory();
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

      expect(storageService.getSearchTerm()).toBe('');
      expect(storageService.getSearchHistory()).toEqual([]);
      expect(() => storageService.saveSearchTerm('test')).not.toThrow();
      expect(() => storageService.clearSearchTerm()).not.toThrow();
    });
  });
});
