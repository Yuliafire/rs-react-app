import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { type FormSchemaType } from '../schema';
import styles from './FormFields.module.scss';
import { selectCountries } from '../../../shared/store/countriesSlice';
import { useSelector } from 'react-redux';

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
      const processedData: FormData = {
        name: data.name as string,
        age: Number(data.age as string),
        email: data.email as string,
        password: data.password as string,
        confirmPassword: data.confirmPassword as string,
        gender: data.gender as string,
        acceptedTC: data.acceptedTC === 'on',
        country: data.country as string,
        image: data.image as string,
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

  const fields = (
    <div className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          type="text"
          className={styles.input}
          {...(register ? register('name') : {})}
        />
        {errors?.name && (
          <span className={styles.error}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="age" className={styles.label}>
          Age
        </label>
        <input
          id="age"
          type="number"
          min={0}
          className={styles.input}
          {...(register ? register('age') : {})}
        />
        {errors?.age && (
          <span className={styles.error}>{errors.age.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={styles.input}
          {...(register ? register('email') : {})}
        />
        {errors?.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={styles.input}
          {...(register ? register('password') : {})}
        />
        {passwordValue && (
          <div className={styles.passwordStrength}>
            <span className={styles.strengthText}>
              Strength: {passwordStrength}/5
            </span>
            <div className={styles.strengthBar}>
              <div
                className={`${styles.strengthFill} ${
                  passwordStrength <= 2
                    ? styles.strengthWeak
                    : passwordStrength <= 4
                      ? styles.strengthMedium
                      : styles.strengthStrong
                }`}
                style={{ width: `${(passwordStrength / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        )}
        {errors?.password && (
          <span className={styles.error}>{errors.password.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword" className={styles.label}>
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          className={styles.input}
          {...(register ? register('confirmPassword') : {})}
        />
        {errors?.confirmPassword && (
          <span className={styles.error}>{errors.confirmPassword.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="gender" className={styles.label}>
          Gender
        </label>
        <select
          id="gender"
          className={styles.input}
          {...(register ? register('gender') : {})}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors?.gender && (
          <span className={styles.error}>{errors.gender.message}</span>
        )}
      </div>

      <div className={styles.checkboxField}>
        <input
          id="acceptedTC"
          type="checkbox"
          className={styles.checkbox}
          {...(register ? register('acceptedTC') : {})}
        />
        <label htmlFor="acceptedTC" className={styles.label}>
          Accept Terms and Conditions
        </label>
        {errors?.acceptedTC && (
          <span className={styles.error}>{errors.acceptedTC.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="image" className={styles.label}>
          Upload Picture
        </label>
        <input
          id="image"
          type="file"
          accept="image/png, image/jpeg"
          className={styles.input}
          {...(register ? register('image') : {})}
        />
        {errors?.image && (
          <span className={styles.error}>{errors.image.message}</span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="country" className={styles.label}>
          Country
        </label>
        <input
          list="countries"
          id="country"
          className={styles.input}
          {...(register ? register('country') : {})}
        />
        <datalist id="countries">
          {countries.map((country: string) => (
            <option key={country} value={country} />
          ))}
        </datalist>
        {errors?.country && (
          <span className={styles.error}>{errors.country.message}</span>
        )}
      </div>

      {formType === 'uncontrolled' && (
        <input type="hidden" name="formType" value={formType} />
      )}
    </div>
  );

  return formType === 'uncontrolled' ? (
    <form onSubmit={handleSubmit} className={styles.form}>
      {fields}
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  ) : (
    fields
  );
}
