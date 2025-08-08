import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { CharacterDetails } from '../src/types/types';
import { useTheme } from '../src/shared/hooks/useTheme';
import { store } from '../src/store/store';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/shared/hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

vi.mock('../src/components/ui/Loader/Loader', () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

const mockUseTheme = vi.mocked(useTheme);

describe('ResultsSection', () => {
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
    {
      id: 2,
      name: 'Morty Smith',
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
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <Provider store={store}>
        <MemoryRouter>{ui}</MemoryRouter>
      </Provider>
    );
  };

  it('renders loading state when loading is true', () => {
    renderWithProviders(
      <ResultsSection
        loading={true}
        error={null}
        results={[]}
        onCardClick={vi.fn()}
      />
    );
  });

  it('renders error message when error exists', () => {
    const errorMessage = 'Server error occurred';
    renderWithProviders(
      <ResultsSection
        loading={false}
        error={errorMessage}
        results={[]}
        onCardClick={vi.fn()}
      />
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it('renders no results message when results array is empty', () => {
    renderWithProviders(
      <ResultsSection
        loading={false}
        error={null}
        results={[]}
        onCardClick={vi.fn()}
      />
    );

    expect(
      screen.getByText('No characters found. Try another search!')
    ).toBeInTheDocument();
  });

  it('renders CardList with results when not loading and no error', () => {
    renderWithProviders(
      <ResultsSection
        loading={false}
        error={null}
        results={mockCharacters}
        onCardClick={vi.fn()}
      />
    );

    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.queryByText('No characters found')).not.toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
