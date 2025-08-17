"use client";

import { useState, useCallback, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import SearchSection from "../../components/SearchSection/SearchSection";
import ResultsSection from "../../components/ResultsSection/ResultsSection";
import Pagination from "../../components/Pagination/Pagination";
import Flyout from "../../components/Flyout/Flyout";
import CharacterDetailsComponent from "../../components/CharacterDetails/CharacterDetails";
import styles from "./Home.module.scss";
import type { CharacterDetails, ServiceResponse } from "../../types/types";
import { useTheme } from "../../shared/hooks/useTheme";

interface HomeProps {
  initialData?: ServiceResponse<CharacterDetails[]>;
  initialPage?: number;
  translations?: {
    title: string;
    loading: string;
    error: string;
  };
}

const Home = ({ initialData, initialPage = 1, translations }: HomeProps) => {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [results, setResults] = useState<CharacterDetails[]>(
    initialData?.data || [],
  );
  const [totalPages, setTotalPages] = useState(initialData?.info?.pages || 1);
  const [loading, setLoading] = useState(!initialData?.data);
  const [error, setError] = useState<string | null>(
    initialData?.message || null,
  );
  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams?.get("query") || "",
  );

  const updateUrl = useCallback(() => {
    if (!searchParams) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());

    if (searchTerm) {
      params.set("query", searchTerm);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [currentPage, searchTerm, searchParams, pathname, replace]);

  const handleSearchResults = useCallback(
    (
      searchResults: CharacterDetails[] | null,
      newSearchTerm: string,
      pages: number,
    ) => {
      setResults(searchResults || []);
      setTotalPages(pages);
      setSearchTerm(newSearchTerm);

      if (newSearchTerm && newSearchTerm !== searchTerm) {
        setCurrentPage(1);
      }
    },
    [searchTerm],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        updateUrl();
      }
    },
    [totalPages, updateUrl],
  );

  useEffect(() => {
    updateUrl();
  }, [currentPage, searchTerm, updateUrl]);

  const handleCardClick = useCallback((cardId: number) => {
    setSelectedCharacterId(cardId);
  }, []);

  const handleCloseDetails = () => {
    setSelectedCharacterId(null);
  };

  return (
    <div className={`${styles.home} ${styles[theme]}`}>
      <div className={styles.container}>
        <SearchSection
          onSearchResults={handleSearchResults}
          onLoadingChange={setLoading}
          onErrorChange={setError}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          initialSearchTerm={searchTerm}
        />

        <div className={styles.searchResults}>
          <div className={styles.resultsBox}>
            {error ? (
              <div className={styles.error}>
                {translations?.error || "Error"}: {error}
              </div>
            ) : (
              <ResultsSection
                results={results}
                loading={loading}
                error={error}
                onCardClick={handleCardClick}
              />
            )}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              loading={loading}
            />
          )}
        </div>
      </div>

      <Flyout />

      {selectedCharacterId && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <CharacterDetailsComponent
              id={selectedCharacterId}
              page={currentPage.toString()}
              onClose={handleCloseDetails}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
