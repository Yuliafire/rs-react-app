import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UncontrolledForm from '../components/Form/controllers/Uncontrolled/Uncontrolled';
import type { FieldErrors } from 'react-hook-form';
import type { FormData } from '../components/Form/types/types';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(() => ['USA']),
}));

vi.mock('../../Fields/FormFields', () => ({
  default: ({
    errors,
    onSubmit,
    passwordValue,
    onPasswordChange,
  }: {
    errors: FieldErrors<FormData>;
    onSubmit: () => void;
    passwordValue?: string;
    onPasswordChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <div data-testid="form-fields">
      <input
        name="name"
        placeholder="Name"
        data-testid="name-input"
        onChange={onPasswordChange && onPasswordChange}
        value={passwordValue}
      />
      <input name="email" placeholder="Email" data-testid="email-input" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={onPasswordChange}
        value={passwordValue || ''}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        data-testid="age-input"
      />
      <select name="gender" data-testid="gender-select">
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input
        name="country"
        placeholder="Country"
        list="countries"
        data-testid="country-input"
      />
      <datalist id="countries">
        {['USA'].map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      <input name="acceptedTC" type="checkbox" data-testid="tc-checkbox" />
      <input name="image" type="file" data-testid="file-input" />

      {errors.name && (
        <span data-testid="name-error">{errors.name.message}</span>
      )}
      {errors.email && (
        <span data-testid="email-error">{errors.email.message}</span>
      )}
      {errors.root && (
        <span data-testid="root-error">{errors.root.message}</span>
      )}
      {errors.age && <span data-testid="age-error">{errors.age.message}</span>}
      {errors.password && (
        <span data-testid="password-error">{errors.password.message}</span>
      )}
      {passwordValue && (
        <span data-testid="password-strength">
          Strength:{' '}
          {passwordValue.length >= 8 ? 5 : Math.min(passwordValue.length, 4)}/5
        </span>
      )}
      <button type="submit" data-testid="submit-button" onClick={onSubmit} />
    </div>
  ),
}));

const mockValidate = vi.fn();
const mockFileToBase64 = vi.fn().mockResolvedValue('base64-image-data');
const mockDispatch = vi.fn();

vi.mock('../../schema', () => ({
  formSchema: {
    validate: mockValidate,
  },
  fileToBase64: mockFileToBase64,
}));

vi.mock('../../../../shared/store/formSlice', () => ({
  addNewSubmit: vi.fn(),
}));

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: vi.fn(() => ['USA']),
}));

describe('UncontrolledForm', () => {
  const mockOnSubmit = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    mockValidate.mockReset();
    mockFileToBase64.mockResolvedValue('base64-image-data');
    mockDispatch.mockReset();
  });

  it('renders the form with submit button', () => {
    render(<UncontrolledForm onSubmit={mockOnSubmit} />);
    expect(screen.getByTestId('form-fields')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('submits the form successfully with valid data', async () => {
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: null,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.selectOptions(screen.getByTestId('gender-select'), 'male');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('tc-checkbox'));
    await user.click(screen.getByTestId('submit-button'));
  });

  it('displays password strength', async () => {
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: null,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('password-input'), 'Password123');
  });

  it('displays validation errors on failure', async () => {
    const validationError = new (class extends Error {
      inner = [
        { path: 'name', message: 'Name is required', type: 'required' },
        { path: 'email', message: 'Email is required', type: 'email' },
        { path: 'password', message: 'Password too weak', type: 'weak' },
      ];
    })();
    mockValidate.mockRejectedValueOnce(validationError);

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('name-error')).toHaveTextContent(
        'Name is required'
      );
      expect(screen.getByTestId('email-error')).toHaveTextContent(
        'Email is required'
      );
      expect(screen.getByTestId('password-error')).toHaveTextContent(
        'Password is required'
      );
    });
  });

  it('submits the form successfully with image', async () => {
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: null,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.selectOptions(screen.getByTestId('gender-select'), 'male');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('tc-checkbox'));
    await user.upload(
      screen.getByTestId('image-input'),
      new File([], 'image.png')
    );
    await user.click(screen.getByTestId('submit-button'));
  });

  it('toggles acceptedTC checkbox and submits', async () => {
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: null,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    const checkbox = screen.getByTestId('tc-checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.selectOptions(screen.getByTestId('gender-select'), 'male');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('submit-button'));
  });

  it('handles gender selection and submits', async () => {
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: null,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('tc-checkbox'));
    await user.click(screen.getByTestId('submit-button'));
  });

  it('handles empty form submission with errors', async () => {
    const validationError = new (class extends Error {
      inner = [
        { path: 'name', message: 'Name is required', type: 'required' },
        { path: 'email', message: 'Email is required', type: 'required' },
        { path: 'password', message: 'Password is required', type: 'required' },
        { path: 'age', message: 'Age is required', type: 'required' },
        { path: 'gender', message: 'Gender is required', type: 'required' },
        { path: 'country', message: 'Country is required', type: 'required' },
        {
          path: 'acceptedTC',
          message: 'Terms must be accepted',
          type: 'required',
        },
      ];
    })();
    mockValidate.mockRejectedValueOnce(validationError);

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('name-error')).toHaveTextContent(
        'Name is required'
      );
      expect(screen.getByTestId('email-error')).toHaveTextContent(
        'Email is required'
      );
      expect(screen.getByTestId('password-error')).toHaveTextContent(
        'Password is required'
      );
      expect(screen.getByTestId('age-error')).toHaveTextContent(
        'Age is required'
      );
      expect(screen.getByTestId('gender-error')).toHaveTextContent(
        'Gender is required'
      );
      expect(screen.getByTestId('country-error')).toHaveTextContent(
        'Country is required'
      );
      expect(screen.getByTestId('tc-error')).toHaveTextContent(
        'You must accept terms and conditions'
      );
    });
  });

  it('handles invalid age input', async () => {
    const validationError = new (class extends Error {
      inner = [{ path: 'age', message: 'Age must be positive', type: 'min' }];
    })();
    mockValidate.mockRejectedValueOnce(validationError);

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('age-input'), '-5');
    await user.click(screen.getByTestId('submit-button'));

    await waitFor(() => {
      expect(screen.getByTestId('age-error')).toHaveTextContent(
        'Age must be positive'
      );
    });
  });
});
