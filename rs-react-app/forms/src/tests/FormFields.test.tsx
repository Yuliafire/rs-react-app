import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FormFields from '../components/Form/Fields/FormFields';

vi.mock('react-redux', () => ({
  useSelector: vi.fn().mockReturnValue(['USA', 'Canada', 'UK']),
}));

describe('FormFields', () => {
  it('renders all form fields', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue=""
        setValue={mockSetValue}
      />
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/accept terms and conditions/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/upload picture/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  it('displays password strength indicator with value', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue="Test123!"
        setValue={mockSetValue}
      />
    );

    const strengthText = screen.getByText(/strength: \d\/5/i);
    expect(strengthText).toBeInTheDocument();
    expect(screen.getByTestId('password-strength')).toBeInTheDocument();
  });

  it('handles file input change', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue=""
        setValue={mockSetValue}
      />
    );

    const fileInput = screen.getByLabelText(/upload picture/i);
    fireEvent.change(fileInput, {
      target: {
        files: [new File(['dummy'], 'image.png', { type: 'image/png' })],
      },
    });

    expect(mockSetValue).toHaveBeenCalledWith('image', expect.any(File));
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
      <FormFields
        register={mockRegister}
        errors={errors}
        passwordValue="Test123!"
        setValue={mockSetValue}
      />
    );

    expect(screen.getByTestId('name-error')).toHaveTextContent(
      'Name is required'
    );
    expect(screen.getByTestId('age-error')).toHaveTextContent(
      'Age must be positive'
    );
    expect(screen.getByTestId('email-error')).toHaveTextContent(
      'Email is invalid'
    );
    expect(screen.getByTestId('password-error')).toHaveTextContent(
      'Password too weak'
    );
    expect(screen.getByTestId('confirm-password-error')).toHaveTextContent(
      'Passwords do not match'
    );
    expect(screen.getByTestId('gender-error')).toHaveTextContent(
      'Gender is required'
    );
    expect(screen.getByTestId('tc-error')).toHaveTextContent(
      'Terms must be accepted'
    );
    expect(screen.getByTestId('image-error')).toHaveTextContent(
      'Invalid image file'
    );
    expect(screen.getByTestId('country-error')).toHaveTextContent(
      'Country is required'
    );
  });

  it('handles gender selection', () => {
    const mockRegister = vi.fn(() => ({
      onChange: vi.fn(),
      name: 'gender',
    }));
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue=""
        setValue={mockSetValue}
      />
    );

    const select = screen.getByTestId('gender-select');
    fireEvent.change(select, { target: { value: 'male' } });
    expect(select).toHaveValue('male');
  });

  it('toggles acceptedTC checkbox', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue=""
        setValue={mockSetValue}
      />
    );

    const checkbox = screen.getByTestId('tc-checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('handles empty password with no strength indicator', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    render(
      <FormFields
        register={mockRegister}
        errors={{}}
        passwordValue=""
        setValue={mockSetValue}
      />
    );

    expect(screen.queryByTestId('password-strength')).not.toBeInTheDocument();
  });

  it('displays password strength bar with different levels', () => {
    const mockRegister = vi.fn();
    const mockSetValue = vi.fn();
    const testCases = [
      { password: 'a', strength: 1, class: 'strengthWeak' },
      { password: 'ab12', strength: 2, class: 'strengthWeak' },
      { password: 'ab12CD', strength: 3, class: 'strengthMedium' },
      { password: 'ab12CD34', strength: 4, class: 'strengthMedium' },
      { password: 'ab12CD34!', strength: 5, class: 'strengthStrong' },
    ];

    testCases.forEach(({ password, strength }) => {
      render(
        <FormFields
          register={mockRegister}
          errors={{}}
          passwordValue={password}
          setValue={mockSetValue}
        />
      );

      const strengthText = screen.getByText(
        new RegExp(`Strength: ${strength}/5`)
      );
      expect(strengthText).toBeInTheDocument();
    });
  });
});
