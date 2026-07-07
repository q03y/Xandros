import type { Metadata } from 'next';
import { Providers } from './providers';
import './styles/globals.css';

export const metadata: Metadata = {
  title: 'Xandros - Gaming Platform',
  description: 'Discover games, connect with gamers, and explore the ultimate gaming community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
