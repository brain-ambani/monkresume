import type { Metadata } from 'next';

import Header from '@/components/nav';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Interract with your resumes or create new resumes',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div>
          <Header />
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
