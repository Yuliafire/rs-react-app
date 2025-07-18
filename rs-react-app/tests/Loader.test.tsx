import { render, screen, act } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import Loader from '../src/components/ui/Loader/Loader';

vi.mock('./Loader.module.scss', () => ({
  loaderWrapper: 'loaderWrapper',
  loaderContainer: 'loaderContainer',
  visible: 'visible',
  loaderSpinner: 'loaderSpinner',
  loaderText: 'loaderText',
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

const advanceTimers = async (ms: number) => {
  await act(async () => {
    vi.advanceTimersByTime(ms);
    mockTimerCallbacks.forEach((callback, timerId) => {
      callback();
      mockTimerCallbacks.delete(timerId);
    });
  });
};

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

  it('should not render initially', () => {
    render(<Loader />);
    expect(screen.queryByTestId('loader')).toBeNull();
  });

  it('should render after initial delay', async () => {
    render(<Loader />);

    await advanceTimers(100);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should not update state if unmounted', () => {
    const { unmount } = render(<Loader />);
    unmount();
    expect(mockTimerCallbacks.size).toBe(0);
  });
});
