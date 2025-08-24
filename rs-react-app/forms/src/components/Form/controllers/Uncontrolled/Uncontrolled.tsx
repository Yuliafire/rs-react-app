import { useState, useRef } from 'react';
import FormFields, { type FormData } from '../../Fields/FormFields';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addNewSubmit } from '../../../../shared/store/formSlice';
import { formSchema, fileToBase64 } from '../../schema';

interface UncontrolledFormProps {
  onSubmit: () => void;
}

export default function UncontrolledForm({
  onSubmit: closeModal,
}: UncontrolledFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error('Form reference is not available');
      setErrors({ form: 'Form reference is missing' });
      return;
    }

    const formData = new FormData(formRef.current);
    const data: Partial<FormData> = {};
    let imageFile: File | undefined;

    formData.forEach((value, key) => {
      if (key === 'age') data[key] = Number(value);
      else if (key === 'acceptedTC') data[key] = value === 'on';
      else if (key === 'image' && value instanceof File) {
        imageFile = value;
        data[key] = value;
      } else {
        data[key] = value;
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

      closeModal();
    } catch (validationErrors) {
      const newErrors: Record<string, string> = {};
      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) newErrors[error.path] = error.message;
        });
      }
      setErrors(newErrors);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <FormFields errors={errors} onSubmit={() => {}} />
      {Object.keys(errors).length > 0 && (
        <div style={{ marginTop: '10px', minHeight: '20px' }}>
          {Object.values(errors).map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
