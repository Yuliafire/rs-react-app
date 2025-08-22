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
});
