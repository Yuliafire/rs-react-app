import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Pagination from '../src/components/Pagination/Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Pagination
        currentPage={1}
        totalPages={5}
        loading={false}
        onPageChange={() => {}}
      />
    );
    expect(container).toBeDefined();
  });
});
