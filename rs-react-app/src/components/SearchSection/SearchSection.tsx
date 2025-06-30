import React from 'react';
import styles from './SearchSection.module.scss';
import ApiService from '../../services/apiService';
import storageService from '../../services/storageService';
import type { CharacterDetails } from '../../types/types';

interface SearchSectionProps {
  onSearchResults: (results: CharacterDetails[]) => void;
  onLoadingChange?: (loading: boolean) => void;
  onErrorChange?: (error: string | null) => void;
}

interface SearchSectionState {
  inputValue: string;
  isLoading: boolean;
  error: string | null;
}

class SearchSection extends React.Component<
  SearchSectionProps,
  SearchSectionState
> {
  constructor(props: SearchSectionProps) {
    super(props);
    this.state = {
      inputValue: storageService.getSearchTerm() || '',
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    const searchTerm = this.state.inputValue.trim();
    this.performSearch(searchTerm);
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value, error: null });
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const processedTerm = this.state.inputValue.trim();
    await this.performSearch(processedTerm);
  };

  performSearch = async (term: string) => {
    this.setState({ isLoading: true, error: null });
    this.props.onLoadingChange?.(true);

    try {
      const searchResponse = await ApiService.searchItems(term.trim());
      if (searchResponse.status === 'error') {
        throw new Error(searchResponse.message);
      }

      if (!searchResponse.data || searchResponse.data.length === 0) {
        throw new Error(
          term.trim() === ''
            ? 'No characters available in database'
            : 'No characters found matching your search'
        );
      }

      let filteredResults = searchResponse.data;
      if (term.trim() !== '') {
        filteredResults = searchResponse.data.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        );

        if (filteredResults.length === 0) {
          throw new Error('No characters found matching your search');
        }
      }

      let resultsToProcess = filteredResults;
      if (term.trim() !== '') {
        resultsToProcess = searchResponse.data.slice(0, 10);

        if (resultsToProcess.length < 10) {
          this.props.onSearchResults(
            resultsToProcess.map((item) => ({
              id: item.id,
              name: item.name,
              gender: item.gender || 'Unknown',
              yearOfBirth: item.yearOfBirth,
              yearOfDeath: item.yearOfDeath,
              maritalStatus: item.maritalStatus || 'Unknown',
            }))
          );
          storageService.saveSearchTerm(term);
          return;
        }
      }

      const detailedResults = await Promise.all(
        resultsToProcess.map(async (item) => {
          try {
            const detailResponse = await ApiService.getItemDetails(item.id);
            if (detailResponse.status === 'success') {
              return {
                id: item.id,
                name: item.name,
                gender: detailResponse.data.gender || 'Unknown',
                yearOfBirth: detailResponse.data.yearOfBirth,
                yearOfDeath: detailResponse.data.yearOfDeath,
                maritalStatus: detailResponse.data.maritalStatus || 'Unknown',
              };
            }
            return null;
          } catch (error) {
            console.warn(`Failed to fetch details for ${item.id}:`, error);
            return {
              id: item.id,
              name: item.name,
              gender: item.gender,
              yearOfBirth: item.yearOfBirth,
              yearOfDeath: item.yearOfDeath,
              maritalStatus: item.maritalStatus,
            };
          }
        })
      );

      const validResults = detailedResults.filter(
        (result) => result !== null
      ) as CharacterDetails[];

      if (validResults.length === 0) {
        throw new Error('No complete character records found');
      }

      this.props.onSearchResults(validResults);
      storageService.saveSearchTerm(term);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Search failed due to an unknown error';

      this.setState({ error: errorMessage });
      this.props.onErrorChange?.(errorMessage);
      this.props.onSearchResults([]);
    } finally {
      this.setState({ isLoading: false });
      this.props.onLoadingChange?.(false);
    }
  };

  render() {
    const { inputValue, isLoading, error } = this.state;

    return (
      <section className={styles.searchSection}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Search Star Trek characters..."
            aria-label="Search Star Trek characters"
            className={styles.searchInput}
            disabled={isLoading}
          />

          <button
            type="submit"
            className={styles.searchButton}
            disabled={isLoading}
            aria-label={isLoading ? 'Searching...' : 'Search'}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {error && (
          <div className={styles.errorMessage} role="alert">
            ⚠️ {error}
          </div>
        )}
      </section>
    );
  }
}

export default SearchSection;
