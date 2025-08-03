import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../src/store/charactersSlice';
import { store, type AppDispatch } from '../src/store/store';
import { addCharacter } from '../src/store/charactersSlice';
import type { SelectedCharacter } from '../src/store/charactersSlice';
import { describe, it, expect } from 'vitest';

describe('Redux Store Configuration', () => {
  const testCharacter: SelectedCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    detailsUrl: 'https://rickandmortyapi.com/api/character/1',
  };

  it('should have the correct initial state', () => {
    const state = store.getState();
    expect(state.characters.selectedCharacters).toEqual([]);
  });

  it('should properly configure the characters reducer', () => {
    const testStore = configureStore({
      reducer: {
        characters: charactersReducer,
      },
    });

    expect(testStore.getState().characters).toEqual({
      selectedCharacters: [],
    });
  });

  it('should update state when actions are dispatched', () => {
    const testStore = configureStore({
      reducer: {
        characters: charactersReducer,
      },
    });

    testStore.dispatch(addCharacter(testCharacter));
    const state = testStore.getState();
    expect(state.characters.selectedCharacters).toEqual([testCharacter]);
  });

  it('should have correct AppDispatch type', () => {
    const dispatch: AppDispatch = store.dispatch;
    dispatch(addCharacter(testCharacter));
    expect(store.getState().characters.selectedCharacters.length).toBe(1);
  });
});
