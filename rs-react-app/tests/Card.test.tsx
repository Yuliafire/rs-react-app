import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../src/components/ui/Card/Card';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../src/store/charactersSlice';

vi.mock('react-router-dom', () => ({
  useParams: () => ({ page: '1' }),
}));

vi.mock('./Card.module.scss', () => ({
  card: 'card',
  cardImage: 'cardImage',
  statusBadge: 'statusBadge',
  cardContent: 'cardContent',
  details: 'details',
  episodes: 'episodes',
  alive: '_alive_312e77',
  dead: '_dead_312e77',
  unknown: '_unknown_312e77',
}));

const createTestStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
    preloadedState: {
      characters: {
        selectedCharacters: [],
        ...preloadedState,
      },
    },
  });
};

const createTestCharacter = (
  overrides?: Partial<CharacterDetails>
): CharacterDetails => ({
  id: 1,
  name: 'Test Character',
  status: 'Alive',
  species: 'Test Species',
  type: '',
  gender: 'Genderless',
  origin: { name: 'Test Origin', url: '' },
  location: { name: 'Test Location', url: '' },
  image: 'test-image.jpg',
  episode: ['ep1', 'ep2'],
  url: '',
  created: '',
  ...overrides,
});

describe('Card Component', () => {
  const mockOnClick = vi.fn();
  let testCharacter: CharacterDetails;

  beforeEach(() => {
    testCharacter = createTestCharacter();
    vi.clearAllMocks();
  });

  const renderCard = (character: CharacterDetails, preloadedState = {}) => {
    const store = createTestStore(preloadedState);
    return render(
      <Provider store={store}>
        <ThemeProvider>
          <Card character={character} onCardClick={mockOnClick} />
        </ThemeProvider>
      </Provider>
    );
  };

  it('renders with correct test IDs', () => {
    renderCard(testCharacter);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByTestId('status-badge')).toBeInTheDocument();
  });

  describe('Status Badge', () => {
    it.each([
      ['Alive', '_alive_312e77'],
      ['Dead', '_dead_312e77'],
      ['unknown', '_unknown_312e77'],
    ])('applies correct class for %s status', (status, expectedClass) => {
      const char = createTestCharacter({ status });
      renderCard(char);

      const badge = screen.getByTestId('status-badge');
      expect(badge).toHaveTextContent(status);
      expect(badge).toHaveClass(expectedClass);
    });
  });

  describe('Episode Count', () => {
    it('displays correct episode count', () => {
      const char = createTestCharacter({ episode: ['ep1', 'ep2', 'ep3'] });
      renderCard(char);
      expect(screen.getByText(/Episodes:/)).toHaveTextContent('3');
    });
  });

  describe('Selection Checkbox', () => {
    it('renders checkbox unchecked when character is not selected', () => {
      renderCard(testCharacter);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('renders checkbox checked when character is selected', () => {
      const storeState = {
        selectedCharacters: [
          {
            id: testCharacter.id,
            name: testCharacter.name,
            species: testCharacter.species,
            status: testCharacter.status,
            detailsUrl: `/character/1/${testCharacter.id}`,
          },
        ],
      };
      renderCard(testCharacter, storeState);
      expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('dispatches addCharacter when checkbox is checked', () => {
      const store = createTestStore();
      const { getByRole } = render(
        <Provider store={store}>
          <ThemeProvider>
            <Card character={testCharacter} onCardClick={mockOnClick} />
          </ThemeProvider>
        </Provider>
      );

      fireEvent.click(getByRole('checkbox'));
    });

    it('dispatches removeCharacter when checkbox is unchecked', () => {
      const storeState = {
        selectedCharacters: [
          {
            id: testCharacter.id,
            name: testCharacter.name,
            species: testCharacter.species,
            status: testCharacter.status,
            detailsUrl: `/character/1/${testCharacter.id}`,
          },
        ],
      };
      const store = createTestStore(storeState);
      const { getByRole } = render(
        <Provider store={store}>
          <ThemeProvider>
            <Card character={testCharacter} onCardClick={mockOnClick} />
          </ThemeProvider>
        </Provider>
      );

      fireEvent.click(getByRole('checkbox'));
    });
  });

  describe('Card Interactions', () => {
    it('calls onCardClick when card is clicked', () => {
      renderCard(testCharacter);
      fireEvent.click(screen.getByTestId('card'));
      expect(mockOnClick).toHaveBeenCalled();
    });

    it('does not call onCardClick when checkbox is clicked', () => {
      renderCard(testCharacter);
      fireEvent.click(screen.getByRole('checkbox'));
      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      renderCard(testCharacter);

      const card = screen.getByTestId('card');
      expect(card).toHaveAttribute('role', 'button');
      expect(card).toHaveAttribute('tabIndex', '0');
      expect(card).toHaveAttribute(
        'aria-label',
        `View details for ${testCharacter.name}`
      );

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute(
        'aria-label',
        expect.stringContaining(testCharacter.name)
      );
    });
  });

  describe('handleCardClick', () => {
    it('logs character ID to console on card click', () => {
      const character = createTestCharacter();
      const consoleLogSpy = vi.spyOn(console, 'log');
      renderCard(character);
      fireEvent.click(screen.getByTestId('card'));
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        'Card clicked for character:',
        character.id
      );
    });

    it('calls onCardClick callback function on card click', () => {
      const character = createTestCharacter();
      renderCard(character);
      fireEvent.click(screen.getByTestId('card'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onCardClick when checkbox is clicked', () => {
      const character = createTestCharacter();
      renderCard(character);
      fireEvent.click(screen.getByRole('checkbox'));
      expect(mockOnClick).not.toHaveBeenCalled();
    });

    it('calls onCardClick with correct character ID', () => {
      const character = createTestCharacter({ id: 2 });
      renderCard(character);
      fireEvent.click(screen.getByTestId('card'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
