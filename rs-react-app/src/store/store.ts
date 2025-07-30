import { configureStore } from '@reduxjs/toolkit';
import charactersSlice from './charactersSlice';

export const store = configureStore({
  reducer: {
    selectedCharacters: charactersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
