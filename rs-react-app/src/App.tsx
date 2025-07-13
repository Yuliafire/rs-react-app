import React from 'react';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import SearchSection from '../src/components/SearchSection/SearchSection';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { AppState, CharacterDetails } from './types/types';
import Button from './components/ui/Button/Button';

class App extends React.Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      loading: false,
      error: null,
      shouldThrowError: false,
      isSearchResult: false,
    };
  }

  handleThrowError = () => {
    this.setState({ shouldThrowError: true });
  };

  handleSearchResults = (results: CharacterDetails[], searchTerm: string) => {
    this.setState({
      results,
      isSearchResult: !!searchTerm.trim(),
      loading: false,
      error: null,
      searchTerm,
    });
  };

  handleLoadingChange = (loading: boolean) => {
    this.setState({ loading });
  };

  handleErrorChange = (error: string | null) => {
    this.setState({ error });
  };

  render() {
    const { loading, error, results, shouldThrowError, isSearchResult } =
      this.state;

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
        <ResultsSection
          results={results}
          loading={loading}
          error={error || ''}
          isPaginated={isSearchResult}
        />
        <Button onClick={this.handleThrowError} type="button">
          Error Button
        </Button>
        <Footer />
      </div>
    );
  }
}

export default App;
