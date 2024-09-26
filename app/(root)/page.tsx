import Benefits from '@components/Benefits';
import Form from '@components/commons/Form';
import Introduce from '@components/Introduce';
import Plans from '@components/Plans';

export default function Home() {
  return (
    <main>
      <Introduce />
      <Form />
      <Benefits />
      <Plans />
    </main>
  );
}
