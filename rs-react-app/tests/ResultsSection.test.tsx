import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../src/store/charactersSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
    preloadedState: {
      characters: {
        selectedCharacters: [],
      },
    },
  });
};

vi.mock('../ui/Loader/Loader', () => ({
  default: ({ loading }: { loading: boolean }) =>
    loading ? (
      <div data-testid="loader" role="status">
        Loading...
      </div>
    ) : null,
}));

vi.mock('../ui/CardList/CardList', () => ({
  default: ({ characters }: { characters: CharacterDetails[] }) => (
    <ul data-testid="card-list">
      {characters.map((char) => (
        <li key={char.id} data-testid="card">
          {char.name}
        </li>
      ))}
    </ul>
  ),
}));

const mockCharacters: CharacterDetails[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
];

describe('ResultsSection Component', () => {
  const renderResultsSection = (props: {
    loading?: boolean;
    error?: string | null;
    results: CharacterDetails[];
    onResultClick?: () => void;
  }) => {
    const store = createTestStore();
    return render(
      <Provider store={store}>
        <ThemeProvider>
          <ResultsSection
            loading={props.loading || false}
            error={props.error || null}
            results={props.results}
            onCardClick={props.onResultClick || vi.fn()}
          />
        </ThemeProvider>
      </Provider>
    );
  };

  describe('Initial States', () => {
    it('shows error message', () => {
      const error = 'Test error';
      renderResultsSection({
        error,
        results: [],
      });
      expect(screen.getByText(error)).toBeInTheDocument();
    });

    it('shows empty state', () => {
      renderResultsSection({
        results: [],
      });
      expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
    });
  });

  describe('With Data', () => {
    it('renders character cards', () => {
      renderResultsSection({
        results: mockCharacters,
      });
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });

    it('handles missing data gracefully', () => {
      const incompleteChars = [{ ...mockCharacters[0], name: '' }];
      renderResultsSection({
        results: incompleteChars,
      });
      expect(screen.getAllByTestId('card')).toHaveLength(1);
    });
  });

  describe('Error Handling', () => {
    const errorCases = [
      { type: 'Network', message: 'Network Error' },
      { type: 'Not Found', message: '404: Not Found' },
      { type: 'Server', message: '500: Server Error' },
    ];

    errorCases.forEach(({ type, message }) => {
      it(`handles ${type} errors`, () => {
        const store = createTestStore();
        render(
          <Provider store={store}>
            <ThemeProvider>
              <ResultsSection
                error={message}
                results={[]}
                loading={false}
                onCardClick={vi.fn()}
              />
            </ThemeProvider>
          </Provider>
        );
        expect(screen.getByText(message)).toBeInTheDocument();
      });
    });
  });
});
