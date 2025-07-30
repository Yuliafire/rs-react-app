import { createSlice } from '@reduxjs/toolkit';

export type SelectedCharacter = {
  id: string;
  name: string;
  description: string;
};

const initialState: { selectedCharacters: SelectedCharacter[] } = {
  selectedCharacters: [],
};

const charactersSlice = createSlice({
  name: 'selectedCharacters',
  initialState,
  reducers: {
    addCharacter(state, action) {
      const characterIs = state.selectedCharacters.some(
        (character) => character.id === action.payload.id
      );

      if (!characterIs) {
        state.selectedCharacters.push(action.payload);
      }
    },

    removeCharacter(state, action) {
      state.selectedCharacters = state.selectedCharacters.filter(
        (character) => character.id !== action.payload.id
      );
    },

    removeAllCharacters(state) {
      state.selectedCharacters = [];
    },
  },
});

export const { addCharacter, removeCharacter, removeAllCharacters } =
  charactersSlice.actions;

export default charactersSlice.reducer;
