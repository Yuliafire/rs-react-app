const STARWAR_SEARCH_KEY = 'stapi-search-term';
const STARWAR_HISTORY_KEY = 'stapi-search-history';

const storageService = {
  getSearchTerm(): string {
    try {
      const term = localStorage.getItem(STARWAR_SEARCH_KEY);
      return term ? JSON.parse(term) : '';
    } catch (error) {
      console.error('Error reading from Starfleet database:', error);
      return '';
    }
  },

  saveSearchTerm(term: string): void {
    try {
      localStorage.setItem(STARWAR_SEARCH_KEY, JSON.stringify(term));

      // Update search history
      const history = this.getSearchHistory();
      if (term && !history.includes(term)) {
        const newHistory = [term, ...history].slice(0, 10); 
        localStorage.setItem(STARWAR_HISTORY_KEY, JSON.stringify(newHistory));
      }
    } catch (error) {
      console.error('Error saving to Starwar database:', error);
    }
  },

  clearSearchTerm(): void {
    try {
      localStorage.removeItem(STARWAR_SEARCH_KEY);
    } catch (error) {
      console.error('Error clearing Starwar records:', error);
    }
  },

  getSearchHistory(): string[] {
    try {
      const history = localStorage.getItem(STARWAR_HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch (error) {
      console.error('Error accessing Starwar logs:', error);
      return [];
    }
  },

  clearSearchHistory(): void {
    try {
      localStorage.removeItem(STARWAR_HISTORY_KEY);
    } catch (error) {
      console.error('Error purging Starwar logs:', error);
    }
  },
};

export default storageService;
