import { describe, it } from 'vitest';
import { formSlice } from '../shared/store/formSlice';
import type { FormState } from 'react-hook-form';

describe('saveNewFormData reducer', () => {
  it('adds a new form data to the state with a generated id', () => {
    const initialState: FormState = {
      sentFormData: [],
    };
    const action = {
      type: 'saveNewFormData',
      payload: {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        password: 'password',
        confirmPassword: 'password',
        gender: 'male',
        acceptedTC: true,
        country: 'USA',
        image: 'image.jpg',
      },
    };
    const newState = formSlice.reducer(initialState, action);
  });

  it('updates the state correctly when multiple form data are added', () => {
    const initialState: FormState<FormData> = {
      sentFormData: [],
    };
    const action1 = {
      type: 'saveNewFormData',
      payload: {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        password: 'password',
        confirmPassword: 'password',
        gender: 'male',
        acceptedTC: true,
        country: 'USA',
        image: 'image.jpg',
      },
    };
    const action2 = {
      type: 'saveNewFormData',
      payload: {
        name: 'Jane Doe',
        age: 25,
        email: 'jane.doe@example.com',
        password: 'password',
        confirmPassword: 'password',
        gender: 'female',
        acceptedTC: true,
        country: 'Canada',
        image: 'image2.jpg',
      },
    };
    const newState = formSlice.reducer(
      formSlice.reducer(initialState, action1),
      action2
    );
  });

  it('generates a unique id using crypto.randomUUID()', () => {
    const initialState: FormState = {
      sentFormData: [],
    };
    const action = {
      type: 'saveNewFormData',
      payload: {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com',
        password: 'password',
        confirmPassword: 'password',
        gender: 'male',
        acceptedTC: true,
        country: 'USA',
        image: 'image.jpg',
      },
    };
    const newState = formSlice.reducer(initialState, action);
  });
});
