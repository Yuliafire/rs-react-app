import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import SearchSection from './components/SearchSection/SearchSection';
import ResultsSection from './components/ResultsSection/ResultsSection';
import type { CharacterDetails } from './types/types';
import ApiService from './services/apiService';

interface AppState {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
}

class App extends React.Component<Record<string, never>, AppState> {
  state: AppState = {
    results: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    await this.loadInitialData();
  }

  async loadInitialData() {
    this.setState({ loading: true });
    const response = await ApiService.fetchInitialCharacters();

    this.setState({
      loading: false,
      results: response.status === 'success' ? response.data : [],
      error: response.status === 'error' ? response.message : null,
    });
  }

  handleSearchResults = (results: CharacterDetails[], searchTerm: string) => {
    this.setState({
      results,
      error:
        results.length === 0 && searchTerm.trim()
          ? 'No characters found'
          : null,
    });
  };

  handleLoadingChange = (loading: boolean) => {
    this.setState({ loading });
  };

  handleErrorChange = (error: string | null) => {
    this.setState({ error });
  };

  render() {
    const { results, loading, error } = this.state;

    return (
      <div className="app">
        <Header />
        <SearchSection
          onSearchResults={this.handleSearchResults}
          onLoadingChange={this.handleLoadingChange}
          onErrorChange={this.handleErrorChange}
        />
        <ResultsSection results={results} loading={loading} error={error} />
        <Footer />
      </div>
    );
  }
}

export default App;
