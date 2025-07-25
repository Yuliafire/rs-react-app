import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchSection from '../../components/SearchSection/SearchSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';
import CharacterDetailsComponent from '../../components/CharacterDetails/CharacterDetails';
import Pagination from '../../components/Pagination/Pagination';
import styles from './Home.module.scss';
import type { CharacterDetails } from '../../types/types';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const query = searchParams.get('query') || '';
  const detailsId = searchParams.get('details') || null;

  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchResults = (
    results: CharacterDetails[],
    searchTerm: string,
    totalPages: number
  ) => {
    setResults(results);
    setTotalPages(totalPages);
    setSearchParams({
      page: page.toString(),
      ...(searchTerm && { query: searchTerm }),
      ...(detailsId && { details: detailsId }),
    });
  };

  const handleResultClick = (id: number) => {
    setSearchParams({
      page: page.toString(),
      ...(query && { query }),
      details: id.toString(),
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({
        page: newPage.toString(),
        ...(query && { query }),
        ...(detailsId && { details: detailsId }),
      });
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={page}
        />
        <div className={styles.searchResults}>
          <ResultsSection
            results={results}
            loading={loading}
            error={error}
            onResultClick={handleResultClick}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              loading={loading}
            />
          )}
        </div>
      </div>
      {detailsId && !isNaN(parseInt(detailsId, 10)) && (
        <CharacterDetailsComponent characterId={parseInt(detailsId, 10)} />
      )}
    </div>
  );
};

export default Home;
