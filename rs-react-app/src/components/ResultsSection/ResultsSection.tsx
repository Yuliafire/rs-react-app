import React from 'react';
import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../ui/CardList/CardList';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
}

class ResultsSection extends React.Component<ResultsSectionProps> {
  render() {
    const { loading, error, results } = this.props;

    if (loading) {
      return (
        <section
          className={styles.resultsSection}
          role="alert"
          aria-live="polite"
        >
          <div className={styles.loaderContainer}>
            <Loader minDisplayTime={2000} data-testid="loader" />
          </div>
        </section>
      );
    }

    if (error) {
      return (
        <section className={styles.resultsSectionError}>
          <p role="paragraph">{error}</p>
        </section>
      );
    }

    if (results.length === 0) {
      return (
        <p className={styles.noResults}>
          No characters found. Try another search!
        </p>
      );
    }

    return (
      <section className={styles.resultsSection}>
        <CardList characters={results} />
      </section>
    );
  }
}

export default ResultsSection;
