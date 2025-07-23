import { useState, useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import type { CharacterDetails } from './types/types';
import ApiService from './services/apiService';
import Button from './components/ui/Button/Button';

// import NotFound from '../src/pages/not-found/Notfound';
// import About from '../src/pages/about/About';
// import HomePage from '../src/pages/home/Home';
// import { Route, Routes } from 'react-router-dom';
// const HOMEPAGE_PATH = '/';
// const ABOUTPAGE_PATH  = '/about';
// const NOTFOUND_PATH = '*';

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
        setResults(response.data.characters);
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

// there will be another return

//  return (
//       <div className="app">
//         <Header />
//         <Routes>
//           <Route path={HOME_PATH} element={<HomePage />} />
//           <Route path={RESERVE_HOME_PATH} element={<HomePage />} />
//           <Route path={ABOUTPAGE_PATH} element={<AboutPage />} />
//           <Route path={NOTFOUND_PATH} element={<NotFound />} />
//         </Routes>
//       </div>
//     );
