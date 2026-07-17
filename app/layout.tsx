import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tuesday OS',
  description: 'Tuesday OS — a premium desktop-style AI interface.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
