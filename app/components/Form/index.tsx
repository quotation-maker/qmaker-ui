'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import { useFunnel } from '@use-funnel/browser';
// import type { SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import styles from './form.css';
import type { FunnelState } from './type';

interface IFormInput {
  toUsername: string;
}
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
  // const { handleSubmit, control } = methods;
  // const {
  //   field,
  //   fieldState: { invalid }, // isDirty:, isTouched
  // } = useController<IFormInput>({
  //   name: 'toUsername',
  //   control,
  // });
  // const onSubmit: SubmitHandler<IFormInput> = () => { };
  const funnel = useFunnel<FunnelState>({
    id: 'quickStart',
    initial: {
      step: 'writer',
      context: {},
    },
  });

  return (
    <section className={styles.section}>
      <FormProvider {...methods}>
        <form
          className={styles.formContainer}
          // onSubmit={handleSubmit(onSubmit)}
        >
          <funnel.Render
            writer={({ history }) => (
              <WriterFields onNext={() => history.push('item')} />
            )}
            item={({ history }) => (
              <ItemFields onNext={() => history.push('receiver')} />
            )}
            receiver={({ history }) => (
              <ReceiverFields onNext={() => history.push('etc')} />
            )}
            etc={() => <EtcFields />}
          />
        </form>
        <div className={styles.buttonArea}>
          <Button className={styles.primaryButton}>Submit</Button>
        </div>
      </FormProvider>
    </section>
  );
}

function WriterFields({ onNext }: { onNext: () => void }) {
  return (
    <>
      <div>
        Writer
        {/*
          <TextField
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          label="받는 사람"
          variant="standard"
          helperText={invalid && '받는 사람 이름은 필수 값입니다.'}
          error={invalid}
          className={styles.textInput}
          />
          */}
        <button onClick={onNext}>next</button>
      </div>
    </>
  );
}

function ItemFields({ onNext }: { onNext: () => void }) {
  return (
    <>
      item <button onClick={onNext}>next</button>
    </>
  );
}

function ReceiverFields({ onNext }: { onNext: () => void }) {
  return (
    <>
      receiver <button onClick={onNext}>next</button>
    </>
  );
}

function EtcFields() {
  return <>etc</>;
}
