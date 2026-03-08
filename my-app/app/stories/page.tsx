import StoriesPage from '@/components/organisms/StoriesPage/StoriesPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services – D1 Visa, Residence Permits & Company Formation in Georgia',
  description:
    'Explore Legal Stay Georgia\'s full range of services: D1 visa, temporary & permanent residence permits, LLC formation, IT Virtual Zone, tax residency, banking support and real estate assistance in Tbilisi.',
  alternates: { canonical: 'https://legalstaygeo.com/stories' },
  openGraph: {
    title: 'Legal Services in Georgia – Residence, Business & Tax',
    description:
      'Full-service legal support for foreigners moving to or doing business in Georgia. D1 visa, company registration, banking, IT Virtual Zone and more.',
    url: 'https://legalstaygeo.com/stories',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Legal Stay Georgia Services',
      },
    ],
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Legal Stay Georgia – Services',
  url: 'https://legalstaygeo.com/stories',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'D1 Visa / Temporary Residence Permit Georgia' },
    { '@type': 'ListItem', position: 2, name: 'Permanent Residence Permit Georgia' },
    { '@type': 'ListItem', position: 3, name: 'Company Registration (LLC) Georgia' },
    { '@type': 'ListItem', position: 4, name: 'IT Virtual Zone Registration Georgia' },
    { '@type': 'ListItem', position: 5, name: 'Tax Residency & Optimization Georgia' },
    { '@type': 'ListItem', position: 6, name: 'Banking & KYC Support Georgia' },
    { '@type': 'ListItem', position: 7, name: 'Real Estate Legal Assistance Georgia' },
    { '@type': 'ListItem', position: 8, name: 'Individual Entrepreneur Registration Georgia' },
    { '@type': 'ListItem', position: 9, name: 'Study Permit Georgia' },
    { '@type': 'ListItem', position: 10, name: 'Family Reunification Georgia' },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <StoriesPage />
    </>
  );
}
