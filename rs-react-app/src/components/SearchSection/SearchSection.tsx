// import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import styles from './SearchSection.module.scss';
// import Button from '../ui/Button/Button';
// import { useStorage } from '../../shared/services/storageService';
// import { useSearchCharactersQuery } from '../../store/apiSlice';
// import type { CharacterDetails } from '../../types/types';
// import { useTheme } from '../../shared/hooks/useTheme';
// import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

// interface SearchSectionProps {
//   onSearchResults: (
//     results: CharacterDetails[],
//     searchTerm: string,
//     totalPages: number
//   ) => void;
//   onLoadingChange: (loading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
//   currentPage: number;
//   setCurrentPage: (page: number) => void;
// }

// const SearchSection = ({
//   onSearchResults,
//   onLoadingChange,
//   onErrorChange,
//   currentPage,
//   setCurrentPage,
// }: SearchSectionProps) => {
//   const { theme } = useTheme();
//   const { getSearchTerm, saveSearchTerm } = useStorage();
//   const [searchParams] = useSearchParams();
//   const initialQuery = searchParams.get('query') || getSearchTerm() || '';

//   const [inputValue, setInputValue] = useState(initialQuery);
//   const { data, isLoading, error, refetch } = useSearchCharactersQuery({
//     query: inputValue.trim(),
//     page: currentPage,
//   });

//   useEffect(() => {
//     if (data) {
//       onSearchResults(data.data, inputValue.trim(), data.info?.pages || 1);
//       if (inputValue.trim()) saveSearchTerm(inputValue.trim());
//     }
//     onLoadingChange(isLoading);
//     onErrorChange(
//       error
//         ? isFetchBaseQueryError(error) &&
//           typeof error.data === 'object' &&
//           'message' in (error.data as object)
//           ? (error.data as { message: string }).message
//           : 'API request failed'
//         : null
//     );
//   }, [
//     data,
//     isLoading,
//     error,
//     currentPage,
//     inputValue,
//     onSearchResults,
//     onLoadingChange,
//     onErrorChange,
//     saveSearchTerm,
//   ]);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const trimmedValue = inputValue.trim();
//     setCurrentPage(1); // Reset to page 1
//     if (trimmedValue !== inputValue.trim()) {
//       setInputValue(trimmedValue);
//     }
//     refetch(); // Trigger refetch with new params
//   };

//   return (
//     <section
//       className={`${styles.searchSection} ${styles[theme]}`}
//       data-testid="search-section"
//     >
//       <form onSubmit={handleSubmit} className={styles.searchForm}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Search characters..."
//           className={styles.searchInput}
//           disabled={isLoading}
//           aria-label="Search characters"
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           aria-label={isLoading ? 'Searching...' : 'Search'}
//         >
//           {isLoading ? 'Searching...' : 'Search'}
//         </Button>
//       </form>
//       {error && (
//         <div className={styles.error}>
//           Error:{' '}
//           {isFetchBaseQueryError(error) &&
//           typeof error.data === 'object' &&
//           'message' in (error.data as object)
//             ? (error.data as { message: string }).message
//             : 'Unknown error'}
//         </div>
//       )}
//       <button onClick={() => refetch()} disabled={isLoading}>
//         Force Refresh
//       </button>
//     </section>
//   );
// };

// const isFetchBaseQueryError = (
//   error: unknown
// ): error is FetchBaseQueryError => {
//   if (error === null || typeof error !== 'object') {
//     return false;
//   }
//   const errorObj = error as FetchBaseQueryError;
//   try {
//     return 'status' in errorObj && typeof errorObj.status === 'number';
//   } catch {
//     return false;
//   }
// };

// export default SearchSection;

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './SearchSection.module.scss';
import Button from '../ui/Button/Button';
import { useStorage } from '../../shared/services/storageService';
import { useSearchCharactersQuery } from '../../store/apiSlice';
import type { CharacterDetails } from '../../types/types';
import { useTheme } from '../../shared/hooks/useTheme';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterDetails[],
    searchTerm: string,
    totalPages: number
  ) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const SearchSection = ({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
  currentPage,
  setCurrentPage,
}: SearchSectionProps) => {
  const { theme } = useTheme();
  const { getSearchTerm, saveSearchTerm } = useStorage();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('query') || getSearchTerm() || '';

  const [inputValue, setInputValue] = useState(initialQuery);
  const [isRefetching, setIsRefetching] = useState(false);
  const { data, isLoading, error, refetch } = useSearchCharactersQuery({
    query: inputValue.trim(),
    page: currentPage,
  });

  useEffect(() => {
    if (data) {
      onSearchResults(data.data, inputValue.trim(), data.info?.pages || 1);
      if (inputValue.trim()) saveSearchTerm(inputValue.trim());
    }
    onLoadingChange(isLoading || isRefetching); // Include refetching state
    onErrorChange(
      error
        ? isFetchBaseQueryError(error) &&
          typeof error.data === 'object' &&
          'message' in (error.data as object)
          ? (error.data as { message: string }).message
          : 'API request failed'
        : null
    );
  }, [
    data,
    isLoading,
    isRefetching,
    error,
    inputValue,
    onSearchResults,
    onLoadingChange,
    onErrorChange,
    saveSearchTerm,
  ]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    setCurrentPage(1);
    if (trimmedValue !== inputValue.trim()) {
      setInputValue(trimmedValue);
    }
    refetch();
  };

  const handleForceRefresh = () => {
    if (!isRefetching) {
      setIsRefetching(true);
      refetch().finally(() => setIsRefetching(false));
    }
  };

  return (
    <section
      className={`${styles.searchSection} ${styles[theme]}`}
      data-testid="search-section"
    >
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
      {error && (
        <div className={styles.error}>
          Error:{' '}
          {isFetchBaseQueryError(error) &&
          typeof error.data === 'object' &&
          'message' in (error.data as object)
            ? (error.data as { message: string }).message
            : 'Unknown error'}
        </div>
      )}
      {data && (
        <button
          onClick={handleForceRefresh}
          disabled={isLoading || isRefetching}
        >
          {isLoading || isRefetching ? 'Refreshing...' : 'Force Refresh'}
        </button>
      )}
    </section>
  );
};

const isFetchBaseQueryError = (
  error: unknown
): error is FetchBaseQueryError => {
  if (error === null || typeof error !== 'object') {
    return false;
  }
  const errorObj = error as FetchBaseQueryError;
  try {
    return 'status' in errorObj && typeof errorObj.status === 'number';
  } catch {
    return false;
  }
};

export default SearchSection;
