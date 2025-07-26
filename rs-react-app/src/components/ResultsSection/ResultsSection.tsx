import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../ui/CardList/CardList';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  onResultClick: (id: number) => void;
}

const ResultsSection = ({
  loading,
  error,
  results,
  onResultClick,
}: ResultsSectionProps) => {
  if (error) {
    return (
      <section className={styles.resultsSectionError} aria-live="polite">
        <p role="paragraph">{error}</p>
      </section>
    );
  }

  if (!results.length) {
    return (
      <p className={styles.noResults}>
        No characters found. Try another search!
      </p>
    );
  }

  return (
    <section className={styles.resultsSection}>
      {loading ? (
        <div className={styles.loaderContainer}>
          <Loader minDisplayTime={2000} data-testid="loader" />
        </div>
      ) : (
        <CardList characters={results} onCardClick={onResultClick} />
      )}
      ;
    </section>
  );
};

export default ResultsSection;
