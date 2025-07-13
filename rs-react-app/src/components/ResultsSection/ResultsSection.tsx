import React from 'react';
import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../ui/CardList/CardList';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  isPaginated?: boolean;
  isInitialLoad?: boolean;
}

interface ResultsSectionState {
  currentPage: number;
}

class ResultsSection extends React.Component<ResultsSectionProps, ResultsSectionState> {
  static defaultProps = {
    isPaginated: true,
    isInitialLoad: false
  };

  state: ResultsSectionState = {
    currentPage: 1
  };

  componentDidUpdate(prevProps: ResultsSectionProps) {
    if (prevProps.results !== this.props.results) {
      this.setState({ currentPage: 1 });
    }
  }

  getDisplayedItems = (): CharacterDetails[] => {
    const { currentPage } = this.state;
    const { results, isPaginated, isInitialLoad } = this.props;
    const itemsPerPage = isInitialLoad ? 100 : 20;

    if (!isPaginated || isInitialLoad) {
      return results.slice(0, itemsPerPage);
    }

    return results.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { loading, error, isPaginated, isInitialLoad } = this.props;
    const { currentPage } = this.state;
    const displayedItems = this.getDisplayedItems();
    const totalPages = Math.ceil(this.props.results.length / (isInitialLoad ? 100 : 20));

    if (loading) {
      return (
        <section className={styles.resultsSection}>
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        </section>
      );
    }

    if (error) {
      return (
        <section className={styles.resultsSectionError}>
          <p>{error}</p>
        </section>
      );
    }

    if (displayedItems.length === 0) {
      return (
        <p className={styles.noResults}>
          No characters found. Try another search!
        </p>
      );
    }

    return (
      <section className={styles.resultsSection}>
        <CardList characters={displayedItems} />
        {isPaginated && !isInitialLoad && totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => this.handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => this.handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default ResultsSection;
