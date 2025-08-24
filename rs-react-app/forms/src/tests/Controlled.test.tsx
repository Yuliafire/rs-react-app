// import { render, screen, fireEvent } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import ControlledForm from '../components/Form/controllers/Controlled/Controlled';

// // Mock FormFields
// vi.mock('../../Fields/FormFields', () => ({
//   default: ({ register, errors, passwordValue, setValue }: any) => (
//     <div>
//       <input
//         data-testid="name-input"
//         {...register('name', { required: true })}
//         value={''}
//       />
//       {errors.name && <span data-testid="name-error">Error</span>}
//       <input
//         data-testid="password-input"
//         {...register('password', { required: true })}
//         value={passwordValue || ''}
//       />
//       <button
//         data-testid="set-value-button"
//         onClick={() => setValue('password', 'Test123!')}
//       >
//         Set Password
//       </button>
//     </div>
//   ),
// }));

// describe('ControlledForm', () => {
//   it('renders form with disabled submit button when invalid', () => {
//     const mockOnSubmit = vi.fn();
//     render(<ControlledForm onSubmit={mockOnSubmit} />);
//     const submitButton = screen.getByRole('button', { name: /submit/i });
//     expect(submitButton).toBeDisabled();
//     expect(screen.queryByTestId('name-error')).not.toBeInTheDocument();
//   });

//   it('enables submit button and submits form when valid', async () => {
//     const mockOnSubmit = vi.fn();
//     render(<ControlledForm onSubmit={mockOnSubmit} />);
//     fireEvent.click(screen.getByTestId('set-value-button'));
//     const submitButton = screen.getByRole('button', { name: /submit/i });
//     expect(submitButton).not.toBeDisabled();
//     fireEvent.click(submitButton);
//     expect(mockOnSubmit).toHaveBeenCalledWith(
//       expect.objectContaining({
//         name: '',
//         password: 'Test123!',
//         image: undefined,
//       })
//     );
//   });
// });
