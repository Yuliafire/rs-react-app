import React from 'react';
import type { ResultsSectionProps } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../../components/ui/CardList/CardList';

interface ResultsSectionState {
  currentPage: number;
  itemsPerPage: number;
}

class ResultsSection extends React.Component<
  ResultsSectionProps,
  ResultsSectionState
> {
  constructor(props: ResultsSectionProps) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 20,
    };
  }

  componentDidMount() {
    this.setState({ currentPage: 1 });
  }

  getPaginatedItems = () => {
    const { currentPage, itemsPerPage } = this.state;
    const { results } = this.props;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return results.slice(startIndex, endIndex);
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getTotalPages = () => {
    const { results } = this.props;
    const { itemsPerPage } = this.state;
    return Math.ceil(results.length / itemsPerPage);
  };

  render() {
    const { loading, error } = this.props;
    const { currentPage } = this.state;
    const paginatedItems = this.getPaginatedItems();
    const totalPages = this.getTotalPages();

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

    return (
      <section className={styles.resultsSection}>
        {paginatedItems.length > 0 ? (
          <>
              <CardList characters={paginatedItems} />
              <div className={styles.pagination}>
                <button
                  onClick={() => this.handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={styles.paginationButton}
                  aria-label="Previous page"
                >
                  ◄ Previous
                </button>
                <span className={styles.paginationInfo}>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => this.handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages || totalPages === 0}
                  className={styles.paginationButton}
                  aria-label="Next page"
                >
                  Next ►
                </button>
              </div>
          </>
        ) : (
          <p className={styles.noResults}>
            No characters found in the multiverse. Try another search!
          </p>
        )}
      </section>
    );
  }
}

export default ResultsSection;
