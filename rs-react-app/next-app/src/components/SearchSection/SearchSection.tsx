"use client";

import { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useSearchCharactersQuery } from "../../store/apiSlice";
import type { CharacterDetails } from "../../types/types";
import { useTheme } from "../../shared/hooks/useTheme";
import { useTranslations } from "next-intl";
import styles from "./SearchSection.module.scss";
import Button from "../ui/Button/Button";
import { useStorage } from "../../shared/services/storageService";

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterDetails[] | null,
    searchTerm: string,
    totalPages: number,
  ) => void;
  onLoadingChange: (loading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  initialSearchTerm?: string;
}

export default function SearchSection({
  onSearchResults,
  onLoadingChange,
  onErrorChange,
  currentPage,
  setCurrentPage,
  initialSearchTerm = "",
}: SearchSectionProps) {
  const { theme } = useTheme();
  const t = useTranslations("Search");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { getSearchTerm, saveSearchTerm } = useStorage();

  const [inputValue, setInputValue] = useState(
    initialSearchTerm || getSearchTerm() || "",
  );

  const { data, isLoading, error, refetch } = useSearchCharactersQuery(
    { query: inputValue.trim(), page: currentPage },
    { skip: inputValue.trim() === "" },
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams);

    if (term !== inputValue.trim()) {
      setCurrentPage(1);
      params.set("page", "1");
    } else {
      params.set("page", currentPage.toString());
    }

    if (term) {
      params.set("query", term);
      saveSearchTerm(term);
    } else {
      params.delete("query");
      saveSearchTerm("");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    if (inputValue.trim()) {
      params.set("query", inputValue.trim());
    }
    replace(`${pathname}?${params.toString()}`);
  }, [currentPage, searchParams, pathname, replace, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleSearch(e.target.value.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  useEffect(() => {
    onLoadingChange(isLoading);
  }, [isLoading, onLoadingChange]);

  useEffect(() => {
    if (error) {
      const err = error as { data?: { message?: string } };
      const errorMessage = err?.data?.message || t("unknownError");
      onErrorChange(errorMessage);
    } else {
      onErrorChange(null);
    }
  }, [error, onErrorChange, t]);

  useEffect(() => {
    if (data) {
      onSearchResults(
        data.data || null,
        inputValue.trim(),
        data.info?.pages || 1,
      );
    }
  }, [data, inputValue, onSearchResults]);

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
          placeholder={t("placeholder")}
          className={styles.searchInput}
          disabled={isLoading}
          aria-label={t("placeholder")}
        />
        <Button
          type="submit"
          disabled={isLoading}
          aria-label={isLoading ? t("searching") : t("search")}
        >
          {isLoading ? t("searching") : t("search")}
        </Button>
      </form>
      {data && (
        <Button
          onClick={() => refetch()}
          disabled={isLoading}
          aria-label={t("forceRefresh")}
        >
          {t("forceRefresh")}
        </Button>
      )}
    </section>
  );
}
