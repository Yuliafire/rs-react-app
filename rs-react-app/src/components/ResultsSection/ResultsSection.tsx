import React from 'react';
import type { ResultsSectionProps } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';

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
      itemsPerPage: 10,
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
            <Table
              items={paginatedItems}
              headers={[
                'ID',
                'Name',
                'Gender',
                'Year of Birth',
                'Year of Death',
                'Marital Status',
              ]}
            />
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
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => this.handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.paginationButton}
                aria-label="Next page"
              >
                Next ►
              </button>
            </div>
          </>
        ) : (
          <p className={styles.noResults}>
            No lifeforms detected. Adjust your sensors and try again.
          </p>
        )}
      </section>
    );
  }
}

export default ResultsSection;
