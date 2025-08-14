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
import { useStorage } from '../../shared/services/storageService';

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterDetails[] | null,
    searchTerm: string,
    totalPages: number
  ) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function SearchSection({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
  currentPage,
  setCurrentPage,
}: SearchSectionProps) {
  const { theme } = useTheme();
  const t = useTranslations('Search');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { getSearchTerm, saveSearchTerm } = useStorage();

  const initialQuery = getSearchTerm() || '';
  const [inputValue, setInputValue] = useState(initialQuery);

  const { data, isLoading, error, refetch } = useSearchCharactersQuery({
    query: inputValue.trim(),
    page: currentPage,
  });

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log('handleSearch triggered with term:', term, 'page:', currentPage);
    const params = new URLSearchParams(searchParams || undefined);
    params.set('page', currentPage.toString());
    if (term) {
      params.set('query', term);
      saveSearchTerm(term);
    } else {
      params.delete('query');
      saveSearchTerm('');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Trigger re-fetch when currentPage changes
  useEffect(() => {
    handleSearch(inputValue.trim());
  }, [currentPage, handleSearch, inputValue]);

  useEffect(() => {
    onLoadingChange(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    if (error) {
      const errorMessage = isFetchBaseQueryError(error) && error.data
        ? typeof error.data === 'object' && 'message' in error.data
          ? String(error.data.message)
          : t('unknownError')
        : t('unknownError');
      onErrorChange(errorMessage);
    } else {
      onErrorChange(null);
    }
  }, [error, onErrorChange, t]);

  useEffect(() => {
    onSearchResults(data ? data.data || null : null, inputValue.trim(), data?.info?.pages || 1);
  }, [data, inputValue, onSearchResults]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value.trim());
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

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