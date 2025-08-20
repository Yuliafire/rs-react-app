import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import commonFormReducer from './reducers/commonFormSlice';
import reactFormReducer from './reducers/reactFormSlice';

export const reducers = combineReducers({
  commonForm: commonFormReducer,
  reactForm: reactFormReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export type RootReducer = ReturnType<typeof reducers>;
