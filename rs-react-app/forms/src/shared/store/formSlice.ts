import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import type { FormData } from '../../components/Form/types/types';

type InitialStateSentFormData = { sentFormData: FormData[] };

const initialState: InitialStateSentFormData = {
  sentFormData: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    saveNewFormData: (state, action) => {
      return {
        ...state,
        sentFormData: [
          ...state.sentFormData,
          {
            name: action.payload.name,
            age: action.payload.age,
            email: action.payload.email,
            password: action.payload.password,
            confirmPassword: action.payload.confirmPassword,
            gender: action.payload.gender,
            acceptedTC: action.payload.acceptedTC,
            country: action.payload.country,
            image: action.payload.image,
          },
        ],
      };
    },
  },
});

export const selectSentFormData = createSelector(
  (state: { form: { sentFormData: [FormData] } }) => state.form,
  (form) => form.sentFormData
);

export const { saveNewFormData: addNewSubmit } = formSlice.actions;
export default formSlice.reducer;
