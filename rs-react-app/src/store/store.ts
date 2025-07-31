import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';

export interface RootState {
  selectedCharacters: unknown;
  characters: {
    selectedCharacters: {
      id: number;
      name: string;
      species: string;
      status: string;
      detailsUrl: string;
    }[];
  };
}

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
