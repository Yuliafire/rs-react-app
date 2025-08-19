// import * as yup from 'yup';

// export const formSchema = yup.object({
//   name: yup
//     .string()
//     .required('Name is required')
//     .matches(/^[A-Z]/, 'First letter must be uppercase'),
//   age: yup
//     .number()
//     .required('Age is required')
//     .positive('Age must be positive')
//     .integer('Age must be integer'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup
//     .string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters')
//     .matches(/[0-9]/, 'Password requires a number')
//     .matches(/[a-z]/, 'Password requires a lowercase letter')
//     .matches(/[A-Z]/, 'Password requires an uppercase letter')
//     .matches(/[^a-zA-Z0-9]/, 'Password requires a special character'),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref('password')], 'Passwords must match')
//     .required('Confirm password is required'),
//   gender: yup.string().required('Gender is required'),
//   acceptedTC: yup
//     .boolean()
//     .oneOf([true], 'You must accept terms and conditions')
//     .required('You must accept terms and conditions'),
//   country: yup.string().required('Country is required'),
//   image: yup.mixed().test('fileType', 'Unsupported file format', (value) => {
//     if (!value) return true; // Allow empty
//     const file = value as FileList;
//     return file[0]?.type === 'image/jpeg' || file[0]?.type === 'image/png';
//   }),
// });

// // Export the type for use in components
// export type FormSchemaType = yup.InferType<typeof formSchema>;

// src/schema.ts
import * as yup from 'yup';

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
  country: yup.string().required('Country is required'),
  image: yup
    .mixed<FileList>()
    .test('fileType', 'Unsupported file format', (value) => {
      if (!value || (value as FileList).length === 0) return true; // Allow empty
      const file = value as FileList;
      return file[0]?.type === 'image/jpeg' || file[0]?.type === 'image/png';
    }),
  formType: yup
    .mixed<'uncontrolled' | 'controlled'>()
    .oneOf(['uncontrolled', 'controlled'], 'Invalid form type')
    .required('Form type is required'),
});

export type FormSchemaType = yup.InferType<typeof formSchema>;
