const STARFLEET_SEARCH_KEY = 'stapi-search-term';
const STARFLEET_HISTORY_KEY = 'stapi-search-history';

const storageService = {
  getSearchTerm(): string {
    try {
      const term = localStorage.getItem(STARFLEET_SEARCH_KEY);
      return term ? JSON.parse(term) : '';
    } catch (error) {
      console.error('Error reading from Starfleet database:', error);
      return '';
    }
  },

  saveSearchTerm(term: string): void {
    try {
      localStorage.setItem(STARFLEET_SEARCH_KEY, JSON.stringify(term));

      // Update search history
      const history = this.getSearchHistory();
      if (term && !history.includes(term)) {
        const newHistory = [term, ...history].slice(0, 10); // Keep last 10 searches
        localStorage.setItem(STARFLEET_HISTORY_KEY, JSON.stringify(newHistory));
      }
    } catch (error) {
      console.error('Error saving to Starfleet database:', error);
    }
  },

  clearSearchTerm(): void {
    try {
      localStorage.removeItem(STARFLEET_SEARCH_KEY);
    } catch (error) {
      console.error('Error clearing Starfleet records:', error);
    }
  },

  getSearchHistory(): string[] {
    try {
      const history = localStorage.getItem(STARFLEET_HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error accessing Starfleet logs:', error);
      return [];
    }
  },

  clearSearchHistory(): void {
    try {
      localStorage.removeItem(STARFLEET_HISTORY_KEY);
    } catch (error) {
      console.error('Error purging Starfleet logs:', error);
    }
  },
};

export default storageService;
