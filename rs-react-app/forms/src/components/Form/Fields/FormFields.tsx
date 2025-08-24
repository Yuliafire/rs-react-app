import type {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form';
import type { FormSchemaType } from '../schema';
import styles from './FormFields.module.scss';
import { selectCountries } from '../../../shared/store/countriesSlice';
import { useSelector } from 'react-redux';

export type FormData = FormSchemaType;

interface FormFieldsProps {
  register?: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  passwordValue?: string;
  setValue?: UseFormSetValue<FormData>;
}

export default function FormFields({
  register,
  errors,
  passwordValue,
  setValue,
}: FormFieldsProps) {
  const countries = useSelector(selectCountries);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (setValue && file) {
      setValue('image', file);
    }
  };

  return (
    <div className={styles.form} data-testid="form-fields">
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          Name
        </label>
        <input
          id="name"
          type="text"
          className={styles.input}
          {...(register ? register('name') : { name: 'name' })}
          data-testid="name-input"
        />
        {errors.name && (
          <span className={styles.error} data-testid="name-error">
            {errors.name.message}
          </span>
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
          {...(register ? register('age') : { name: 'age' })}
          data-testid="age-input"
        />
        {errors.age && (
          <span className={styles.error} data-testid="age-error">
            {errors.age.message}
          </span>
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
          {...(register ? register('email') : { name: 'email' })}
          data-testid="email-input"
        />
        {errors.email && (
          <span className={styles.error} data-testid="email-error">
            {errors.email.message}
          </span>
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
          {...(register ? register('password') : { name: 'password' })}
          data-testid="password-input"
        />
        {passwordValue && (
          <div
            className={styles.passwordStrength}
            data-testid="password-strength"
          >
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
        {errors.password && (
          <span className={styles.error} data-testid="password-error">
            {errors.password.message}
          </span>
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
          {...(register
            ? register('confirmPassword')
            : { name: 'confirmPassword' })}
          data-testid="confirm-password-input"
        />
        {errors.confirmPassword && (
          <span className={styles.error} data-testid="confirm-password-error">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="gender" className={styles.label}>
          Gender
        </label>
        <select
          id="gender"
          className={styles.input}
          {...(register ? register('gender') : { name: 'gender' })}
          data-testid="gender-select"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {errors.gender && (
          <span className={styles.error} data-testid="gender-error">
            {errors.gender.message}
          </span>
        )}
      </div>

      <div className={styles.checkboxField}>
        <input
          id="acceptedTC"
          type="checkbox"
          className={styles.checkbox}
          {...(register ? register('acceptedTC') : { name: 'acceptedTC' })}
          data-testid="tc-checkbox"
        />
        <label htmlFor="acceptedTC" className={styles.label}>
          Accept Terms and Conditions
        </label>
        {errors.acceptedTC && (
          <span className={styles.error} data-testid="tc-error">
            {errors.acceptedTC.message}
          </span>
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
          onChange={handleFileChange}
          data-testid="image-input"
        />
        {errors.image && (
          <span className={styles.error} data-testid="image-error">
            {errors.image.message}
          </span>
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
          {...(register ? register('country') : { name: 'country' })}
          data-testid="country-input"
        />
        <datalist id="countries" role="listbox">
          {countries.map((country: string) => (
            <option key={country} value={country} />
          ))}
        </datalist>
        {errors.country && (
          <span className={styles.error} data-testid="country-error">
            {errors.country.message}
          </span>
        )}
      </div>
    </div>
  );
}
