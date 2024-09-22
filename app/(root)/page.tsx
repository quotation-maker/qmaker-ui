import CardBenefits from '@components/CardBenefits';
import CardPlans from '@components/CardPlans';
import Form from '@components/commons/Form';
import Introduce from '@components/Introduce';

export default function Home() {
  return (
    <main>
      <Introduce />
      <Form />
      <CardBenefits />
      <CardPlans />
    </main>
  );
}
