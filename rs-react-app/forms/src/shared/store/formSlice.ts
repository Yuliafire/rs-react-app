import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

export interface FormData {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptedTC: boolean;
  country: string;
  image: string;
}

interface FormState {
  sentFormData: FormData[];
}

const initialState: FormState = {
  sentFormData: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveNewFormData: (state, action: PayloadAction<Omit<FormData, 'id'>>) => {
      state.sentFormData.push({
        ...action.payload,
        id: crypto.randomUUID(),
      });
    },
  },
});

export const selectSentFormData = createSelector(
  (state: RootState) => state.form,
  (form) => form.sentFormData
);

export const { saveNewFormData: addNewSubmit } = formSlice.actions;
export default formSlice.reducer;
