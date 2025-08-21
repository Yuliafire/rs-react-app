import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormFields from '../../Fields/FormFields';
import { formSchema, type FormSchemaType } from '../../schema';
import styles from './Controlled.module.scss';

interface ControlledFormProps {
  onSubmit: (data: FormSchemaType) => void;
}

export default function ControlledForm({ onSubmit }: ControlledFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormSchemaType>({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
  });

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <FormFields
        formType="controlled"
        register={register}
        errors={errors}
        passwordValue={password}
        onSubmit={onSubmit}
        // onSubmit={function (): void {
        //   throw new Error('Function not implemented.');
        // }}
      />
      <button type="submit" disabled={!isValid} className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
