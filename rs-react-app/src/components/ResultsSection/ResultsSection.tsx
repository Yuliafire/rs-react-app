import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../ui/CardList/CardList';
import { useTheme } from '../../shared/hooks/useTheme';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  onCardClick: (id: number) => void;
}

const ResultsSection = ({
  loading,
  error,
  results,
  onCardClick,
}: ResultsSectionProps) => {
  const { theme } = useTheme();
  if (error) {
    return (
      <section
        className={`${styles.resultsSectionError} ${styles[theme]}`}
        aria-live="polite"
      >
        <p role="paragraph">{error}</p>
      </section>
    );
  }

  if (!results.length) {
    return (
      <p className={`${styles.noResults} ${styles[theme]}`}>
        No characters found. Try another search!
      </p>
    );
  }

  return (
    <section className={`${styles.resultsSection} ${styles[theme]}`}>
      {loading ? (
        <div className={`${styles.loaderContainer} ${styles[theme]}`}>
          <Loader minDisplayTime={2000} data-testid="loader" />
        </div>
      ) : (
        <CardList characters={results} onCardClick={onCardClick} />
      )}
    </section>
  );
};

export default ResultsSection;
