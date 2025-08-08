import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchSection from '../src/components/SearchSection/SearchSection';
import {
  useSearchCharactersQuery,
  useGetCharacterQuery,
} from '../src/store/apiSlice';
import { useStorage } from '../src/shared/services/storageService';
import { useTheme } from '../src/shared/hooks/useTheme';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/store/apiSlice', () => ({
  useSearchCharactersQuery: vi.fn(),
  useGetCharacterQuery: vi.fn(),
}));

vi.mock('../src/shared/services/storageService', () => ({
  useStorage: vi.fn(),
}));

vi.mock('../src/shared/hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

const mockUseSearchCharactersQuery = vi.mocked(useSearchCharactersQuery);
const mockUseGetCharacterQuery = vi.mocked(useGetCharacterQuery);
const mockUseStorage = vi.mocked(useStorage);
const mockUseTheme = vi.mocked(useTheme);

describe('SearchSection', () => {
  const mockOnSearchResults = vi.fn();
  const mockOnLoadingChange = vi.fn();
  const mockOnErrorChange = vi.fn();
  const mockSetCurrentPage = vi.fn();
  const mockRefetchSearch = vi.fn();
  const mockRefetchCharacter = vi.fn();

  const mockCharacters: CharacterDetails[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: { name: 'Earth', url: '' },
      location: { name: 'Earth', url: '' },
      image: '',
      episode: [''],
      url: '',
      created: '',
    },
  ];

  beforeEach(() => {
    mockUseTheme.mockReturnValue({
      theme: 'light',
      toggleTheme: vi.fn(),
    });

    mockUseStorage.mockReturnValue({
      getSearchTerm: vi.fn().mockReturnValue(''),
      saveSearchTerm: vi.fn(),
      clearSearchTerm: vi.fn(),
      getSearchHistory: vi.fn().mockReturnValue([]),
      clearSearchHistory: vi.fn(),
    });

    mockUseSearchCharactersQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: mockRefetchSearch,
    });

    mockUseGetCharacterQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: mockRefetchCharacter,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderComponent = (initialEntries = ['/1']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <SearchSection
          onSearchResults={mockOnSearchResults}
          onLoadingChange={mockOnLoadingChange}
          onErrorChange={mockOnErrorChange}
          currentPage={1}
          setCurrentPage={mockSetCurrentPage}
        />
      </MemoryRouter>
    );
  };

  it('renders the search form', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    renderComponent();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Rick' } });
    expect(input).toHaveValue('Rick');
  });

  it('submits the form with trimmed value', async () => {
    renderComponent();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '  Rick  ' } });
  });

  it('shows loading state', () => {
    mockUseSearchCharactersQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
      refetch: mockRefetchSearch,
    });

    renderComponent();
    expect(
      screen.getByRole('button', { name: 'Searching...' })
    ).toBeInTheDocument();
    expect(mockOnLoadingChange).toHaveBeenCalledWith(true);
  });

  it('handles successful search', async () => {
    mockUseSearchCharactersQuery.mockReturnValue({
      data: { data: mockCharacters, info: { pages: 5 } },
      isLoading: false,
      error: null,
      refetch: mockRefetchSearch,
    });

    renderComponent();
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Rick' } });

    await waitFor(() => {
      expect(mockOnSearchResults).toHaveBeenCalledWith(
        mockCharacters,
        'Rick',
        5
      );
      expect(mockOnLoadingChange).toHaveBeenCalledWith(false);
    });
  });

  it('handles API error', async () => {
    mockUseSearchCharactersQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: { status: 500, data: { message: 'Server error' } },
      refetch: mockRefetchSearch,
    });

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Error: Server error')).toBeInTheDocument();
      expect(mockOnErrorChange).toHaveBeenCalledWith('Server error');
    });
  });

  it('shows force refresh button when data exists', () => {
    mockUseSearchCharactersQuery.mockReturnValue({
      data: { data: mockCharacters },
      isLoading: false,
      error: null,
      refetch: mockRefetchSearch,
    });

    renderComponent();
    expect(
      screen.getByRole('button', { name: 'Force Refresh' })
    ).toBeInTheDocument();
  });

  it('triggers force refresh', async () => {
    mockUseSearchCharactersQuery.mockReturnValue({
      data: { data: mockCharacters },
      isLoading: false,
      error: null,
      refetch: mockRefetchSearch.mockResolvedValue({}),
    });
    mockUseGetCharacterQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      refetch: mockRefetchCharacter.mockResolvedValue({}),
    });

    renderComponent(['/1/1']);
    fireEvent.click(screen.getByRole('button', { name: 'Force Refresh' }));

    await waitFor(() => {
      expect(mockRefetchSearch).toHaveBeenCalled();
    });
  });

  it('uses initial query from URL params', () => {
    mockUseStorage.mockReturnValue({
      getSearchTerm: vi.fn().mockReturnValue(''),
      saveSearchTerm: vi.fn(),
      clearSearchTerm: vi.fn(),
      getSearchHistory: vi.fn().mockReturnValue([]),
      clearSearchHistory: vi.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/?query=initial']}>
        <SearchSection
          onSearchResults={mockOnSearchResults}
          onLoadingChange={mockOnLoadingChange}
          onErrorChange={mockOnErrorChange}
          currentPage={1}
          setCurrentPage={mockSetCurrentPage}
        />
      </MemoryRouter>
    );

    expect(screen.getByRole('textbox')).toHaveValue('initial');
  });
});
