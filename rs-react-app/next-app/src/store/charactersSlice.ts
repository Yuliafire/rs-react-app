import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface SelectedCharacter {
  id: number;
  name: string;
  species: string;
  status: string;
  detailsUrl: string;
}

interface CharactersState {
  selectedCharacters: SelectedCharacter[];
}

const initialState: CharactersState = {
  selectedCharacters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter(state, action: PayloadAction<SelectedCharacter>) {
      const itemExists = state.selectedCharacters.some(
        (item) => item.id === action.payload.id,
      );
      if (!itemExists) {
        state.selectedCharacters.push(action.payload);
      }
    },
    removeCharacter(state, action: PayloadAction<number>) {
      state.selectedCharacters = state.selectedCharacters.filter(
        (item) => item.id !== action.payload,
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
