import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import rickAndMortyApi from "./apiSlice";

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
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
