import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SearchSection from '../src/components/SearchSection/SearchSection';
import { useStorage } from '../src/services/storageService';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

interface CharacterResult {
  id: number;
  name: string;
}

interface ApiResponse {
  status: string;
  data: CharacterResult[];
}

interface SearchSectionProps {
  onSearchResults: (results: CharacterResult[], searchTerm: string) => void;
  onLoadingChange: (isLoading: boolean) => void;
  onErrorChange: (error: string | null) => void;
}

vi.mock('../src/services/storageService', () => ({
  default: {
    getSearchTerm: vi.fn(() => ''),
    saveSearchTerm: vi.fn(() => Promise.resolve()),
  },
}));

vi.mock('../src/services/apiService', () => ({
  searchCharacters: vi.fn(() =>
    Promise.resolve<ApiResponse>({
      status: 'success',
      data: [],
    })
  ),
}));

const mockProps: SearchSectionProps = {
  onSearchResults: vi.fn(),
  onLoadingChange: vi.fn(),
  onErrorChange: vi.fn(),
};

describe('SearchSection Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useStorage.getSearchTerm).mockReturnValue('');
  });

  describe('Rendering', () => {
    it('renders search input and button', () => {
      render(<SearchSection {...mockProps} />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /search/i })
      ).toBeInTheDocument();
    });

    it('shows empty input when no saved term exists', () => {
      render(<SearchSection {...mockProps} />);
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });

  describe('Behavior', () => {
    it('displays saved search term', () => {
      vi.mocked(useStorage.getSearchTerm).mockReturnValue('Rick');
      render(<SearchSection {...mockProps} />);
      expect(screen.getByRole('textbox')).toHaveValue('Rick');
    });

    it('updates input value on typing', async () => {
      const user = userEvent.setup();
      render(<SearchSection {...mockProps} />);
      const input = screen.getByRole('textbox');
      await user.type(input, 'Morty');
      expect(input).toHaveValue('Morty');
    });

    it('triggers search on button click', async () => {
      const user = userEvent.setup();
      render(<SearchSection {...mockProps} />);
      await user.type(screen.getByRole('textbox'), 'Rick');
      await user.click(screen.getByRole('button', { name: /search/i }));
      expect(mockProps.onSearchResults).toHaveBeenCalled();
    });
  });
});
