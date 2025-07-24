import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchSection.module.scss';
import Button from '../ui/Button/Button';
import { useStorage } from '../../services/storageService';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterDetails[],
    searchTerm: string,
    totalPages: number
  ) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  currentPage: number;
}

const SearchSection = ({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
  currentPage,
}: SearchSectionProps) => {
  const { getSearchTerm, saveSearchTerm } = useStorage();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || getSearchTerm() || '';
  const [inputValue, setInputValue] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    performSearch(inputValue.trim(), currentPage);
  }, [currentPage]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const performSearch = async (term: string, page: number) => {
    setIsLoading(true);
    onLoadingChange(true);
    onErrorChange(null);

    try {
      const response = await ApiService.searchCharacters(term, page);
      if (response.status === 'success') {
        onSearchResults(response.data, term, response.info?.pages || 1);
        if (term) saveSearchTerm(term);
      } else {
        onErrorChange(response.message || 'Unknown error');
        onSearchResults([], term, 1);
      }
    } catch (error) {
      onErrorChange('API request failed');
      onSearchResults([], term, 1);
      console.error(error);
    } finally {
      setIsLoading(false);
      onLoadingChange(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    await performSearch(trimmedValue, 1);
  };

  return (
    <section className={styles.searchSection}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search characters..."
          className={styles.searchInput}
          disabled={isLoading}
          aria-label="Search characters"
        />
        <Button
          type="submit"
          disabled={isLoading}
          aria-label={isLoading ? 'Searching...' : 'Search'}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </Button>
      </form>
    </section>
  );
};

export default SearchSection;
