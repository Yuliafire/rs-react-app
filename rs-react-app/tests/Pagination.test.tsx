import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Pagination from '../src/components/Pagination/Pagination';
import { ThemeProvider } from '../src/context/ThemeProvider';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <ThemeProvider>
        <Pagination
          currentPage={1}
          totalPages={5}
          loading={false}
          onPageChange={() => {}}
        />
      </ThemeProvider>
    );
    expect(container).toBeDefined();
  });
});
