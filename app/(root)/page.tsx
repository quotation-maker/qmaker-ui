'use client';

import { useFunnel } from '@use-funnel/browser';
import React, { useState } from 'react';
import Benefits from '@components/Benefits';
import Form from '@components/Form';
import Introduce from '@components/Introduce';
import Plans from '@components/Plans';

export default function Home() {
  return (
    <main>
      <Introduce />
      <Form />
      <Test />
      <Benefits />
      <Plans />
    </main>
  );
}

type 이메일입력 = { email?: string; password?: string; other?: unknown };
// 2. 이메일은 입력됨
type 비밀번호입력 = { email: string; password?: string; other?: unknown };
// 3. 이메일과 비밀번호 입력됨
type 그외정보입력 = { email: string; password: string; other?: unknown };

// declare function 이메일입력(props: { onNext: (email: string) => void }): JSX.Element;
// declare function 비밀번호입력(props: { email: string; onNext: (password: string) => void }): JSX.Element;
// declare function 그외정보입력(): JSX.Element;

function 이메일입력(props: { onNext: (email: string) => void }) {
  const [email, setEmail] = useState('');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <button onClick={() => props.onNext(email)}>다음</button>
    </div>
  );
}

function 비밀번호입력(props: {
  email: string;
  onNext: (password: string) => void;
}) {
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        type="password"
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={() => props.onNext(password)}>다음</button>
    </div>
  );
}

function 그외정보입력() {
  return <div>그외 정보 입력</div>;
}

function Test() {
  const funnel = useFunnel<{
    이메일입력: 이메일입력;
    비밀번호입력: 비밀번호입력;
    그외정보입력: 그외정보입력;
  }>({
    id: 'test',
    initial: {
      step: '이메일입력',
      context: {},
    },
  });

  switch (funnel.step) {
    case '이메일입력':
      return (
        <이메일입력
          onNext={email => funnel.history.push('비밀번호입력', { email })}
        />
      );
    case '비밀번호입력':
      return (
        <비밀번호입력
          email={funnel.context.email} // 이메일 입력에서 입력했기 때문에 undefined가 아니에요!
          onNext={password => funnel.history.push('그외정보입력', { password })}
        />
      );
    case '그외정보입력':
      return <그외정보입력 />;
  }

  return <div>{null}</div>;
}
