import { useState } from 'react';
import FormFields from '../../Fields/FormFields';
import type { FormData } from '../../types/types';

interface UncontrolledFormProps {
  onSubmit: (data: FormData) => void;
}

export default function UncontrolledForm({ onSubmit }: UncontrolledFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (data: unknown) => {
    const formData = data as FormData;

    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.acceptedTC)
      newErrors.acceptedTC = 'You must accept terms and conditions';
    if (!formData.country) newErrors.country = 'Country is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    onSubmit(formData);
  };

  return (
    <div>
      <FormFields formType="uncontrolled" onSubmit={handleSubmit} />
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 mt-4">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}
