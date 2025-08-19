import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { FormData, FormSubmission } from './formTypes';

const initialState: {
  submissions: FormSubmission[];
} = {
  submissions: [],
};

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addSubmission: (
      state,
      action: PayloadAction<Omit<FormSubmission, 'id' | 'isNew'>>
    ) => {
      state.submissions.unshift({
        ...action.payload,
        id: Date.now().toString(),
        isNew: true,
      });
    },
    clearHighlight: (state, action: PayloadAction<string>) => {
      const submission = state.submissions.find((s) => s.id === action.payload);
      if (submission) submission.isNew = false;
    },
  },
});

export const { addSubmission, clearHighlight } = formSlice.actions;
export default formSlice.reducer;
