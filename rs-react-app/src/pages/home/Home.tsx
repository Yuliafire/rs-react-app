import { useState, useEffect } from 'react';
import SearchSection from '../../components/SearchSection/SearchSection';
import ResultsSection from '../../components/ResultsSection/ResultsSection';
import ApiService from '../../services/apiService';
import type { CharacterDetails } from '../../types/types';
import styles from './Home.module.scss';

const Home = () => {
  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const response = searchTerm
        ? await ApiService.searchCharacters(searchTerm)
        : await ApiService.fetchInitialCharacters();

      if (response.status === 'success') {
        setResults(response.data);
      } else {
        setError(response.message);
        setResults([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm]);

  const handleSearchResults = (
    results: CharacterDetails[],
    searchTerm: string
  ) => {
    setResults(results);
    setSearchTerm(searchTerm);
    setError(
      results.length === 0 && searchTerm.trim() ? 'No characters found' : null
    );
  };

  return (
    <div className={styles.home}>
      <SearchSection
        onSearchResults={handleSearchResults}
        onLoadingChange={setLoading}
        onErrorChange={setError}
      />
      <ResultsSection results={results} loading={loading} error={error} />
    </div>
  );
};

export default Home;
