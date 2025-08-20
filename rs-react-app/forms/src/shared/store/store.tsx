import { configureStore, type ThunkAction } from '@reduxjs/toolkit';

import type { Action } from 'redux';

import formReducer from '../../shared/store/formSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  devTools: process.env.NOD_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
