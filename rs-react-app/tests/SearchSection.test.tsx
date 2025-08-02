import { render, screen, waitFor } from '@testing-library/react';
import {
  describe,
  expect,
  it,
  beforeEach,
  afterEach,
  Mock,
  beforeAll,
  vitest,
} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SearchSection from '../src/components/SearchSection/SearchSection';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';

interface CharacterResult {
  id: number;
  name: string;
}

interface ServiceResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

interface SearchSectionProps {
  onSearchResults: (
    results: CharacterResult[],
    searchTerm: string,
    totalPages: number
  ) => void;
  onLoadingChange: (isLoading: boolean) => void;
  onErrorChange: (error: string | null) => void;
  currentPage: number;
}

let mockUseStorage: () => {
  getSearchTerm: Mock<() => string>;
  saveSearchTerm: Mock<(term: string) => void>;
};
let mockSearchCharacters: Mock<
  () => Promise<ServiceResponse<CharacterResult[]>>
>;

beforeAll(() => {
  mockUseStorage = () => ({
    getSearchTerm: vitest.fn(() => ''),
    saveSearchTerm: vitest.fn(),
  });

  mockSearchCharacters = vitest.fn(() =>
    Promise.resolve<ServiceResponse<CharacterResult[]>>({
      status: 'success',
      data: [],
      info: { count: 0, pages: 1, next: null, prev: null },
    })
  );

  vitest.doMock('../src/services/storageService', () => ({
    useStorage: mockUseStorage,
  }));

  vitest.doMock('../src/services/apiService', () => ({
    default: {
      searchCharacters: mockSearchCharacters,
    },
  }));
});

const mockProps: SearchSectionProps = {
  onSearchResults: vitest.fn(),
  onLoadingChange: vitest.fn(),
  onErrorChange: vitest.fn(),
  currentPage: 0,
};

describe('SearchSection Component', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
    mockUseStorage().getSearchTerm.mockReturnValue('');
  });

  afterEach(() => {
    vitest.restoreAllMocks();
  });

  describe('Rendering', () => {
    it('renders search input and button', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <SearchSection {...mockProps} />
          </MemoryRouter>
        </ThemeProvider>
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /search/i })
      ).toBeInTheDocument();
    });

    it('shows empty input when no saved term exists', () => {
      render(
        <ThemeProvider>
          <MemoryRouter>
            <SearchSection {...mockProps} />
          </MemoryRouter>
        </ThemeProvider>
      );
      expect(screen.getByRole('textbox')).toHaveValue('');
    });
  });

  describe('Loading State', () => {
    it('disables input and button during loading', async () => {
      mockSearchCharacters.mockImplementation(() => new Promise(() => {})); // Never resolves
      render(
        <ThemeProvider>
          <MemoryRouter>
            <SearchSection {...mockProps} />
          </MemoryRouter>
        </ThemeProvider>
      );
      const input = screen.getByRole('textbox', { name: /search characters/i });
      const button = screen.getByRole('button', { name: /searching/i });
      expect(input).toBeDisabled();
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Searching...');
    });
  });

  describe('Page Change', () => {
    it('calls performSearch when currentPage changes', async () => {
      const { rerender } = render(
        <ThemeProvider>
          <MemoryRouter>
            <SearchSection {...mockProps} currentPage={1} />
          </MemoryRouter>
        </ThemeProvider>
      );
      rerender(
        <ThemeProvider>
          <MemoryRouter>
            <SearchSection {...mockProps} currentPage={2} />
          </MemoryRouter>
        </ThemeProvider>
      );
      await waitFor(() => {
        expect(mockProps.onLoadingChange).toHaveBeenCalledWith(true);
        expect(mockProps.onLoadingChange).toHaveBeenCalledWith(false);
      });
    });
  });
});
