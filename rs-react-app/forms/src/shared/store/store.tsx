import { configureStore, type ThunkAction } from '@reduxjs/toolkit';
import type { Action } from 'redux';
import formReducer from '../../shared/store/formSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import countriesReducer from '../../shared/store/countriesSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    countries: countriesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
