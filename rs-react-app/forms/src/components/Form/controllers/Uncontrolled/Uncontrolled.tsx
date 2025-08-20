import { useState, useRef } from 'react';
import FormFields, { type FormData } from '../../Fields/FormFields';
import styles from './Uncontrolled.module.scss';

interface UncontrolledFormProps {
  onSubmit: (data: FormData) => void;
}

export default function UncontrolledForm({ onSubmit }: UncontrolledFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error('Form reference is not available');
      setErrors({ form: 'Form reference is missing' });
      return;
    }

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData) as unknown as FormData;

    const newErrors: Record<string, string> = {};

    if (!data.name) newErrors.name = 'Name is required';
    if (!data.age || isNaN(Number(data.age)))
      newErrors.age = 'Age must be a valid number';
    if (!data.email) newErrors.email = 'Email is required';
    if (!data.password) newErrors.password = 'Password is required';
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!data.gender) newErrors.gender = 'Gender is required';
    if (!data.acceptedTC)
      newErrors.acceptedTC = 'You must accept terms and conditions';
    if (!data.country) newErrors.country = 'Country is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(data);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <FormFields
        formType="uncontrolled"
        errors={errors}
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      {Object.keys(errors).length > 0 && (
        <div className={styles.errorContainer}>
          {Object.values(errors).map((error, index) => (
            <p key={index} className={styles.errorMessage}>
              {error}
            </p>
          ))}
        </div>
      )}
    </form>
  );
}
