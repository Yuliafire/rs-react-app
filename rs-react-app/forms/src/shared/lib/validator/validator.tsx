import * as yup from 'yup';

// Country data type for better type safety
interface Country {
  code: string;
  name: string;
  zipRegex?: RegExp;
  zipExample?: string;
}

// Configure your country data (this would come from Redux in practice)
const countries: Country[] = [
  {
    code: 'us',
    name: 'United States',
    zipRegex: /^\d{5}(-\d{4})?$/,
    zipExample: 'e.g., 12345 or 12345-6789',
  },
  {
    code: 'gb',
    name: 'United Kingdom',
    zipRegex: /^([A-Z]{1,2}\d[A-Z0-9]? ?\d[A-Z]{2})$/,
    zipExample: 'e.g., SW1A 1AA',
  },
  {
    code: 'de',
    name: 'Germany',
    zipRegex: /^(\d{5})$/,
    zipExample: 'e.g., 10115',
  },
  // Add more countries as needed
];

// Image validation constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const baseFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z]/, 'First letter must be uppercase')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .test(
      'no-special-chars',
      'Name cannot contain special characters or numbers',
      (value) => /^[A-Za-z\s]+$/.test(value ?? '')
    ),

  age: yup
    .number()
    .required('Age is required')
    .typeError('Age must be a number')
    .positive('Age must be positive')
    .integer('Age must be an integer')
    .min(13, 'You must be at least 13 years old')
    .max(120, 'Please enter a valid age'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .test(
      'no-spaces',
      'Email must not contain leading/trailing spaces',
      (value) => !value || !/(^\s)|(\s$)/.test(value)
    )
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email must be in format example@domain.com'
    ),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[^A-Za-z0-9]/,
      'Password must contain at least one special character'
    ),

  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),

  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(
      ['male', 'female', 'other', 'prefer-not-to-say'],
      'Invalid gender selection'
    ),

  termsAccepted: yup
    .boolean()
    .required('You must accept the terms and conditions')
    .oneOf([true], 'You must accept the terms and conditions'),

  avatar: yup
    .mixed()
    .test(
      'fileSize',
      'File too large (max 5MB)',
      (value) =>
        !value || (value instanceof File && value.size <= MAX_FILE_SIZE)
    )
    .test(
      'fileFormat',
      'Unsupported file format (only JPEG/PNG)',
      (value) =>
        !value ||
        (value instanceof File && SUPPORTED_FORMATS.includes(value.type))
    ),

  country: yup
    .string()
    .required('Country is required')
    .oneOf(
      countries.map((c) => c.code),
      'Invalid country selection'
    ),

  zipCode: yup.string().when('country', {
    is: (country: string) =>
      countries.some((c) => c.code === country && c.zipRegex),
    then: (schema) =>
      schema
        .required('ZIP code is required for this country')
        .test('valid-zip', 'Invalid ZIP code format', function (value) {
          const countryCode = this.parent.country;
          const country = countries.find((c) => c.code === countryCode);
          return country?.zipRegex ? country.zipRegex.test(value ?? '') : true;
        }),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// Extended schema for React Hook Form with additional validation modes
export const controlledFormSchema = baseFormSchema.shape({
  // Additional real-time validation rules can go here
});

// Helper function for file to base64 conversion
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

// Password strength indicator type
export type PasswordStrength = {
  score: number;
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
};

// Password strength calculator
export const calculatePasswordStrength = (
  password: string
): PasswordStrength => {
  return {
    score: [
      password.length >= 8,
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[^A-Za-z0-9]/.test(password),
    ].filter(Boolean).length,
    hasMinLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
  };
};
