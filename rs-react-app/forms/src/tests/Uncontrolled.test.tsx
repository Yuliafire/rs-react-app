import { describe, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UncontrolledForm from '../components/Form/controllers/Uncontrolled/Uncontrolled';
import type { FieldErrors } from 'react-hook-form';
import type { FormData } from '../components/Form/types/types';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(() => ['USA']),
}));

vi.mock('../../Fields/FormFields', () => ({
  default: ({ errors }: { errors: FieldErrors<FormData> }) => (
    <div>
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
      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </div>
  ),
}));

const mockValidate = vi.fn();
const mockFileToBase64 = vi.fn().mockResolvedValue('base64-image-data');

vi.mock('../../schema', () => ({
  formSchema: {
    validate: mockValidate,
  },
  fileToBase64: mockFileToBase64,
}));

vi.mock('../../../../shared/store/formSlice', () => ({
  addNewSubmit: vi.fn(),
}));

describe('UncontrolledForm', () => {
  const mockOnSubmit = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    mockValidate.mockReset();
    mockFileToBase64.mockResolvedValue('base64-image-data');
  });

  it('submits the form and calls onSubmit', async () => {
    render(<UncontrolledForm onSubmit={mockOnSubmit} />);

    await user.type(screen.getByTestId('name-input'), 'John Doe');
    await user.type(screen.getByTestId('email-input'), 'john@example.com');
    await user.click(screen.getByTestId('tc-checkbox'));
    await user.type(screen.getByTestId('country-input'), 'USA');
  });
});
