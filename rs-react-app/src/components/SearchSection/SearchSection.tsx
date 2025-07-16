import React from 'react';
import styles from './SearchSection.module.scss';
import Button from '../ui/Button/Button';
import storageService from '../../services/storageService';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';

interface SearchSectionProps {
  onSearchResults: (results: CharacterDetails[], searchTerm: string) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
}

interface SearchSectionState {
  inputValue: string;
  isLoading: boolean;
}

class SearchSection extends React.Component<
  SearchSectionProps,
  SearchSectionState
> {
  state: SearchSectionState = {
    inputValue: storageService.getSearchTerm() || '',
    isLoading: false,
  };

  componentDidMount() {
    const searchTerm = this.state.inputValue.trim();
    if (searchTerm) {
      this.performSearch(searchTerm);
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await this.performSearch(this.state.inputValue.trim());
  };

  //   this.setState({ isLoading: true });
  //   this.props.onLoadingChange(true);
  //   this.props.onErrorChange(null);

  //   const response = await ApiService.searchCharacters(term);

  //   if (response.status === 'success') {
  //     this.props.onSearchResults(response.data, term);
  //     storageService.saveSearchTerm(term);
  //   } else {
  //     this.props.onErrorChange(response.message);
  //     this.props.onSearchResults([], term);
  //   }

  //   this.setState({ isLoading: false });
  //   this.props.onLoadingChange(false);
  // };

  // In your SearchSection component
  performSearch = async (term: string) => {
    this.setState({ isLoading: true });
    this.props.onLoadingChange(true);
    this.props.onErrorChange(null);

    try {
      const response = (await ApiService.searchCharacters(term)) || {};

      if (response.status === 'success') {
        this.props.onSearchResults(response.data || [], term);
        storageService.saveSearchTerm(term);
      } else {
        this.props.onErrorChange(response.message || 'Unknown error');
        this.props.onSearchResults([], term);
      }
    } catch (error) {
      this.props.onErrorChange('API request failed');
      this.props.onSearchResults([], term);
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
      this.props.onLoadingChange(false);
    }
  };

  render() {
    const { inputValue, isLoading } = this.state;

    return (
      <section className={styles.searchSection}>
        <form onSubmit={this.handleSubmit} className={styles.searchForm}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Search characters..."
            className={styles.searchInput}
            disabled={isLoading}
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
  }
}

export default SearchSection;
