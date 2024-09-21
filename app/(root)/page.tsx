import CardBenefits from '@components/CardBenefits';
import CardPlans from '@components/CardPlans';
import Introduce from '@components/Introduce';

export default function Home() {
  return (
    <main>
      <Introduce />
      <CardBenefits />
      <CardPlans />
    </main>
  );
}
