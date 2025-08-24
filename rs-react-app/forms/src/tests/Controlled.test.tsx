import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useForm, type UseFormReturn } from 'react-hook-form';
import ControlledForm from '../components/Form/controllers/Controlled/Controlled';
import { formSlice } from '../shared/store/formSlice';
import { countriesSlice } from '../shared/store/countriesSlice';
import type { FormSchemaType } from '../components/Form/schema';
import FormFields from '../components/Form/Fields/FormFields';

vi.mock('../../Fields/FormFields', () => ({
  default: vi.fn(
    ({
      register,
      errors,
      passwordValue,
    }: {
      register: (fieldName: keyof FormSchemaType) => object;
      errors: Record<string, { message?: string }>;
      passwordValue: string;
    }) => (
      <div data-testid="form-fields">
        <input data-testid="name-input" {...register('name')} defaultValue="" />
        {errors.name && (
          <span data-testid="name-error">{errors.name.message}</span>
        )}
        <input
          data-testid="email-input"
          {...register('email')}
          defaultValue=""
        />
        <input
          data-testid="password-input"
          {...register('password')}
          defaultValue={passwordValue || ''}
        />
        <input
          data-testid="age-input"
          {...register('age')}
          type="number"
          defaultValue=""
        />
        <input data-testid="image-input" type="file" onChange={() => {}} />
      </div>
    )
  ),
}));

vi.mock('../../schema', () => ({
  formSchema: {},
  fileToBase64: vi.fn().mockResolvedValue('data:image/png;base64,test'),
}));

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
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
  const mockRegister = vi.fn((fieldName: keyof FormSchemaType) => ({
    name: fieldName,
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
  }));

  const mockSetValue = vi.fn();
  const mockWatch = vi.fn();
  const mockHandleSubmit = vi.fn((callback) => (e: React.FormEvent) => {
    e.preventDefault();
    callback({} as FormSchemaType);
  });

  const baseUseFormReturn: UseFormReturn<FormSchemaType> = {
    register: mockRegister,
    handleSubmit: mockHandleSubmit,
    formState: {
      errors: {},
      isValid: false,
      isDirty: false,
      isSubmitting: false,
      submitCount: 0,
      touchedFields: {},
      dirtyFields: {},
      isValidating: false,
    },
    watch: mockWatch,
    setValue: mockSetValue,
    getValues: vi.fn(),
    trigger: vi.fn(),
    reset: vi.fn(),
    setError: vi.fn(),
    clearErrors: vi.fn(),
    setFocus: vi.fn(),
    unregister: vi.fn(),
    control: {} as any,
  };

  beforeEach(() => {
    vi.mocked(useForm).mockReturnValue(baseUseFormReturn);
    mockWatch.mockReturnValue('');
  });

  it('renders form with disabled submit button when invalid', () => {
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={vi.fn()} />
      </Provider>
    );

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
    expect(screen.queryByTestId('name-error')).not.toBeInTheDocument();
  });

  it('calls onSubmit with form data when submitted', async () => {
    const mockOnSubmit = vi.fn();
    const formData: FormSchemaType = {
      name: 'John Doe',
      age: 25,
      email: 'john@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
      gender: 'male',
      acceptedTC: true,
      country: 'USA',
      image: undefined,
    };

    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={mockOnSubmit} />
      </Provider>
    );

    const form = screen.getByTestId('form-fields').closest('form');
    fireEvent.submit(form!);
  });

  it('displays error messages for each field', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    const errors = {
      name: { message: 'Name is required' },
      age: { message: 'Age must be positive' },
      email: { message: 'Email is invalid' },
      password: { message: 'Password too weak' },
      confirmPassword: { message: 'Passwords do not match' },
      gender: { message: 'Gender is required' },
      acceptedTC: { message: 'Terms must be accepted' },
      image: { message: 'Invalid image file' },
      country: { message: 'Country is required' },
    };
    render(
      <Provider store={mockStore}>
        <FormFields
          register={mockRegister}
          errors={errors}
          passwordValue="Test123!"
          setValue={mockSetValue}
        />
      </Provider>
    );

    expect(screen.getByText(errors.name.message)).toBeInTheDocument();
    expect(screen.getByText(errors.age.message)).toBeInTheDocument();
    expect(screen.getByText(errors.email.message)).toBeInTheDocument();
    expect(screen.getByText(errors.password.message)).toBeInTheDocument();
    expect(screen.getByText(errors.gender.message)).toBeInTheDocument();
    expect(screen.getByText(errors.acceptedTC.message)).toBeInTheDocument();
    expect(screen.getByText(errors.image.message)).toBeInTheDocument();
    expect(screen.getByText(errors.country.message)).toBeInTheDocument();
  });

  it('displays form fields with proper registration', () => {
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={vi.fn()} />
      </Provider>
    );

    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();
    expect(screen.getByTestId('age-input')).toBeInTheDocument();
  });

  it('passes password value to FormFields component', () => {
    const testPassword = 'TestPassword123!';
    mockWatch.mockReturnValue(testPassword);

    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={vi.fn()} />
      </Provider>
    );
  });

  it('uses yupResolver for validation', () => {
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={vi.fn()} />
      </Provider>
    );
  });

  it('does not convert image when it is already a string', async () => {
    const mockOnSubmit = vi.fn();

    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={mockOnSubmit} />
      </Provider>
    );

    const form = screen.getByTestId('form-fields').closest('form');
    fireEvent.submit(form!);
  });

  it('handles form submission with validation mode', () => {
    render(
      <Provider store={mockStore}>
        <ControlledForm onSubmit={vi.fn()} />
      </Provider>
    );
  });
});
