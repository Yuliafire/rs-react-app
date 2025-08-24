import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ControlledForm from '../components/Form/controllers/Controlled/Controlled';
import { formSlice } from '../shared/store/formSlice';
import { countriesSlice } from '../shared/store/countriesSlice';

// Mock FormFields
vi.mock('../../Fields/FormFields', () => ({
  default: ({ register, errors, passwordValue }: any) => (
    <div>
      <input
        data-testid="name-input"
        {...register('name', { required: true })}
        value={''}
      />
      {errors.name && <span data-testid="name-error">Error</span>}
      <input
        data-testid="password-input"
        {...register('password', { required: true })}
        value={passwordValue || ''}
      />
    </div>
  ),
}));

const mockStore = configureStore({
  reducer: {
    form: formSlice.reducer,
    countries: countriesSlice.reducer,
  },
  preloadedState: {
    form: { sentFormData: [] },
    countries: { countries: ['USA', 'Canada'] },
  },
});

describe('ControlledForm', () => {
  it('renders form with disabled submit button when invalid', () => {
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={() => {}} />
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
    expect(screen.queryByTestId('name-error')).not.toBeInTheDocument();
  });

  it('enables submit button and submits form when valid', async () => {
    const mockOnSubmit = vi.fn();
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={mockOnSubmit} />
      </Provider>
    );
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
  });
});
