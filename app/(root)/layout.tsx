import { type PropsWithChildren } from 'react';
import { Header, Footer } from '@components/commons';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
