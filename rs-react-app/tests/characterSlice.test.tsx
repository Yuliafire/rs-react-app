import { describe, it, expect } from 'vitest';
import charactersReducer, {
  addCharacter,
  removeCharacter,
  removeAllCharacters,
  type SelectedCharacter,
} from '../src/store/charactersSlice';

describe('charactersSlice', () => {
  const mockCharacter: SelectedCharacter = {
    id: 1,
    name: 'Rick Sanchez',
    species: 'Human',
    status: 'Alive',
    detailsUrl: 'https://rickandmortyapi.com/api/character/1',
  };

  const mockCharacter2: SelectedCharacter = {
    id: 2,
    name: 'Morty Smith',
    species: 'Human',
    status: 'Alive',
    detailsUrl: 'https://rickandmortyapi.com/api/character/2',
  };

  describe('initial state', () => {
    it('should have empty selectedCharacters array initially', () => {
      expect(charactersReducer(undefined, { type: 'unknown' })).toEqual({
        selectedCharacters: [],
      });
    });
  });

  describe('addCharacter', () => {
    it('should add a character to the state', () => {
      const state = charactersReducer(undefined, addCharacter(mockCharacter));
      expect(state.selectedCharacters).toEqual([mockCharacter]);
    });

    it('should not add duplicate characters', () => {
      let state = charactersReducer(undefined, addCharacter(mockCharacter));
      state = charactersReducer(state, addCharacter(mockCharacter));
      expect(state.selectedCharacters).toEqual([mockCharacter]);
    });

    it('should add multiple unique characters', () => {
      let state = charactersReducer(undefined, addCharacter(mockCharacter));
      state = charactersReducer(state, addCharacter(mockCharacter2));
      expect(state.selectedCharacters).toEqual([mockCharacter, mockCharacter2]);
    });
  });

  describe('removeCharacter', () => {
    it('should remove a character by id', () => {
      let state = charactersReducer(undefined, addCharacter(mockCharacter));
      state = charactersReducer(state, addCharacter(mockCharacter2));
      state = charactersReducer(state, removeCharacter(mockCharacter.id));
      expect(state.selectedCharacters).toEqual([mockCharacter2]);
    });

    it('should do nothing if character id not found', () => {
      let state = charactersReducer(undefined, addCharacter(mockCharacter));
      const initialState = { ...state };
      state = charactersReducer(state, removeCharacter(999));
      expect(state).toEqual(initialState);
    });
  });

  describe('removeAllCharacters', () => {
    it('should clear all characters', () => {
      let state = charactersReducer(undefined, addCharacter(mockCharacter));
      state = charactersReducer(state, addCharacter(mockCharacter2));
      state = charactersReducer(state, removeAllCharacters());
      expect(state.selectedCharacters).toEqual([]);
    });

    it('should work when state is already empty', () => {
      const state = charactersReducer(undefined, removeAllCharacters());
      expect(state.selectedCharacters).toEqual([]);
    });
  });
});
