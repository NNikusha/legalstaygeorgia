import { DM_Sans } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const dmSans = DM_Sans({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://legalstaygeo.com'),
  title: {
    default: 'Legal Stay Georgia – D1 Visa, Residence Permits & Company Formation',
    template: '%s | Legal Stay Georgia',
  },
  description:
    'Legal Stay Georgia helps foreigners move to Georgia: D1 visa, temporary residence permits, company registration, IT Virtual Zone, banking setup and tax optimization. Expert immigration lawyers in Tbilisi.',
  keywords: [
    'Georgia D1 visa',
    'D1 visa Georgia requirements',
    'residence permit Georgia',
    'temporary residence permit Georgia',
    'immigration lawyer Georgia',
    'business visa Georgia',
    'move to Georgia country',
    'start business in Georgia for foreigners',
    'company registration Georgia',
    'open company in Georgia',
    'residency in Georgia',
    'business in Georgia',
    'IT Virtual Zone Georgia',
    'tax residency Georgia',
    'Georgian LLC formation',
    'legal services Tbilisi',
  ],
  authors: [{ name: 'Legal Stay Georgia', url: 'https://legalstaygeo.com' }],
  creator: 'Legal Stay Georgia',
  publisher: 'Legal Stay Georgia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://legalstaygeo.com',
    siteName: 'Legal Stay Georgia',
    title: 'Legal Stay Georgia – D1 Visa, Residence Permits & Company Formation',
    description:
      'Expert legal services for foreigners in Georgia: D1 visa, residence permits, company registration, banking setup, tax optimization.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Legal Stay Georgia – Legal Services in Tbilisi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Stay Georgia – Legal Services for Foreigners',
    description:
      'D1 visa, residence permits, company formation, banking & tax optimization in Georgia.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/icons/logo.svg', type: 'image/svg+xml' }],
    shortcut: '/icons/logo.svg',
    apple: '/icons/logo.svg',
  },
  alternates: {
    canonical: 'https://legalstaygeo.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
