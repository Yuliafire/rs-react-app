import React from 'react';
import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../../components/ui/CardList/CardList';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string;
  isPaginated?: boolean;
}

interface ResultsSectionState {
  currentPage: number;
  itemsPerPage: number;
}

class ResultsSection extends React.Component<
  ResultsSectionProps,
  ResultsSectionState
> {
  static defaultProps = {
    isPaginated: true,
  };

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

  componentDidUpdate(prevProps: ResultsSectionProps) {
    if (prevProps.results !== this.props.results) {
      this.setState({ currentPage: 1 });
    }
  }

  getDisplayedItems = (): CharacterDetails[] => {
    const { currentPage, itemsPerPage } = this.state;
    const { results, isPaginated } = this.props;

    return isPaginated
      ? results.slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
      : results;
  };

  handlePageChange = (page: number): void => {
    this.setState({ currentPage: page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getTotalPages = (): number => {
    const { results } = this.props;
    const { itemsPerPage } = this.state;
    return Math.ceil(results.length / itemsPerPage);
  };

  render() {
    const { loading, error, isPaginated } = this.props;
    const { currentPage } = this.state;
    const displayedItems = this.getDisplayedItems();
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
        {displayedItems.length > 0 ? (
          <>
            <CardList characters={displayedItems} />
            {isPaginated && totalPages > 1 && (
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
                  disabled={currentPage === totalPages}
                  className={styles.paginationButton}
                  aria-label="Next page"
                >
                  Next ►
                </button>
              </div>
            )}
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
