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
  }: {
    errors: FieldErrors<FormData>;
    onSubmit: () => void;
  }) => (
    <div data-testid="form-fields">
      <input name="name" placeholder="Name" data-testid="name-input" />
      <input name="email" placeholder="Email" data-testid="email-input" />
      <input
        name="password"
        type="password"
        placeholder="Password"
        data-testid="password-input"
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
  });

  it('displays validation errors on failure', async () => {
    const validationError = new (class extends Error {
      inner = [
        { path: 'name', message: 'Name is required', type: 'required' },
        { path: 'email', message: 'Email is invalid', type: 'email' },
      ];
    })();
    mockValidate.mockRejectedValueOnce(validationError);

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);
  });

  it('handles form reference error', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const originalRef = UncontrolledForm.prototype.formRef;
    UncontrolledForm.prototype.formRef = { current: null } as any;

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    consoleError.mockRestore();
    UncontrolledForm.prototype.formRef = originalRef;
  });

  it('handles image upload successfully', async () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: file,
    });

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.selectOptions(screen.getByTestId('gender-select'), 'male');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('tc-checkbox'));

    await waitFor(() => {
      expect(screen.queryByTestId('name-error')).not.toBeInTheDocument();
    });
  });

  it('handles image conversion failure', async () => {
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    mockValidate.mockResolvedValueOnce({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'Password123',
      age: 25,
      gender: 'male',
      country: 'USA',
      acceptedTC: true,
      image: file,
    });
    mockFileToBase64.mockRejectedValueOnce(new Error('Conversion failed'));

    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.type(screen.getByTestId('password-input'), 'Password123');
    await user.type(screen.getByTestId('age-input'), '25');
    await user.selectOptions(screen.getByTestId('gender-select'), 'male');
    await user.type(screen.getByTestId('country-input'), 'USA');
    await user.click(screen.getByTestId('tc-checkbox'));

    consoleError.mockRestore();
  });

  it('handles non-Yup validation error', async () => {
    const regularError = new Error('Regular error');
    mockValidate.mockRejectedValueOnce(regularError);

    render(<UncontrolledForm onSubmit={mockOnSubmit} />);
  });
});
