import * as yup from 'yup';
import { store } from '../../shared/store/store';

const getCountries = () => store.getState().countries.countries || [];

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ['image/png', 'image/jpeg'];

export const formSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'First letter must be uppercase'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be positive')
    .integer('Age must be integer'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^a-zA-Z0-9]/, 'Password requires a special character'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  gender: yup.string().required('Gender is required'),
  acceptedTC: yup
    .boolean()
    .required('You must accept terms and conditions')
    .oneOf([true], 'You must accept terms and conditions'),
  country: yup
    .string()
    .required('Country is required')
    .test('valid-country', 'Invalid country', (value) => {
      const countries = getCountries();
      return countries.length === 0 || countries.includes(value);
    }),
  image: yup
    .mixed<string | File>()
    .notRequired()
    .test('file-type', 'Only PNG or JPEG allowed', (value) => {
      if (!value) return true;
      if (typeof value === 'string') {
        return (
          value.startsWith('data:image/png') ||
          value.startsWith('data:image/jpeg')
        );
      }
      if (value instanceof File) {
        return SUPPORTED_FORMATS.includes(value.type);
      }
      return false;
    })
    .test('file-size', 'File too large (max 5MB)', (value) => {
      if (!value) return true;
      if (value instanceof File) {
        return value.size <= MAX_FILE_SIZE;
      }
      return true;
    }),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
