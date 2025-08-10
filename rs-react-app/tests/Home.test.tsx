import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  MemoryRouter,
  useSearchParams,
  useParams,
  useNavigate,
} from 'react-router-dom';
import Home from '../src/pages/home/Home';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/components/SearchSection/SearchSection', () => ({
  default: vi.fn(
    ({
      onSearchResults,
    }: {
      onSearchResults: (
        results: CharacterDetails[],
        searchTerm: string,
        totalPages: number
      ) => void;
    }) => (
      <div data-testid="search-section">
        <button
          onClick={() =>
            onSearchResults(
              [
                {
                  id: 1,
                  name: 'Rick',
                  status: '',
                  species: '',
                  type: '',
                  gender: '',
                  origin: {
                    name: '',
                    url: '',
                  },
                  location: {
                    name: '',
                    url: '',
                  },
                  image: '',
                  episode: [],
                  url: '',
                  created: '',
                },
              ],
              'Rick',
              5
            )
          }
          data-testid="search-button"
        >
          Search
        </button>
      </div>
    )
  ),
}));

vi.mock('../src/components/ResultsSection/ResultsSection', () => ({
  default: vi.fn(
    ({
      results,
      onCardClick,
    }: {
      results: CharacterDetails[];
      onCardClick: (id: number) => void;
    }) => (
      <div data-testid="results-section">
        {results?.map((character) => (
          <div
            key={character.id}
            onClick={() => onCardClick(character.id)}
            data-testid={`character-${character.id}`}
          >
            {character.name}
          </div>
        ))}
      </div>
    )
  ),
}));

vi.mock('../src/components/Pagination/Pagination', () => ({
  default: vi.fn(
    ({
      currentPage,
      totalPages,
      onPageChange,
    }: {
      currentPage: number;
      totalPages: number;
      onPageChange: (page: number) => void;
    }) => (
      <div data-testid="pagination">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          data-testid="next-page"
        >
          Next
        </button>
        <span data-testid="page-indicator">
          {currentPage}/{totalPages}
        </span>
      </div>
    )
  ),
}));

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );
  return {
    ...actual,
    useSearchParams: vi.fn(() => [new URLSearchParams(), vi.fn()]),
    useParams: vi.fn(() => ({})),
    useNavigate: vi.fn(() => vi.fn()),
    Outlet: vi.fn(() => <div data-testid="outlet" />),
  };
});

vi.mock('../src/shared/hooks/useTheme', () => ({
  useTheme: vi.fn(() => ({
    theme: 'light',
    toggleTheme: vi.fn(),
  })),
}));

describe('Home Component', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(useParams).mockReturnValue({});
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(),
      vi.fn(),
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderHome = (initialEntries: string[] = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Home />
      </MemoryRouter>
    );
  };

  it('renders without crashing', () => {
    renderHome();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByTestId('search-section')).toBeInTheDocument();
  });

  it('initializes with URL params when provided', () => {
    vi.mocked(useParams).mockReturnValue({ page: '2', id: '3' });
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams('query=Rick'),
      vi.fn(),
    ]);

    renderHome(['/2/3?query=Rick']);
    expect(useParams).toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });

  describe('Search Functionality', () => {
    it('handles search results and updates state', async () => {
      renderHome();

      fireEvent.click(screen.getByTestId('search-button'));

      await waitFor(() => {
        expect(screen.getByTestId('results-section')).toHaveTextContent('Rick');
        expect(mockNavigate).toHaveBeenCalledWith('/1?query=Rick');
      });
    });

    it('resets current page to 1 when new search is performed', async () => {
      vi.mocked(useParams).mockReturnValue({ page: '3' });
      renderHome(['/3']);

      fireEvent.click(screen.getByTestId('search-button'));

      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/1?query=Rick');
      });
    });
  });

  describe('Character Selection', () => {
    it('handles card click and updates URL', async () => {
      renderHome();

      fireEvent.click(screen.getByTestId('search-button'));

      await waitFor(() => {
        const characterCard = screen.getByTestId('character-1');
        fireEvent.click(characterCard);
      });
    });
  });

  describe('Pagination', () => {
    it('updates page correctly', async () => {
      vi.mocked(useParams).mockReturnValue({ page: '2' });
      vi.mocked(useSearchParams).mockReturnValue([
        new URLSearchParams('query=Rick'),
        vi.fn(),
      ]);

      renderHome(['/2?query=Rick']);

      fireEvent.click(screen.getByTestId('search-button'));

      await waitFor(() => {
        fireEvent.click(screen.getByTestId('next-page'));
      });
    });
  });
});
