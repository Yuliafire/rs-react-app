// import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import { useStorage } from '../../services/storageService';
// import ApiService from '../../services/apiService';
// import type { CharacterDetails } from '../../types/types';

// interface SearchSectionProps {
//   onSearchResults: (
//     results: CharacterDetails[],
//     totalPages: number,
//     searchTerm: string
//   ) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
//   page: number;
// }

// const SearchSection = ({
//   onSearchResults,
//   onLoadingChange,
//   onErrorChange,
//   page,
// }: SearchSectionProps) => {
//   const { getSearchTerm, saveSearchTerm } = useStorage();
//   const [inputValue, setInputValue] = useState(getSearchTerm() || '');
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const searchTerm = inputValue.trim();
//     if (searchTerm) {
//       performSearch(searchTerm);
//     }
//   }, [page]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const performSearch = async (term: string) => {
//     setIsLoading(true);
//     onLoadingChange(true);
//     onErrorChange(null);

//     try {
//       const response = await ApiService.searchCharacters(term, page);

//       if (response.status === 'success') {
//         onSearchResults(
//           response.data.characters,
//           response.data.totalPages,
//           term
//         );
//         saveSearchTerm(term);
//       } else {
//         onErrorChange(response.message || 'Unknown error');
//         onSearchResults([], 0, term);
//       }
//     } catch (error) {
//       onErrorChange('API request failed');
//       onSearchResults([], 0, term);
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//       onLoadingChange(false);
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const trimmedValue = inputValue.trim();
//     if (trimmedValue) {
//       await performSearch(trimmedValue);
//     }
//   };

//   return (
//     <section className={styles.searchSection}>
//       <form onSubmit={handleSubmit} className={styles.searchForm}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Search characters..."
//           className={styles.searchInput}
//           disabled={isLoading}
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           aria-label={isLoading ? 'Searching...' : 'Search'}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </Button>
//       </form>
//     </section>
//   );
// };

// export default SearchSection;

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
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

const SearchSection = ({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
}: SearchSectionProps) => {
  const { getSearchTerm, saveSearchTerm } = useStorage();
  const [inputValue, setInputValue] = useState(getSearchTerm() || '');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchTerm = inputValue.trim();
    if (searchTerm) {
      performSearch(searchTerm);
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const performSearch = async (term: string) => {
    setIsLoading(true);
    onLoadingChange(true);
    onErrorChange(null);

    try {
      const response = await ApiService.searchCharacters(term);

      if (response.status === 'success') {
        onSearchResults(response.data, term);
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
