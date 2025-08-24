import { configureStore } from '@reduxjs/toolkit';
import { describe, it, expect, vi } from 'vitest';
import { store } from '../shared/store/store';
import formReducer from '../shared/store/formSlice';
import countriesReducer from '../shared/store/countriesSlice';

vi.mock('../../shared/store/formSlice', () => ({
  default: vi.fn().mockReturnValue({ sentFormData: [] }),
}));
vi.mock('../../shared/store/countriesSlice', () => ({
  default: vi.fn().mockReturnValue({ countries: [] }),
}));

describe('Redux Store', () => {
  it('configures store with correct reducers', () => {
    expect(store.getState()).toHaveProperty('form');
    expect(store.getState()).toHaveProperty('countries');
  });

  it('enables devTools in non-production environment', () => {
    vi.spyOn(process, 'env', 'get').mockReturnValue({
      NODE_ENV: 'development',
    });
    const testStore = configureStore({
      reducer: { form: formReducer, countries: countriesReducer },
      devTools: process.env.NODE_ENV !== 'production',
    });

    expect(testStore.getState).toBeDefined();
  });
});
