import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import type { CharacterDetails } from './types/types';
import ApiService from './services/apiService';
import Button from './components/ui/Button/Button';

interface AppState {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  shouldThrowError: boolean;
  isSearchResult: boolean;
}

class App extends React.Component<Record<string, never>, AppState> {
  state: AppState = {
    results: [],
    loading: true,
    error: null,
    shouldThrowError: false,
    isSearchResult: false,
  };

  async componentDidMount() {
    await this.loadInitialData();
  }

  async loadInitialData() {
    this.setState({ loading: true, error: null });
    const response = await ApiService.fetchInitialCharacters();

    if (response.status === 'success') {
      this.setState({
        results: response.data,
        loading: false,
        isSearchResult: false,
      });
    } else {
      this.setState({
        error: response.message,
        loading: false,
        results: [],
      });
    }
  }

  handleSearchResults = (results: CharacterDetails[], searchTerm: string) => {
    this.setState({
      results,
      error:
        results.length === 0 && searchTerm.trim()
          ? 'No characters found'
          : null,
      isSearchResult: searchTerm.trim().length > 0,
    });
  };

  handleLoadingChange = (loading: boolean) => {
    this.setState({ loading });
  };

  handleErrorChange = (error: string | null) => {
    this.setState({ error });
  };

  handleThrowError = () => {
    this.setState({ shouldThrowError: true });
  };

  render() {
    const { results, loading, error, shouldThrowError } = this.state;

    if (shouldThrowError) {
      throw new Error('Test error from Error button');
    }

    return (
      <div className="app">
        <Header />
        <SearchSection
          onSearchResults={this.handleSearchResults}
          onLoadingChange={this.handleLoadingChange}
          onErrorChange={this.handleErrorChange}
        />
        <ResultsSection results={results} loading={loading} error={error} />
        <Button onClick={this.handleThrowError} type="button">
          Error Button
        </Button>
        <Footer />
      </div>
    );
  }
}

export default App;
