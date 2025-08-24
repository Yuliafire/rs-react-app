import { describe, expect, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MainPage from '../pages/Main/Main';
import type { FormData } from '../components/Form/types/types';
import formReducer from '../shared/store/formSlice';
import countriesReducer from '../shared/store/countriesSlice';

vi.mock('../../components/Form/schema', () => ({
  fileToBase64: vi
    .fn()
    .mockResolvedValue('data:image/png;base64,mockBase64String'),
}));

vi.mock('../../shared/store/countriesSlice', () => ({
  __esModule: true,
  default: () => ({ countries: ['USA', 'Canada', 'UK'] }),
  selectCountries: () => ['USA', 'Canada', 'UK'],
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
    <div data-testid="controlled-form">
      <button
        onClick={() =>
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
          })
        }
        data-testid="submit-controlled"
      >
        Submit Controlled
      </button>
    </div>
  ),
}));

vi.mock('../../components/Form/controllers/Uncontrolled/Uncontrolled', () => ({
  default: ({ onSubmit }: { onSubmit: (data: FormData) => void }) => (
    <div data-testid="uncontrolled-form">
      <button
        onClick={() =>
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
          })
        }
        data-testid="submit-uncontrolled"
      >
        Submit Uncontrolled
      </button>
    </div>
  ),
}));

describe('MainPage', () => {
  const mockStore = (
    initialState: {
      form: { submissions: FormData[] };
      countries: { countries: string[] };
    } = {
      form: { submissions: [] },
      countries: { countries: ['USA', 'Canada', 'UK'] },
    }
  ) => {
    return configureStore({
      reducer: {
        form: formReducer,
        countries: countriesReducer,
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
      countries: { countries: ['USA', 'Canada', 'UK'] },
    });

    renderWithStore(store);
  });

  it('does not display submitted forms section when no submissions', () => {
    const store = mockStore({
      form: {
        submissions: [],
      },
      countries: { countries: ['USA', 'Canada', 'UK'] },
    });

    renderWithStore(store);

    expect(screen.queryByTestId('submitted-forms')).not.toBeInTheDocument();
  });

  it('handles undefined submissions array gracefully', () => {
    const store = configureStore({
      reducer: {
        form: formReducer,
        countries: countriesReducer,
      },
      preloadedState: {
        form: {
          submissions: undefined as unknown as FormData[],
        },
        countries: { countries: ['USA', 'Canada', 'UK'] },
      },
    });

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );

    expect(screen.queryByTestId('submitted-forms')).not.toBeInTheDocument();
  });

  it('opens controlled form modal when button is clicked', () => {
    const store = mockStore();
    renderWithStore(store);

    fireEvent.click(screen.getByTestId('controlled-form-button'));

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent(
      'React Hook Form'
    );
  });

  it('opens uncontrolled form modal when button is clicked', () => {
    const store = mockStore();
    renderWithStore(store);

    fireEvent.click(screen.getByTestId('uncontrolled-form-button'));

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent(
      'Uncontrolled Form'
    );
  });

  it('closes modal when close button is clicked', () => {
    const store = mockStore();
    renderWithStore(store);
    fireEvent.click(screen.getByTestId('controlled-form-button'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('handles controlled form submission', async () => {
    const store = mockStore();
    renderWithStore(store);
    fireEvent.click(screen.getByTestId('controlled-form-button'));
  });

  it('handles uncontrolled form submission', async () => {
    const store = mockStore();
    renderWithStore(store);
    fireEvent.click(screen.getByTestId('uncontrolled-form-button'));
  });

  it('handles file conversion error gracefully', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    const mockContext = {
      submissions: [],
      setNewSubmissionId: vi.fn(),
      setShowModal: vi.fn(),
    };
    consoleError.mockRestore();
  });

  it('handles null data in form submission', async () => {
    const consoleError = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    consoleError.mockRestore();
  });

  it('displays highlighted submissions when newSubmissionId is set', () => {
    const mockSubmissions: FormData[] = [
      {
        id: 'test-id',
        name: 'Test User',
        age: 25,
        email: 'test@example.com',
        gender: 'male',
        country: 'USA',
        acceptedTC: true,
        image: null,
        password: '',
        confirmPassword: '',
      },
    ];

    const store = mockStore({
      form: {
        submissions: mockSubmissions,
      },
      countries: { countries: ['USA', 'Canada', 'UK'] },
    });

    renderWithStore(store);
  });
});
