import { useCallback } from 'react';
import styles from './Pagination.module.scss';
import { useTheme } from '../../hooks/useTheme';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading: boolean;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  loading,
}: PaginationProps) => {
  const handlePageClick = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages && !loading) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages, loading]
  );

  const { theme } = useTheme();

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const left = Math.max(1, currentPage - delta);
    const right = Math.min(totalPages, currentPage + delta);

    if (left > 2) range.push(1);
    if (left > 3) range.push('...');
    for (let i = left; i <= right; i++) range.push(i);
    if (right < totalPages - 2) range.push('...');
    if (right < totalPages - 1) range.push(totalPages);

    return range;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`${styles.pagination} ${styles[theme]}`}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1 || loading}
        aria-label="Previous page"
      >
        Previous
      </button>
      {getPageNumbers().map((page, index) => (
        <span key={index} className={styles.pageItem}>
          {page === '...' ? (
            <span className={styles.ellipsis}>...</span>
          ) : (
            <button
              onClick={() => handlePageClick(page as number)}
              className={currentPage === page ? styles.active : ''}
              disabled={loading}
              aria-current={currentPage === page ? 'page' : undefined}
              aria-label={`Page ${page}`}
            >
              {page}
            </button>
          )}
        </span>
      ))}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages || loading}
        aria-label="Next page"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
