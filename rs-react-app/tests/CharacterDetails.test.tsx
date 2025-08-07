import { render, screen, waitFor } from '@testing-library/react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { useGetCharacterQuery } from '../src/store/apiSlice';
import CharacterDetailsComponent from '../src/components/CharacterDetails/CharacterDetails';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { CharacterDetails } from '../src/types/types';
import { ThemeProvider } from '../src/context/ThemeProvider';

interface MockQueryOverrides {
  data?: unknown;
  error?: unknown;
  isLoading?: boolean;
  isFetching?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
  useSearchParams: vi.fn(() => [new URLSearchParams(), vi.fn()]),
  useNavigate: vi.fn(() => vi.fn()),
}));

vi.mock('../src/store/apiSlice', () => ({
  useGetCharacterQuery: vi.fn(),
}));

vi.mock('../src/shared/hooks/useTheme', () => ({
  useTheme: vi.fn(() => ({
    theme: 'light',
    toggleTheme: vi.fn(),
  })),
}));

vi.mock('../src/components/ui/Loader/Loader', () => ({
  default: () => <div>Loading...</div>,
}));

const mockCharacter: CharacterDetails = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth', url: '' },
  location: { name: 'Earth', url: '' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

const createMockQueryResult = (overrides: MockQueryOverrides = {}) => ({
  data: undefined,
  error: undefined,
  isLoading: false,
  isFetching: false,
  isSuccess: false,
  isError: false,
  refetch: vi.fn(),
  ...overrides,
});

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

describe('CharacterDetailsComponent', () => {
  const mockNavigate = vi.fn();
  const mockUseSearchParams = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(''),
      mockUseSearchParams,
    ]);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render error message when character ID is invalid', async () => {
    vi.mocked(useParams).mockReturnValue({ id: 'invalid' });
    vi.mocked(useGetCharacterQuery).mockReturnValue(
      createMockQueryResult({
        isError: true,
      })
    );

    render(<CharacterDetailsComponent />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(
        screen.getByText('Character not found or invalid ID')
      ).toBeInTheDocument();
      expect(screen.getByText('Close')).toBeInTheDocument();
    });
  });

  it('should navigate back with page and search params when close button is clicked', async () => {
    vi.mocked(useParams).mockReturnValue({ id: '1', page: '2' });
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams('search=rick'),
      mockUseSearchParams,
    ]);
    vi.mocked(useGetCharacterQuery).mockReturnValue(
      createMockQueryResult({
        data: { data: mockCharacter },
        isSuccess: true,
      })
    );

    render(<CharacterDetailsComponent />, { wrapper: Wrapper });

    screen.getByText('Close').click();

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/2?search=rick');
    });
  });

  it('should navigate back to root with search params when no page is specified', async () => {
    vi.mocked(useParams).mockReturnValue({ id: '1' });
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams('search=rick'),
      mockUseSearchParams,
    ]);
    vi.mocked(useGetCharacterQuery).mockReturnValue(
      createMockQueryResult({
        data: { data: mockCharacter },
        isSuccess: true,
      })
    );

    render(<CharacterDetailsComponent />, { wrapper: Wrapper });

    screen.getByText('Close').click();

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/?search=rick');
    });
  });
});
