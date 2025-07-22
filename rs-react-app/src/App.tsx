import { useState, useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import type { CharacterDetails } from './types/types';
import ApiService from './services/apiService';
import Button from './components/ui/Button/Button';
// import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [results, setResults] = useState<CharacterDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [shouldThrowError, setShouldThrowError] = useState(false);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);
      setError(null);

      const response = await ApiService.fetchInitialCharacters();

      if (response.status === 'success') {
        setResults(response.data);
      } else {
        setError(response.message);
        setResults([]);
      }
      setLoading(false);
    };

    loadInitialData();
  }, []);

  const handleSearchResults = (
    results: CharacterDetails[],
    searchTerm: string
  ) => {
    setResults(results);
    setError(
      results.length === 0 && searchTerm.trim() ? 'No characters found' : null
    );
  };

  const handleThrowError = () => {
    setShouldThrowError(true);
  };

  if (shouldThrowError) {
    throw new Error('Test error from Error button');
  }

  return (
    <div className="app">
      <Header />
      <SearchSection
        onSearchResults={handleSearchResults}
        onLoadingChange={setLoading}
        onErrorChange={setError}
      />
      <ResultsSection results={results} loading={loading} error={error} />
      <Button onClick={handleThrowError} type="button">
        Error Button
      </Button>
      <Footer />
    </div>
  );
};

export default App;
