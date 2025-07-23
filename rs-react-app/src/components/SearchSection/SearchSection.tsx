// import React from 'react';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import { useStorage } from '../../services/storageService';
// import ApiService from '../../services/apiService';
// import type { CharacterDetails } from '../../types/types';

// interface SearchSectionProps {
//   onSearchResults: (results: CharacterDetails[], searchTerm: string) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
// }

// interface SearchSectionState {
//   inputValue: string;
//   isLoading: boolean;
// }

// class SearchSection extends React.Component<
//   SearchSectionProps,
//   SearchSectionState
// > {
//   state: SearchSectionState = {
//     inputValue: useStorage.getSearchTerm() || '',
//     isLoading: false,
//   };

//   componentDidMount() {
//     const searchTerm = this.state.inputValue.trim();
//     if (searchTerm) {
//       this.performSearch(searchTerm);
//     }
//   }

//   handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ inputValue: e.target.value });
//   };

//   handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const trimmedValue = this.state.inputValue.trim();
//     if (trimmedValue) {
//       await this.performSearch(trimmedValue);
//     }
//   };

//   performSearch = async (term: string) => {
//     this.setState({ isLoading: true });
//     this.props.onLoadingChange(true);
//     this.props.onErrorChange(null);

//     try {
//       const response = (await ApiService.searchCharacters(term)) || {};

//       if (response.status === 'success') {
//         this.props.onSearchResults(response.data || [], term);
//         useStorage.saveSearchTerm(term);
//       } else {
//         this.props.onErrorChange(response.message || 'Unknown error');
//         this.props.onSearchResults([], term);
//       }
//     } catch (error) {
//       this.props.onErrorChange('API request failed');
//       this.props.onSearchResults([], term);
//       console.log(error);
//     } finally {
//       this.setState({ isLoading: false });
//       this.props.onLoadingChange(false);
//     }
//   };

//   render() {
//     const { inputValue, isLoading } = this.state;

//     return (
//       <section className={styles.searchSection}>
//         <form onSubmit={this.handleSubmit} className={styles.searchForm}>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={this.handleInputChange}
//             placeholder="Search characters..."
//             className={styles.searchInput}
//             disabled={isLoading}
//           />
//           <Button
//             type="submit"
//             disabled={isLoading}
//             aria-label={isLoading ? 'Searching...' : 'Search'}
//           >
//             {isLoading ? 'Searching...' : 'Search'}
//           </Button>
//         </form>
//       </section>
//     );
//   }
// }

// export default SearchSection;

// src/components/SearchSection.tsx
import React, { useState, useEffect, type FormEvent } from 'react';
import styles from './SearchSection.module.scss';
import Button from '../ui/Button/Button';
import { useStorage } from '../../services/storageService';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';

interface SearchSectionProps {
  onSearchResults: (results: CharacterDetails[], searchTerm: string) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
}) => {
  const { getSearchTerm, saveSearchTerm } = useStorage();
  const [inputValue, setInputValue] = useState<string>(getSearchTerm() || '');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const searchTerm = inputValue.trim();
    if (searchTerm) {
      performSearch(searchTerm);
    }
  }, []); // Empty dependency array to mimic componentDidMount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const performSearch = async (term: string) => {
    setIsLoading(true);
    onLoadingChange(true);
    onErrorChange(null);

    try {
      const response = (await ApiService.searchCharacters(term)) || {};

      if (response.status === 'success') {
        onSearchResults(response.data || [], term);
        saveSearchTerm(term);
      } else {
        onErrorChange(response.message || 'Unknown error');
        onSearchResults([], term);
      }
    } catch (error) {
      onErrorChange('API request failed');
      onSearchResults([], term);
      console.error(error);
    } finally {
      setIsLoading(false);
      onLoadingChange(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue) {
      await performSearch(trimmedValue);
    }
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
