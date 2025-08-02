const RICKMORTY_SEARCH_KEY = 'rickmorty-search-term';
const RICKMORTY_HISTORY_KEY = 'rickmorty-search-history';

export const useStorage = () => {
  const getSearchTerm = (): string => {
    try {
      const term = localStorage.getItem(RICKMORTY_SEARCH_KEY);
      return term ? JSON.parse(term) : '';
    } catch (error) {
      console.error('Error reading from the multiverse database:', error);
      return '';
    }
  };

  const saveSearchTerm = (term: string): void => {
    try {
      localStorage.setItem(RICKMORTY_SEARCH_KEY, JSON.stringify(term));

      const history = getSearchHistory();
      if (term && !history.includes(term)) {
        const newHistory = [term, ...history].slice(0, 10);
        localStorage.setItem(RICKMORTY_HISTORY_KEY, JSON.stringify(newHistory));
      }
    } catch (error) {
      console.error('Error saving to portal gun memory:', error);
    }
  };

  const clearSearchTerm = (): void => {
    try {
      localStorage.removeItem(RICKMORTY_SEARCH_KEY);
    } catch (error) {
      console.error('Error clearing dimension cache:', error);
    }
  };

  const getSearchHistory = (): string[] => {
    try {
      const history = localStorage.getItem(RICKMORTY_HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error accessing interdimensional records:', error);
      return [];
    }
  };

  const clearSearchHistory = (): void => {
    try {
      localStorage.removeItem(RICKMORTY_HISTORY_KEY);
    } catch (error) {
      console.error('Error purging multiverse logs:', error);
    }
  };

  return {
    getSearchTerm,
    saveSearchTerm,
    clearSearchTerm,
    getSearchHistory,
    clearSearchHistory,
  };
};
