import { configureStore } from '@reduxjs/toolkit';
// import formsReducer from '../features/formsSlice';
import countriesReducer from '../store/countriesSlice';

// export const store = configureStore({
//   reducer: {
//     forms: formsReducer,
//     countries: countriesReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    // Add other reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
