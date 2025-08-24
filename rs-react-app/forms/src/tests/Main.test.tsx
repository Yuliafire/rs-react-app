import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MainPage from '../pages/Main/Main';
import type { FormData } from '../components/Form/types/types';
import formReducer from '../shared/store/formSlice';

vi.mock('../../components/Form/schema', () => ({
  fileToBase64: vi
    .fn()
    .mockResolvedValue('data:image/png;base64,mockBase64String'),
}));

vi.mock('../../components/ui/Modal/Modal', () => ({
  default: ({
    children,
    isOpen,
    onClose,
  }: {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
  }) =>
    isOpen ? (
      <div data-testid="modal">
        <button onClick={onClose} data-testid="close-modal">
          Close
        </button>
        {children}
      </div>
    ) : null,
}));

vi.mock('../../components/Form/controllers/Controlled/Controlled', () => ({
  default: ({ onSubmit }: { onSubmit: (data: FormData) => void }) => (
    <form
      data-testid="controlled-form"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
          name: 'Test User',
          age: 25,
          email: 'test@example.com',
          gender: 'male',
          country: 'USA',
          acceptedTC: true,
          image: null,
          password: '',
          confirmPassword: '',
          id: 'test-id-1',
        });
      }}
    >
      <button type="submit" data-testid="submit-controlled">
        Submit Controlled
      </button>
    </form>
  ),
}));

vi.mock('../../components/Form/controllers/Uncontrolled/Uncontrolled', () => ({
  default: ({ onSubmit }: { onSubmit: (data: FormData) => void }) => (
    <form
      data-testid="uncontrolled-form"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
          name: 'Test User 2',
          age: 30,
          email: 'test2@example.com',
          gender: 'female',
          country: 'Canada',
          acceptedTC: true,
          image: null,
          password: '',
          confirmPassword: '',
          id: 'test-id-2',
        });
      }}
    >
      <button type="submit" data-testid="submit-uncontrolled">
        Submit Uncontrolled
      </button>
    </form>
  ),
}));

describe('MainPage', () => {
  const mockStore = (
    initialState: { form: { submissions: FormData[] } } = {
      form: { submissions: [] },
    }
  ) => {
    return configureStore({
      reducer: {
        form: formReducer,
      },
      preloadedState: initialState,
    });
  };

  const renderWithStore = (store: ReturnType<typeof mockStore>) => {
    return render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders main page title', () => {
    const store = mockStore();
    renderWithStore(store);

    expect(screen.getByTestId('page-title')).toHaveTextContent(
      'Form Submission Portal'
    );
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  it('displays form buttons', () => {
    const store = mockStore();
    renderWithStore(store);

    expect(screen.getByTestId('controlled-form-button')).toHaveTextContent(
      'Show Controlled Form'
    );
    expect(screen.getByTestId('uncontrolled-form-button')).toHaveTextContent(
      'Show Uncontrolled Form'
    );
  });

  it('displays submitted forms', () => {
    const mockSubmissions: FormData[] = [
      {
        id: '1',
        name: 'John Doe',
        age: 28,
        email: 'john@example.com',
        gender: 'male',
        country: 'USA',
        acceptedTC: true,
        image: null,
        password: '',
        confirmPassword: '',
      },
      {
        id: '2',
        name: 'Jane Smith',
        age: 32,
        email: 'jane@example.com',
        gender: 'female',
        country: 'UK',
        acceptedTC: true,
        image: 'data:image/png;base64,test123',
        password: '',
        confirmPassword: '',
      },
    ];

    const store = mockStore({
      form: {
        submissions: mockSubmissions,
      },
    });

    renderWithStore(store);
  });

  it('does not display submitted forms section when no submissions', () => {
    const store = mockStore({
      form: {
        submissions: [],
      },
    });

    renderWithStore(store);

    expect(screen.queryByTestId('submitted-forms')).not.toBeInTheDocument();
  });

  it('handles undefined submissions array gracefully', () => {
    const store = configureStore({
      reducer: {
        form: formReducer,
      },
      preloadedState: {
        form: {
          submissions: undefined as unknown as FormData[],
        },
      },
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.queryByTestId('submitted-forms')).not.toBeInTheDocument();
  });
});
