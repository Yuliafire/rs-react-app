import './App.css';
import React from 'react';
import Header from '../src/components/layout/Header/Header';
import Footer from '../src/components/layout/Footer/Footer';
import SearchSection from '../src/components/SearchSection/SearchSection';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { AppState } from './types/types';

class App extends React.Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      loading: false,
      error: null,
      shouldThrowError: false,
    };
  }

  handleThrowError = () => {
    this.setState({ shouldThrowError: true });
  };

  render() {
    const { loading, error, results, shouldThrowError } = this.state;

    if (shouldThrowError) {
      throw new Error('Test error from Error button');
    }

    return (
      <div className="app">
        <Header />
        <SearchSection
          onSearchResults={(results) => this.setState({ results })}
          onLoadingChange={(loading) => this.setState({ loading })}
          onErrorChange={(error) => this.setState({ error })}
        />
        <ResultsSection  loading={loading} error={error} results={results} />

        <button
          onClick={this.handleThrowError}
          style={{ margin: '1rem', padding: '0.5rem 1rem', display: 'block' }}
        >
          Error Button
        </button>
        <Footer />
      </div>
    );
  }
}

export default App;
