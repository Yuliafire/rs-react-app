import { useState, useRef } from 'react';
import FormFields, { type FormData } from '../../Fields/FormFields';
import * as Yup from 'yup';
import { formSchema } from '../../schema';
import type { FieldErrors } from 'react-hook-form';

interface UncontrolledFormProps {
  onSubmit: (
    data: Omit<FormData, 'id'> & { image?: string | File | null }
  ) => void;
}

export default function UncontrolledForm({ onSubmit }: UncontrolledFormProps) {
  const [errors, setErrors] = useState<FieldErrors<FormData>>({});
  const [password, setPassword] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error('Form reference is not available');
      setErrors({
        root: { message: 'Form reference is missing' },
      } as FieldErrors<FormData>);
      return;
    }

    const formData = new FormData(formRef.current);
    const data: Partial<FormData> = {};
    let imageFile: File | undefined;

    const imageInput = formRef.current.elements.namedItem(
      'image'
    ) as HTMLInputElement;
    if (imageInput && imageInput.files && imageInput.files[0]) {
      imageFile = imageInput.files[0];
    }

    formData.forEach((value, key) => {
      if (key === 'age') {
        data[key] = value ? Number(value) : undefined;
      } else if (key === 'acceptedTC') {
        data[key] = value === 'on';
      } else if (key !== 'image') {
        data[key] = value || undefined;
      }
    });

    try {
      const validatedData = await formSchema.validate(data, {
        abortEarly: false,
      });
      setErrors({});

      if (imageFile) {
        validatedData.image = imageFile;
      }

      onSubmit(
        validatedData as Omit<FormData, 'id'> & { image?: string | File | null }
      );
    } catch (validationErrors) {
      const newErrors: FieldErrors<FormData> = {};

      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof FormData] = {
              type: error.type,
              message: error.message,
            };
          }
        });
      }

      setErrors(newErrors);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <FormFields
        errors={errors}
        onSubmit={() => {}}
        passwordValue={password}
        setValue={undefined}
        onPasswordChange={handlePasswordChange}
      />
      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </form>
  );
}
