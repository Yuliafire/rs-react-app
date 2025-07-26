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

const Home = () => {
  const { id } = useParams<{ id?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const pageParam = searchParams.get('page') || '1';
  const queryParam = searchParams.get('query') || '';

  const [currentPage, setCurrentPage] = useState(parseInt(pageParam, 10));
  const [query, setQuery] = useState(queryParam);
  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleSearchResults = (
    results: CharacterDetails[],
    searchTerm: string,
    totalPages: number
  ) => {
    setResults(results);
    setTotalPages(totalPages);

    if (searchTerm !== query) {
      setCurrentPage(1);
      setSearchParams({
        page: '1',
        ...(searchTerm && { query: searchTerm }),
      });
    } else {
      setSearchParams({
        page: currentPage.toString(),
        ...(searchTerm && { query: searchTerm }),
      });
    }
    setQuery(searchTerm);
  };

  const handleResultClick = (id: number) => {
    navigate(
      `/home/${id}?page=${currentPage}${query ? `&query=${encodeURIComponent(query)}` : ''}`
    );
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setSearchParams({
        page: newPage.toString(),
        ...(query && { query }),
      });
    }
  };

  const mainPanelRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      id &&
      detailsRef.current &&
      !detailsRef.current.contains(event.target as Node) &&
      mainPanelRef.current &&
      mainPanelRef.current.contains(event.target as Node)
    ) {
      navigate(
        `/home?page=${currentPage}${query ? `&query=${encodeURIComponent(query)}` : ''}`
      );
    }
  };

  return (
    <div className={styles.home} onClick={handleClick} ref={mainPanelRef}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={currentPage}
        />

        <div className="wrapper">
          <div className={styles.searchResults}>
            <ResultsSection
              results={results}
              loading={loading}
              error={error}
              onResultClick={handleResultClick}
            />
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
      <Outlet context={{ detailsRef }} />
    </div>
  );
};

export default Home;
