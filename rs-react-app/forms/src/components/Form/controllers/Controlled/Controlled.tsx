import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormFields from '../../Fields/FormFields';
import { formSchema, type FormSchemaType, fileToBase64 } from '../../schema';

interface ControlledFormProps {
  onSubmit: (data: FormSchemaType) => void;
}

export default function ControlledForm({ onSubmit }: ControlledFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
  } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const password = watch('password');

  const onFormSubmit = async (data: FormSchemaType) => {
    if (data.image instanceof File) {
      data.image = await fileToBase64(data.image);
    }
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <FormFields
        register={register}
        errors={errors}
        passwordValue={password}
        setValue={setValue}
      />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
