'use client';

import { Button, Input } from '@mui/material';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './form.css';

interface IFormInput {
  username: string;
}

export default function Form() {
  const methods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = () => {};

  return (
    <FormProvider {...methods}>
      <form
        className={styles.formContainer}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Input {...methods.register('username')} />
        <Button>Submit</Button>
      </form>
    </FormProvider>
  );
}
