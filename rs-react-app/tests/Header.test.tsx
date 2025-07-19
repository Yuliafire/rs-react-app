import { render } from '@testing-library/react';
import Header from '../src/components/layout/Header/Header';
import { describe, it } from 'vitest';

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });
});
