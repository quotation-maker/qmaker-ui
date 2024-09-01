import type { Metadata } from 'next';
import 'normalize.css';
import '@styles/global.css';
import { pretendardFont } from '@styles/font';

const title = process.env.NEXT_PUBLIC_TITLE || '';
const description = process.env.NEXT_PUBLIC_DESCRIPTION || '';

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title || '',
  },
  icons: {
    icon: '/icons/main-logo.png',
  },
  description: description,
  authors: [{ name: 'doctork4' }, { name: 'hyunwlee' }],
  keywords: ['quotation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendardFont.className}>{children}</body>
    </html>
  );
}
