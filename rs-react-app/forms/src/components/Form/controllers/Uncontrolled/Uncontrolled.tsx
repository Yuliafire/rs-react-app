import { useState, useRef } from 'react';
import FormFields, { type FormData } from '../../Fields/FormFields';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNewSubmit } from '../../../../shared/store/formSlice';
import { formSchema, fileToBase64 } from '../../schema';
import type { FieldErrors } from 'react-hook-form';

interface UncontrolledFormProps {
  onSubmit: (data: FormData) => void;
}

export default function UncontrolledForm({ onSubmit }: UncontrolledFormProps) {
  const [errors, setErrors] = useState<FieldErrors<FormData>>({});
  const [password, setPassword] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

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

    formData.forEach((value, key) => {
      if (key === 'age') {
        data[key] = value ? Number(value) : undefined;
      } else if (key === 'acceptedTC') {
        data[key] = value === 'on';
      } else if (key === 'image' && value instanceof File) {
        imageFile = value;
        data[key] = value;
      } else {
        data[key] = value || undefined;
      }
    });

    try {
      const validatedData = await formSchema.validate(data, {
        abortEarly: false,
      });
      setErrors({});

      if (imageFile) {
        validatedData.image = await fileToBase64(imageFile);
      }

      dispatch(addNewSubmit(validatedData as FormData));
      onSubmit(validatedData as FormData);
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
      <button type="submit">Submit</button>
    </form>
  );
}
