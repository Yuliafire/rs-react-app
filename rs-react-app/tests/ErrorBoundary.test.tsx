import { render, screen, fireEvent } from '@testing-library/react';
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../src/components/ErrorBoundary/ErrorBoundary';
import '@testing-library/jest-dom/vitest';
import React from 'react';

const mockConsoleError = vi
  .spyOn(console, 'error')
  .mockImplementation(() => {});

describe('ErrorBoundary', () => {
  beforeEach(() => {
    mockConsoleError.mockClear();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  describe('Error Catching Tests', () => {
    it('catches and handles JavaScript errors in child components', () => {
      const ErrorChild = () => {
        throw new Error('Test error');
      };

      render(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      );

      expect(
        screen.getByRole('heading', {
          level: 1,
          name: /DIMENSIONAL INSTABILITY DETECTED/i,
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText('Reality corruption level: critical')
      ).toBeInTheDocument();
    });

    it('displays fallback UI when error occurs', () => {
      const ErrorChild = () => {
        throw new Error('Test error');
      };

      render(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        'DIMENSIONAL INSTABILITY DETECTED'
      );
      expect(
        screen.getByText('Emergency stabilization protocols engaged')
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /REINITIALIZE SYSTEM/i })
      ).toBeInTheDocument();
    });

    it('logs error to console', () => {
      const testError = new Error('Test error');
      const ErrorChild = () => {
        throw testError;
      };

      render(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      );

      expect(console.error).toHaveBeenCalledWith(
        'Reality destabilization detected:',
        testError,
        expect.any(String)
      );
    });
  });

  describe('Error Button Tests', () => {
    it('handles errors from button clicks', () => {
      class ErrorButton extends React.Component {
        state = { shouldError: false };

        render() {
          if (this.state.shouldError) {
            throw new Error('Button-triggered error');
          }

          return (
            <button onClick={() => this.setState({ shouldError: true })}>
              Trigger Error
            </button>
          );
        }
      }

      render(
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      );

      expect(screen.getByText('Trigger Error')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Trigger Error'));
      expect(
        screen.getByText('DIMENSIONAL INSTABILITY DETECTED')
      ).toBeInTheDocument();
    });

    it('logs button-triggered errors to console', () => {
      class ErrorButton extends React.Component {
        state = { shouldError: false };

        render() {
          if (this.state.shouldError) {
            throw new Error('Button-triggered error');
          }

          return (
            <button onClick={() => this.setState({ shouldError: true })}>
              Trigger Error
            </button>
          );
        }
      }

      render(
        <ErrorBoundary>
          <ErrorButton />
        </ErrorBoundary>
      );

      fireEvent.click(screen.getByText('Trigger Error'));

      expect(console.error).toHaveBeenCalledWith(
        'Reality destabilization detected:',
        expect.any(Error),
        expect.any(String)
      );
    });
  });

  it('renders children when no error occurs', () => {
    const NormalChild = () => <div>Normal content</div>;

    render(
      <ErrorBoundary>
        <NormalChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('Normal content')).toBeInTheDocument();
    expect(
      screen.queryByText('DIMENSIONAL INSTABILITY DETECTED')
    ).not.toBeInTheDocument();
  });
});
