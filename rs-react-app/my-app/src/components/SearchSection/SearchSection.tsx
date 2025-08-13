'use client';

import { useState, useEffect, type FormEvent, type ChangeEvent } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useSearchCharactersQuery } from '../../store/apiSlice';
import type { CharacterDetails } from '../../types/types';
import { useTheme } from '../../shared/hooks/useTheme';
import { useTranslations } from 'next-intl';
import styles from './SearchSection.module.scss';
import Button from '../ui/Button/Button';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterDetails[],
    searchTerm: string,
    totalPages: number
  ) => void;
}

export default function SearchSection({ onSearchResults }: SearchSectionProps) {
  const { theme } = useTheme();
  const t = useTranslations('Search');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Initialize search term from URL or localStorage
  const initialQuery =
    searchParams?.get('query') ||
    (typeof window !== 'undefined' ? localStorage.getItem('searchTerm') || '' : '');
  const [inputValue, setInputValue] = useState(initialQuery);

  // RTK Query hook for searching characters
  const { data, isLoading, error, refetch } = useSearchCharactersQuery({
    query: inputValue.trim(),
    page: 1,
  });

  // Debounced search handler to update URL and localStorage
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams || '');
    params.set('page', '1');
    if (term) {
      params.set('query', term);
      if (typeof window !== 'undefined') {
        localStorage.setItem('searchTerm', term);
      }
    } else {
      params.delete('query');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('searchTerm');
      }
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Update parent component with search results
  useEffect(() => {
    if (data) {
      onSearchResults(data.data || [], inputValue.trim(), data.info?.pages || 1);
    }
  }, [data, inputValue, onSearchResults]);

  // Handle input changes with debounced search
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value.trim());
  };

  // Handle form submission to refetch data
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  // Handle manual refresh
  const handleForceRefresh = () => {
    refetch();
  };

  return (
    <section
      className={`${styles.searchSection} ${styles[theme]}`}
      data-testid="search-section"
    >
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={t('placeholder')}
          className={styles.searchInput}
          disabled={isLoading}
          aria-label={t('placeholder')}
        />
        <Button
          type="submit"
          disabled={isLoading}
          aria-label={isLoading ? t('searching') : t('search')}
        >
          {isLoading ? t('searching') : t('search')}
        </Button>
      </form>
      {error && (
        <div className={styles.error}>
          {t('error')}: {isFetchBaseQueryError(error) && error.data && typeof error.data === 'object' && 'message' in error.data ? String(error.data.message) : t('unknownError')}
        </div>
      )}
      {data && (
        <Button
          onClick={handleForceRefresh}
          disabled={isLoading}
          aria-label={isLoading ? t('refreshing') : t('forceRefresh')}
        >
          {isLoading ? t('refreshing') : t('forceRefresh')}
        </Button>
      )}
    </section>
  );
}

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return (
    typeof error === 'object' &&
    error != null &&
    'status' in error &&
    ('data' in error || 'error' in error)
  );
}