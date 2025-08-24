import { configureStore } from '@reduxjs/toolkit';
import countriesReducer, {
  type CountriesState,
} from '../shared/store/countriesSlice';
import { describe, beforeEach, it, expect } from 'vitest';

describe('countriesSlice', () => {
  type MockRootState = {
    countries: CountriesState;
  };

  let store: ReturnType<typeof configureStore<MockRootState>>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        countries: countriesReducer,
      },
    });
  });

  const getState = () => store.getState();

  describe('initial state', () => {
    it('should have the correct initial state structure', () => {
      const initialState = getState().countries;

      expect(initialState).toEqual({
        countries: expect.any(Array),
      });
    });

    it('should contain an array of countries', () => {
      const initialState = getState().countries;

      expect(Array.isArray(initialState.countries)).toBe(true);
      expect(initialState.countries.length).toBeGreaterThan(0);
    });

    it('should have countries array sorted alphabetically', () => {
      const initialState = getState().countries;
      const countries = initialState.countries;

      const sortedCopy = [...countries].sort();
      expect(countries).toEqual(sortedCopy);
    });

    it('should contain specific expected countries', () => {
      const initialState = getState().countries;
      const countries = initialState.countries;

      expect(countries).toContain('United States');
      expect(countries).toContain('United Kingdom');
      expect(countries).toContain('Canada');
      expect(countries).toContain('Australia');
    });

    it('should not contain any empty strings', () => {
      const initialState = getState().countries;
      const countries = initialState.countries;

      const emptyStrings = countries.filter((country) => country.trim() === '');
      expect(emptyStrings).toHaveLength(0);
    });
  });

  describe('reducer', () => {
    it('should return the initial state when no action is provided', () => {
      const unknownAction = { type: 'UNKNOWN_ACTION' } as const;

      const state = countriesReducer(undefined, unknownAction);
      expect(state).toEqual({
        countries: expect.any(Array),
      });
    });

    it('should handle unknown actions by returning current state', () => {
      const currentState: CountriesState = {
        countries: ['Test Country'],
      };

      const unknownAction = { type: 'UNKNOWN_ACTION' } as const;
      const state = countriesReducer(currentState, unknownAction);

      expect(state).toBe(currentState);
      expect(state.countries).toEqual(['Test Country']);
    });
  });

  describe('data integrity', () => {
    it('should have unique country names', () => {
      const initialState = getState().countries;
      const countries = initialState.countries;

      const uniqueCountries = new Set(countries);
      expect(uniqueCountries.size).toBe(countries.length);
    });

    it('should have all country names as non-empty strings', () => {
      const initialState = getState().countries;
      const countries = initialState.countries;

      countries.forEach((country) => {
        expect(typeof country).toBe('string');
        expect(country.trim()).not.toBe('');
      });
    });
  });
});
