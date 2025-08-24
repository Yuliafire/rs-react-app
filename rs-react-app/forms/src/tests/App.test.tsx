import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import App from '../App/App';

vi.mock('./routes', () => ({
  router: {
    _current: {
      routes: [],
    },
  },
}));

describe('App', () => {
  it('renders RouterProvider', () => {
    render(<App />);
  });
});
