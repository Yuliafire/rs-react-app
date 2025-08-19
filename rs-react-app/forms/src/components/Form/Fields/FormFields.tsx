// import { useSelector } from 'react-redux';
// import { selectCountries } from '../../../shared/store/countriesSlice';
// import type { UseFormRegister, FieldErrors } from 'react-hook-form';
// import { type FormSchemaType } from '../schema';

// export type FormData = FormSchemaType;

// interface FormFieldsProps {
//   formType: 'uncontrolled' | 'controlled';
//   onSubmit: (data: FormData) => void;
//   register?: UseFormRegister<FormData>;
//   errors?: FieldErrors<FormData>;
//   passwordValue?: string;
// }

// export default function FormFields({
//   formType,
//   onSubmit,
//   register,
//   errors,
//   passwordValue,
// }: FormFieldsProps) {
//   const countries = useSelector(selectCountries);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (formType === 'uncontrolled') {
//       const formData = new FormData(e.currentTarget);
//       const data = Object.fromEntries(formData.entries());

//       // Convert data to proper FormData structure
//       const processedData: FormData = {
//         name: data.name as string,
//         age: Number(data.age as string),
//         email: data.email as string,
//         password: data.password as string,
//         confirmPassword: data.confirmPassword as string,
//         gender: data.gender as string,
//         acceptedTC: data.acceptedTC === 'on',
//         country: data.country as string,
//         image: data.image as unknown as FileList,
//         // formType: 'uncontrolled' | 'controlled',
//       };

//       onSubmit(processedData);
//     }
//   };

//   const getPasswordStrength = (password: string = '') => {
//     let strength = 0;
//     if (password.length >= 8) strength++;
//     if (/[0-9]/.test(password)) strength++;
//     if (/[a-z]/.test(password)) strength++;
//     if (/[A-Z]/.test(password)) strength++;
//     if (/[^a-zA-Z0-9]/.test(password)) strength++;
//     return strength;
//   };

//   const passwordStrength = passwordValue
//     ? getPasswordStrength(passwordValue)
//     : 0;

//   return (
//     <form onSubmit={formType === 'uncontrolled' ? handleSubmit : undefined}>
//       {/* Name */}
//       <div>
//         <label htmlFor="name">Name</label>
//         <input id="name" type="text" {...(register ? register('name') : {})} />
//         {errors?.name && <span className="error">{errors.name.message}</span>}
//       </div>

//       {/* Age */}
//       <div>
//         <label htmlFor="age">Age</label>
//         <input
//           id="age"
//           type="number"
//           min={0}
//           {...(register ? register('age') : {})}
//         />
//         {errors?.age && <span className="error">{errors.age.message}</span>}
//       </div>

//       {/* Email */}
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           {...(register ? register('email') : {})}
//         />
//         {errors?.email && <span className="error">{errors.email.message}</span>}
//       </div>

//       {/* Password */}
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           {...(register ? register('password') : {})}
//         />
//         {passwordValue && (
//           <div className="password-strength">
//             <span>Strength: {passwordStrength}/5 </span>
//             <div className="strength-bar">
//               <div
//                 className={`strength-fill strength-${passwordStrength}`}
//                 style={{ width: `${(passwordStrength / 5) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         )}
//         {errors?.password && (
//           <span className="error">{errors.password.message}</span>
//         )}
//       </div>

//       {/* Confirm Password */}
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           id="confirmPassword"
//           type="password"
//           {...(register ? register('confirmPassword') : {})}
//         />
//         {errors?.confirmPassword && (
//           <span className="error">{errors.confirmPassword.message}</span>
//         )}
//       </div>

//       {/* Gender */}
//       <div>
//         <label htmlFor="gender">Gender</label>
//         <select id="gender" {...(register ? register('gender') : {})}>
//           <option value="">Select</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         {errors?.gender && (
//           <span className="error">{errors.gender.message}</span>
//         )}
//       </div>

//       {/* Accept T&C */}
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             {...(register ? register('acceptedTC') : {})}
//           />
//           Accept Terms and Conditions
//         </label>
//         {errors?.acceptedTC && (
//           <span className="error">{errors.acceptedTC.message}</span>
//         )}
//       </div>

//       {/* Picture Upload */}
//       <div>
//         <label htmlFor="image">Upload Picture</label>
//         <input
//           id="image"
//           type="file"
//           accept="image/png, image/jpeg"
//           {...(register ? register('image') : {})}
//         />
//         {errors?.image && <span className="error">{errors.image.message}</span>}
//       </div>

//       {/* Country Autocomplete */}
//       <div>
//         <label htmlFor="country">Country</label>
//         <input
//           list="countries"
//           id="country"
//           {...(register ? register('country') : {})}
//         />
//         <datalist id="countries">
//           {countries.map((country: string) => (
//             <option key={country} value={country} />
//           ))}
//         </datalist>
//         {errors?.country && (
//           <span className="error">{errors.country.message}</span>
//         )}
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={
//           formType === 'controlled' && errors && Object.keys(errors).length > 0
//         }
//         className="submit-button"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

import { useSelector } from 'react-redux';
import { selectCountries } from '../../../shared/store/countriesSlice';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { type FormSchemaType } from '../schema';

// Use FormSchemaType directly or create a compatible interface
export type FormData = FormSchemaType;

interface FormFieldsProps {
  formType: 'uncontrolled' | 'controlled';
  onSubmit: (data: FormData) => void;
  register?: UseFormRegister<FormData>;
  errors?: FieldErrors<FormData>;
  passwordValue?: string;
}

export default function FormFields({
  formType,
  onSubmit,
  register,
  errors,
  passwordValue,
}: FormFieldsProps) {
  const countries = useSelector(selectCountries);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formType === 'uncontrolled') {
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      // Convert data to proper FormData structure (matching FormSchemaType)
      const processedData: FormData = {
        name: data.name as string,
        age: Number(data.age as string),
        email: data.email as string,
        password: data.password as string,
        confirmPassword: data.confirmPassword as string,
        gender: data.gender as string,
        acceptedTC: data.acceptedTC === 'on',
        country: data.country as string,
        image: data.image as unknown as FileList, // Remove the 'unknown' cast
        formType: data.formType as 'uncontrolled' | 'controlled',
      };

      onSubmit(processedData);
    }
  };

  const getPasswordStrength = (password: string = '') => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = passwordValue
    ? getPasswordStrength(passwordValue)
    : 0;

  return (
    <form onSubmit={formType === 'uncontrolled' ? handleSubmit : undefined}>
      {/* Name */}
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" {...(register ? register('name') : {})} />
        {errors?.name && <span className="error">{errors.name.message}</span>}
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age" // Add name attribute
          type="number"
          min={0}
          {...(register ? register('age') : {})}
        />
        {errors?.age && <span className="error">{errors.age.message}</span>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...(register ? register('email') : {})}
        />
        {errors?.email && <span className="error">{errors.email.message}</span>}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...(register ? register('password') : {})}
        />
        {passwordValue && (
          <div className="password-strength">
            <span>Strength: {passwordStrength}/5 </span>
            <div className="strength-bar">
              <div
                className={`strength-fill strength-${passwordStrength}`}
                style={{ width: `${(passwordStrength / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        {errors?.password && (
          <span className="error">{errors.password.message}</span>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          // Add name attribute
          type="password"
          {...(register ? register('confirmPassword') : {})}
        />
        {errors?.confirmPassword && (
          <span className="error">{errors.confirmPassword.message}</span>
        )}
      </div>

      {/* Gender */}
      <div>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...(register ? register('gender') : {})}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors?.gender && (
          <span className="error">{errors.gender.message}</span>
        )}
      </div>

      {/* Accept T&C */}
      <div>
        <label>
          <input
            type="checkbox"
            {...(register ? register('acceptedTC') : {})}
          />
          Accept Terms and Conditions
        </label>
        {errors?.acceptedTC && (
          <span className="error">{errors.acceptedTC.message}</span>
        )}
      </div>

      {/* Picture Upload */}
      <div>
        <label htmlFor="image">Upload Picture</label>
        <input
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          {...(register ? register('image') : {})}
        />
        {errors?.image && <span className="error">{errors.image.message}</span>}
      </div>

      {/* Country Autocomplete */}
      <div>
        <label htmlFor="country">Country</label>
        <input
          list="countries"
          id="country"
          {...(register ? register('country') : {})}
        />
        <datalist id="countries">
          {countries.map((country: string) => (
            <option key={country} value={country} />
          ))}
        </datalist>
        {errors?.country && (
          <span className="error">{errors.country.message}</span>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={
          formType === 'controlled' && errors && Object.keys(errors).length > 0
        }
        className="submit-button"
      >
        Submit
      </button>
    </form>
  );
}
