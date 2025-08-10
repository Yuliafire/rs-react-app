import { useState, useRef, useCallback, useEffect } from 'react';
import {
  useSearchParams,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
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
  const location = useLocation();

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
  const navigationTimeout = useRef<NodeJS.Timeout | null>(null);

  const performNavigation = useCallback(
    (path: string) => {
      if (navigationTimeout.current) clearTimeout(navigationTimeout.current);
      navigationTimeout.current = setTimeout(() => navigate(path), 100);
    },
    [navigate]
  );

  useEffect(() => {
    if (location.pathname.startsWith('/about')) {
      return;
    }

    setSelectedId(id);
  }, [id, location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith('/about')) return;
    setCurrentPage(initialPage);
  }, [initialPage, location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith('/about')) return;
    setQuery(queryParam);
  }, [queryParam, location.pathname]);

  useEffect(() => {
    if (location.pathname.startsWith('/about')) return;
    if (navigationTimeout.current) {
      clearTimeout(navigationTimeout.current);
      navigationTimeout.current = null;
    }
  }, [location.pathname, location.search]);

  const handleSearchResults = (
    searchResults: CharacterDetails[] | null,
    searchTerm: string,
    pages: number
  ) => {
    if (location.pathname.startsWith('/about')) return;
    if (searchResults === null) throw new Error('Search results are null');
    setResults(searchResults);
    setTotalPages(pages);

    if (searchTerm !== query) {
      setCurrentPage(1);
      const path = `/${1}${searchTerm ? `?query=${encodeURIComponent(searchTerm)}` : ''}`;
      performNavigation(path);
    } else {
      const path = id ? `/${currentPage}/${id}` : `/${currentPage}`;
      performNavigation(
        `${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`
      );
    }

    setQuery(searchTerm);
  };

  const handleCardClick = (cardId: number) => {
    if (location.pathname.startsWith('/about')) return;
    setSelectedId(cardId);
    const path = `/${currentPage}/${cardId}${query ? `?query=${encodeURIComponent(query)}` : ''}`;
    performNavigation(path);
  };

  const handlePageChange = (newPage: number) => {
    if (location.pathname.startsWith('/about')) return;
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const path = selectedId ? `/${newPage}/${selectedId}` : `/${newPage}`;
    performNavigation(
      `${path}${query ? `?query=${encodeURIComponent(query)}` : ''}`
    );
  };

  return (
    <div className={`${styles.home} ${styles[theme]}`} ref={mainPanelRef}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
