import { render, screen } from '@testing-library/react';
import Header from '../src/components/layout/Header/Header';
import { describe, it, expect } from 'vitest';

describe('Header Component', () => {
  it('renders with correct title and role', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
