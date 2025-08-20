import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInterface } from './types';
import { RootState } from '../store';

const initialState: FormInterface = {
  name: null,
  age: null,
  mail: null,
  password: null,
  gender: null,
  photo: null,
  country: null,
};

export const commonFormSlice = createSlice({
  name: 'commonFormData',
  initialState,
  reducers: {
    setCommonName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setCommonAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    setCommonMail: (state, action: PayloadAction<string>) => {
      state.mail = action.payload;
    },
    setCommonPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setCommonGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setCommonPhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    setCommonCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
  },
});

export const {
  setCommonName,
  setCommonAge,
  setCommonMail,
  setCommonPassword,
  setCommonGender,
  setCommonPhoto,
  setCommonCountry,
} = commonFormSlice.actions;

export const selectCommonName = (state: RootState) => state.commonForm.name;
export const selectCommonAge = (state: RootState) => state.commonForm.age;
export const selectCommonMail = (state: RootState) => state.commonForm.mail;
export const selectCommonPassword = (state: RootState) =>
  state.commonForm.password;
export const selectCommonGender = (state: RootState) => state.commonForm.gender;
export const selectCommonPhoto = (state: RootState) => state.commonForm.photo;
export const selectCommonCountry = (state: RootState) =>
  state.commonForm.country;

const commonFormReducer = commonFormSlice.reducer;
export default commonFormReducer;
