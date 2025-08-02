// import { render, screen, act } from '@testing-library/react';
// import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
// import Loader from '../src/components/ui/Loader/Loader';
// import '@testing-library/jest-dom/vitest';
// import { ThemeProvider } from '../src/context/ThemeProvider';

// vi.mock('./Loader.module.scss', () => ({
//   loaderWrapper: 'loaderWrapper',
//   loaderContainer: 'loaderContainer',
//   visible: 'visible',
//   loaderSpinner: 'loaderSpinner',
//   loaderText: 'loaderText',
// }));

// const mockTimerCallbacks = new Map<number, () => void>();
// let nextTimerId = 1;

// const timerServiceMock = {
//   setTimeout: vi.fn((callback: () => void) => {
//     const timerId = nextTimerId++;
//     mockTimerCallbacks.set(timerId, callback);
//     return timerId;
//   }),
//   clearAll: vi.fn(() => {
//     mockTimerCallbacks.clear();
//   }),
// };

// vi.mock('../../../utils/timerService', () => ({
//   default: timerServiceMock,
// }));

// describe('Loader Component', () => {
//   beforeEach(() => {
//     vi.useFakeTimers();
//     vi.clearAllMocks();
//     mockTimerCallbacks.clear();
//     nextTimerId = 1;
//   });

//   afterEach(() => {
//     vi.useRealTimers();
//   });

//   const advanceTimers = async (ms: number) => {
//     await act(async () => {
//       vi.advanceTimersByTime(ms);
//       const callbacks = Array.from(mockTimerCallbacks.entries());
//       callbacks.forEach(([timerId, callback]) => {
//         callback();
//         mockTimerCallbacks.delete(timerId);
//       });
//     });
//   };

//   it('should not render initially', () => {
//     render(<Loader />);
//     expect(screen.queryByTestId('loader')).toBeNull();
//   });

//   it('should render loading indicator after initial delay', async () => {
//     render(<Loader />);
//     await advanceTimers(100);
//     const loader = screen.getByTestId('loader');
//     expect(loader).toBeInTheDocument();
//     const spinner = screen.getByRole('status');
//     expect(spinner).toBeInTheDocument();
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   it('should render after initial delay', async () => {
//     render(<Loader />);
//     await advanceTimers(100);

//     expect(screen.getByTestId('loader')).toBeInTheDocument();
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   describe('Accessibility Tests', () => {
//     beforeEach(async () => {
//       vi.useFakeTimers();
//       render(<Loader />);
//       await advanceTimers(100);
//     });

//     it('should have proper ARIA attributes for screen readers', () => {
//       const loader = screen.getByTestId('loader');
//       expect(loader).toHaveAttribute('aria-busy', 'true');
//       expect(loader).toHaveAttribute('aria-live', 'polite');
//     });

//     it('should have visible loading text for screen readers', () => {
//       const loadingText = screen.getByText('Loading...');
//       expect(loadingText).toBeInTheDocument();
//       expect(loadingText).toBeVisible();
//     });
//   });
// });

import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import Loader from '../src/components/ui/Loader/Loader';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';

vi.mock('./Loader.module.scss', () => ({
  loaderWrapper: 'loaderWrapper',
  loaderContainer: 'loaderContainer',
  visible: 'visible',
  loaderSpinner: 'loaderSpinner',
  loaderText: 'loaderText',
  light: 'light',
  dark: 'dark',
}));

const mockTimerCallbacks = new Map<number, () => void>();
let nextTimerId = 1;

const timerServiceMock = {
  setTimeout: vi.fn((callback: () => void) => {
    const timerId = nextTimerId++;
    mockTimerCallbacks.set(timerId, callback);
    return timerId;
  }),
  clearAll: vi.fn(() => {
    mockTimerCallbacks.clear();
  }),
};

vi.mock('../../../utils/timerService', () => ({
  default: timerServiceMock,
}));

describe('Loader Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    mockTimerCallbacks.clear();
    nextTimerId = 1;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const advanceTimers = async (ms: number) => {
    await act(async () => {
      vi.advanceTimersByTime(ms);
      const callbacks = Array.from(mockTimerCallbacks.entries());
      callbacks.forEach(([timerId, callback]) => {
        callback();
        mockTimerCallbacks.delete(timerId);
      });
    });
  };

  const renderLoader = () => {
    return render(
      <ThemeProvider>
        <Loader />
      </ThemeProvider>
    );
  };

  it('should not render initially', () => {
    renderLoader();
    expect(screen.queryByTestId('loader')).toBeNull();
  });

  it('should render loading indicator after initial delay', async () => {
    renderLoader();
    await advanceTimers(100);
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render after initial delay', async () => {
    renderLoader();
    await advanceTimers(100);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  describe('Accessibility Tests', () => {
    beforeEach(async () => {
      renderLoader();
      await advanceTimers(100);
    });

    it('should have proper ARIA attributes for screen readers', () => {
      const loader = screen.getByTestId('loader');
      expect(loader).toHaveAttribute('aria-busy', 'true');
      expect(loader).toHaveAttribute('aria-live', 'polite');
    });

    it('should have visible loading text for screen readers', () => {
      const loadingText = screen.getByText('Loading...');
      expect(loadingText).toBeInTheDocument();
      expect(loadingText).toBeVisible();
    });
  });
});
