import { useState, useEffect, useRef } from 'react';
import {
  useSearchParams,
  useParams,
  useNavigate,
  Outlet,
} from 'react-router-dom';
import SearchSection from '../../components/SearchSection/SearchSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Home.module.scss';
import type { CharacterDetails } from '../../types/types';
import { useTheme } from '../../shared/hooks/useTheme';

const Home = () => {
  const { theme } = useTheme();
  const { page: pageParam, id: idParam } = useParams<{
    page?: string;
    id?: string;
  }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialPage = !isNaN(parseInt(pageParam || '1', 10))
    ? parseInt(pageParam || '1', 10)
    : 1;
  const id = idParam ? parseInt(idParam, 10) : undefined;
  const queryParam = searchParams.get('query') || '';

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [query, setQuery] = useState(queryParam);
  const [selectedId, setSelectedId] = useState<number | undefined>(id);
  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mainPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newPage = !isNaN(parseInt(pageParam || '1', 10))
      ? parseInt(pageParam || '1', 10)
      : 1;
    if (newPage !== currentPage || query !== queryParam || id !== selectedId) {
      setCurrentPage(newPage);
      setQuery(queryParam);
      setSelectedId(id);
    }
  }, [pageParam, idParam, queryParam, currentPage, query, id]);

  const handleSearchResults = (
    results: CharacterDetails[] | null,
    searchTerm: string,
    totalPages: number
  ) => {
    if (results === null) {
      throw new Error('Search results are null');
    }
    setResults(results);
    setTotalPages(totalPages);

    if (searchTerm !== query) {
      try {
        setCurrentPage(1);
        navigate(
          `/${1}${searchTerm ? `?query=${encodeURIComponent(searchTerm)}` : ''}`
        );
      } catch (error) {
        console.error(error);
      }
    } else {
      const path = selectedId
        ? `/${currentPage}/${selectedId}`
        : `/${currentPage}`;
      try {
        navigate(
          `${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`
        );
      } catch (error) {
        console.error(error);
      }
    }
    setQuery(searchTerm);
  };

  const handleCardClick = (id: number | undefined) => {
    if (id === undefined) {
      throw new Error('Character ID is undefined in handleCardClick');
    }
    setSelectedId(id);
    try {
      navigate(
        `/${currentPage}/${id}${query ? `?query=${encodeURIComponent(query)}` : ''}`
      );
    } catch (error) {
      console.error(
        'Error occurred while navigating to character details:',
        error
      );
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) {
      console.error('Invalid page number:', newPage);
      return;
    }

    setCurrentPage(newPage);
    const path = selectedId ? `/${newPage}/${selectedId}` : `/${newPage}`;
    try {
      navigate(`${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className={`${styles.home} ${styles[theme]}`} ref={mainPanelRef}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={currentPage}
        />
        <div className="wrapper">
          <div className={styles.searchResults}>
            <div className="resultsBox">
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
      <Outlet />
    </div>
  );
};

export default Home;
