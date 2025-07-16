import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchSection from '../src/components/SearchSection/SearchSection';
import storageService from '../src/services/storageService';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/services/storageService', () => ({
  default: {
    getSearchTerm: vi.fn(),
    saveSearchTerm: vi.fn(),
  },
}));

vi.mock('../src/services/apiService', () => ({
  searchCharacters: vi.fn().mockResolvedValue({
    status: 'success',
    data: [],
  }),
}));

const mockProps = {
  onSearchResults: vi.fn(),
  onLoadingChange: vi.fn(),
  onErrorChange: vi.fn(),
};

describe('SearchSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(storageService.getSearchTerm).mockReturnValue('');
    vi.mocked(storageService.saveSearchTerm).mockImplementation(() => {});
  });

  describe('Rendering Tests', () => {
    it('renders search input and search button', () => {
      render(<SearchSection {...mockProps} />);

      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /search/i })
      ).toBeInTheDocument();
    });

    it('displays previously saved search term from localStorage on mount', () => {
      vi.mocked(storageService.getSearchTerm).mockReturnValue('Rick');

      render(<SearchSection {...mockProps} />);

      expect(screen.getByRole('textbox')).toHaveValue('Rick');
    });

    it('shows empty input when no saved term exists', () => {
      render(<SearchSection {...mockProps} />);

      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });
});
