import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Legal Stay Georgia – Your Trusted Legal Partner',
  description:
    'Legal Stay Georgia provides comprehensive legal services: residence permits, company formation, banking support, tax residency, IT Virtual Zone, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {children}
      </body>
    </html>
  );
}
