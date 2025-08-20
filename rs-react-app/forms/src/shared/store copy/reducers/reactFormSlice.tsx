import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FormInterface } from './types';

const initialState: FormInterface = {
  name: null,
  age: null,
  mail: null,
  password: null,
  gender: null,
  photo: null,
  country: null,
};

export const reactFormSlice = createSlice({
  name: 'commonFormData',
  initialState,
  reducers: {
    setReactName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setReactAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setReactMail: (state, action: PayloadAction<string>) => {
      state.mail = action.payload;
    },
    setReactPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setReactGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setReactPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    setReactCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const {
  setReactName,
  setReactAge,
  setReactMail,
  setReactPassword,
  setReactGender,
  setReactPhoto,
  setReactCountry,
} = reactFormSlice.actions;

export const selectReactName = (state: RootState) => state.reactForm.name;
export const selectReactAge = (state: RootState) => state.reactForm.age;
export const selectReactMail = (state: RootState) => state.reactForm.mail;
export const selectReactPassword = (state: RootState) =>
  state.reactForm.password;
export const selectReactGender = (state: RootState) => state.reactForm.gender;
export const selectReactPhoto = (state: RootState) => state.reactForm.photo;
export const selectReactCountry = (state: RootState) => state.reactForm.country;

const reactFormReducer = reactFormSlice.reducer;
export default reactFormReducer;
