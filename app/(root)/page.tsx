import dynamic from 'next/dynamic';
import Benefits from '@components/Benefits';
import Introduce from '@components/Introduce';
import Plans from '@components/Plans';

export default function Home() {
  const Form = dynamic(() => import('@components/Form'), {
    ssr: false,
  });

  return (
    <main>
      <Introduce />
      <Form />
      <Benefits />
      <Plans />
    </main>
  );
}
