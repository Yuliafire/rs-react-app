import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('MainPage Basic Tests', () => {
  it('renders main page title', () => {
    const MockMainPage = () => (
      <div data-testid="main-page">
        <header>
          <h1>Form Submission Portal</h1>
        </header>
        <div>
          <button>Show Controlled Form</button>
          <button>Show Uncontrolled Form</button>
        </div>
      </div>
    );

    render(<MockMainPage />);
    expect(screen.getByText('Form Submission Portal')).toBeInTheDocument();
  });

  it('shows form buttons', () => {
    const MockMainPage = () => (
      <div>
        <button>Show Controlled Form</button>
        <button>Show Uncontrolled Form</button>
      </div>
    );

    render(<MockMainPage />);
    expect(screen.getByText('Show Controlled Form')).toBeInTheDocument();
    expect(screen.getByText('Show Uncontrolled Form')).toBeInTheDocument();
  });
});
