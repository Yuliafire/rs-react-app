'use client';
import Image from 'next/image';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useGetCharacterQuery } from '../../store/apiSlice';
import type { CharacterDetails } from '../../types/types';
import Loader from '../ui/Loader/Loader';
import styles from './CharacterDetails.module.scss';
import { useTheme } from '../../shared/hooks/useTheme';
import { useTranslations } from 'next-intl';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

const CharacterDetailsComponent = () => {
  const { theme } = useTheme();
  const t = useTranslations('CharacterDetails');
  const params = useParams() as { id: string; page: string };
  const { id, page } = params;
  const searchParams = useSearchParams();
  const router = useRouter();

  const characterId = id ? parseInt(id, 10) : undefined;
  const {
    data: characterResponse,
    isLoading,
    error,
  } = useGetCharacterQuery(characterId || 0);

  const character = characterResponse?.data as CharacterDetails | undefined;

  const handleClose = () => {
    const params = new URLSearchParams(searchParams || undefined);
    const queryString = params.toString() ? `?${params.toString()}` : '';
    router.push(`/characters/${page || '1'}${queryString}`, { scroll: false });
  };

  if (isLoading) {
    return (
      <div className={styles.details}>
        <Loader minDisplayTime={1000} data-testid="details-loader" />
      </div>
    );
  }

  if (error || !character || isNaN(characterId || 0)) {
    const errorMessage = isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data
      ? String(error.data.message)
      : t('notFound');
    return (
      <div className={styles.details}>
        <p>{errorMessage}</p>
        <button onClick={handleClose} aria-label={t('close')}>
          {t('close')}
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.details} ${styles[theme]}`}>
      <h3>{character.name || t('unknown')}</h3>
      <Image
        src={character.image}
        alt={character.name || t('unknown')}
        width={300}
        height={300}
        priority={false}
        className={styles.image}
      />
      <p>
        <strong>{t('status')}:</strong> {character.status || t('unknown')}
      </p>
      <p>
        <strong>{t('species')}:</strong> {character.species || t('unknown')}
      </p>
      <p>
        <strong>{t('gender')}:</strong> {character.gender || t('unknown')}
      </p>
      <p>
        <strong>{t('origin')}:</strong> {character.origin?.name || t('unknown')}
      </p>
      <p>
        <strong>{t('location')}:</strong> {character.location?.name || t('unknown')}
      </p>
      <button onClick={handleClose} aria-label={t('close')}>
        {t('close')}
      </button>
    </div>
  );
};

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    ('data' in error || 'error' in error)
  );
}

export default CharacterDetailsComponent;



