import { render, screen } from '@testing-library/react';
import CardList from '../src/components/ui/CardList/CardList';
import type { CharacterDetails } from '../src/types/types';
import { vi, describe, it, expect } from 'vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../src/store/charactersSlice';
import '@testing-library/jest-dom/vitest';

const createTestStore = () => {
  return configureStore({
    reducer: {
      selectedCharacters: charactersReducer,
    },
  });
};

vi.mock('../src/components/ui/Card/Card', () => ({
  default: ({ character }: { character: CharacterDetails }) => (
    <div data-testid="card">{character.id}</div>
  ),
}));

describe('CardList Component', () => {
  const generateMockCharacters = (count: number): CharacterDetails[] =>
    Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Character ${i + 1}`,
      status: 'Unknown',
      species: 'Unknown',
      type: '',
      gender: 'Unknown',
      image: '',
      url: '',
      created: new Date().toISOString(),
      origin: { name: 'Unknown', url: '' },
      location: { name: 'Unknown', url: '' },
      episode: [],
    }));

  const renderCardList = (characters: CharacterDetails[]) => {
    const store = createTestStore();
    return render(
      <Provider store={store}>
        <ThemeProvider>
          <CardList characters={characters} onCardClick={vi.fn()} />
        </ThemeProvider>
      </Provider>
    );
  };

  describe('Rendering Behavior', () => {
    it('renders one card when given one character', () => {
      renderCardList(generateMockCharacters(1));
      expect(screen.getAllByTestId('card')).toHaveLength(1);
    });

    it('renders multiple cards when given multiple characters', () => {
      const testCount = 3;
      renderCardList(generateMockCharacters(testCount));
      expect(screen.getAllByTestId('card')).toHaveLength(testCount);
    });

    it('renders no cards when given an empty array', () => {
      renderCardList([]);
      expect(screen.queryAllByTestId('card')).toHaveLength(0);
    });
  });

  describe('Data Handling', () => {
    it('handles duplicate characters correctly', () => {
      const duplicateData = [
        generateMockCharacters(1)[0],
        generateMockCharacters(1)[0],
      ];
      renderCardList(duplicateData);
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });
  });

  describe('Performance', () => {
    it('renders large lists without crashing', () => {
      const largeList = generateMockCharacters(100);
      expect(() => renderCardList(largeList)).not.toThrow();
    });

    it('renders extremely large lists without crashing', () => {
      const extremelyLargeList = generateMockCharacters(1000);
      expect(() => renderCardList(extremelyLargeList)).not.toThrow();
    });
  });

  describe('Event Handling', () => {
    it('calls onCardClick when a card is clicked', () => {
      const onCardClick = vi.fn();
      const testData = generateMockCharacters(1);
      render(
        <Provider store={createTestStore()}>
          <ThemeProvider>
            <CardList characters={testData} onCardClick={onCardClick} />
          </ThemeProvider>
        </Provider>
      );

      const card = screen.getByTestId('card');
      card.click();
    });
  });
});
