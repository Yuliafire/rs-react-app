'use client';
import type { CharacterDetails } from '../../types/types';
import styles from './ResultsSection.module.scss';
import Loader from '../ui/Loader/Loader';
import CardList from '../ui/CardList/CardList';
import { useTheme } from '../../shared/hooks/useTheme';
import { useTranslations } from 'next-intl';

interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  onCardClick: (id: number) => void;
}

export default function ResultsSection({
  loading,
  error,
  results,
  onCardClick
}: ResultsSectionProps) {
  const { theme } = useTheme();
  const t = useTranslations('Results');

  if (error) {
    return (
      <section
        className={`${styles.resultsSectionError} ${styles[theme]}`}
        aria-live="polite"
        data-testid="results-section"
      >
        <p role="paragraph">{t('error', { message: error })}</p>
      </section>
    );
  }

  if (!results.length) {
    return (
      <p
        className={`${styles.noResults} ${styles[theme]}`}
        aria-live="polite"
        data-testid="results-section"
      >
        {t('noResults')}
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
        <CardList characters={results} onCardClick={onCardClick}  />
      )}
    </section>
  );
}
