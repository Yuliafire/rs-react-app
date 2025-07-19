import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../src/components/ui/Button/Button';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<Button />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('type', 'button');
      expect(button).not.toBeDisabled();
    });

    it('renders with custom type', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });

  describe('Functionality', () => {
    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Clickable</Button>);

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(
        <Button onClick={handleClick} disabled>
          Disabled
        </Button>
      );

      fireEvent.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper button role', () => {
      render(<Button>Accessible</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('maintains proper attributes when disabled', () => {
      render(<Button disabled>Disabled</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('disabled');
    });
  });
});
