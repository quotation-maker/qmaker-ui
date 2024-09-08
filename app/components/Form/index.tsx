'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@mui/material';
import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import styles from './form.css';

interface IFormInput {
  toUsername: string;
}
// 발신 : fromUsername
// 수신 : toUsername
export default function Form() {
  const schema = z.object({
    toUsername: z
      .string()
      .min(1, '받는 사람 이름은 필수 값입니다.')
      .max(255, '받는 사람 이름은 최대 255자입니다.'),
    toEmail: z
      .string()
      .trim()
      .regex(
        new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
        '올바른 이메일 형식이 아닙니다.',
      )
      .max(255, '이메일은 최대 255자입니다.'),
    toPhoneNumber: z.string().trim(), // 대시랑 숫자만 입력하게끔
    toCompany: z.string(), // 필수값 아님, 자유롭게 입력하는 형태
  });

  const methods = useForm<IFormInput>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });
  const { handleSubmit, register } = methods;
  const onSubmit: SubmitHandler<IFormInput> = () => {};

  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input {...register('toUsername')} />
        </div>

        <Button>Submit</Button>
      </form>
    </FormProvider>
  );
}
