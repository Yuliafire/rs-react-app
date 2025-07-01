import React from 'react';
import styles from './SearchSection.module.scss';
import type { CharacterDetails } from '../../types/types';
import storageService from '../../services/storageService';
import Button from '../ui/Button/Button';

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

interface RickAndMortyApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }[];
}

class SearchSection extends React.Component<
  SearchSectionProps,
  SearchSectionState
> {
  private apiTimeout: number;

  constructor(props: SearchSectionProps) {
    super(props);
    this.state = {
      inputValue: storageService.getSearchTerm() || '',
      isLoading: false,
      error: null,
    };
    this.apiTimeout = Number(import.meta.env.VITE_API_TIMEOUT) || 5000;
  }

  componentDidMount() {
    const searchTerm = this.state.inputValue.trim();
    if (searchTerm) {
      this.performSearch(searchTerm);
    }
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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.apiTimeout);

      const response = await fetch(
        `${import.meta.env.VITE_RM_API_URL}/character/?name=${encodeURIComponent(term)}`,
        {
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No characters found matching your search');
        }
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: RickAndMortyApiResponse = await response.json();
      const results = data.results || [];

      if (results.length === 0) {
        throw new Error(
          term === ''
            ? 'No characters available'
            : 'No characters found matching your search'
        );
      }

      const formattedResults: CharacterDetails[] = results.map((character) => ({
        id: character.id.toString(),
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
          url: character.origin.url,
        },
        location: {
          name: character.location.name,
          url: character.location.url,
        },
        image: character.image,
        episode: character.episode,
        url: character.url,
        created: character.created,
      }));

      this.props.onSearchResults(formattedResults);
      storageService.saveSearchTerm(term);
    } catch (error) {
      const errorMessage = this.getErrorMessage(error);
      this.setState({ error: errorMessage });
      this.props.onErrorChange?.(errorMessage);
      this.props.onSearchResults([]);
    } finally {
      this.setState({ isLoading: false });
      this.props.onLoadingChange?.(false);
    }
  };

  getErrorMessage = (error: unknown): string => {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return 'Request timed out. Please try again.';
    }
    if (error instanceof Error) {
      return error.message.includes('404')
        ? 'No Rick and Morty characters found'
        : error.message;
    }
    return 'Search failed due to an unknown error';
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
            placeholder="Search Rick and Morty characters..."
            aria-label="Search Rick and Morty characters"
            className={styles.searchInput}
            disabled={isLoading}
          />

          <Button
            type="submit"
            disabled={isLoading}
            aria-label={isLoading ? 'Searching...' : 'Search'}
          >
            {isLoading ? (
              <span className={styles.spinner} aria-hidden="true" />
            ) : (
              'Search'
            )}
          </Button>
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
