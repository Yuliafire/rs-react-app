import { render, screen } from '@testing-library/react';
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
});
