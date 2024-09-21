import { Logo, Navigation } from '@components/commons';
import styles from './header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
      <Logo />
    </header>
  );
}
