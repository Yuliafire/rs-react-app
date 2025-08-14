'use client';

import { useState, useCallback } from 'react';
import { useParams } from 'next/navigation';
import SearchSection from '../../components/SearchSection/SearchSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Home.module.scss';
import type { CharacterDetails } from '../../types/types';
import { useTheme } from '../../shared/hooks/useTheme';

const Home = () => {
  const { theme } = useTheme();
  const params = useParams() as { page: string };
  const { page: pageParam } = params;
  const initialPage = parseInt(pageParam, 10) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastSearchTerm, setLastSearchTerm] = useState<string>('');


   const handleSearchResults = useCallback(
    (searchResults: CharacterDetails[] | null, searchTerm: string, pages: number) => {
      setResults(searchResults || []);
      setTotalPages(pages);
      if (searchTerm && pages > 0 && searchTerm !== lastSearchTerm) {
        setCurrentPage(1);
        setLastSearchTerm(searchTerm); 
      }
    },
    [lastSearchTerm]
  );

  const handlePageChange = useCallback((newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }, [totalPages]);

  const handleCardClick = useCallback((cardId: number) => {
    console.log('Card clicked:', cardId);
  }, []);

  return (
    <div className={`${styles.home} ${styles[theme]}`}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div className={styles.searchResults}>
          <div className={styles.resultsBox}>
            <ResultsSection
              results={results}
              loading={loading}
              error={error}
              onCardClick={handleCardClick}
            />
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

