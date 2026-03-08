import Home from '@/components/organisms/Home/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Stay Georgia – D1 Visa, Residence Permits & Company Formation',
  description:
    'Legal Stay Georgia helps foreigners move to Georgia: D1 visa, temporary residence permits, company registration, IT Virtual Zone, banking setup and tax optimization.',
  alternates: { canonical: 'https://legalstaygeo.com' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Legal Stay Georgia',
  url: 'https://legalstaygeo.com',
  logo: 'https://legalstaygeo.com/icons/logo.svg',
  image: 'https://legalstaygeo.com/icons/logo.svg',
  description:
    'Expert legal services for foreigners in Georgia: D1 visa, residence permits, company formation, banking and tax optimization.',
  telephone: '+995551741616',
  email: 'contact@legalstaygeorgia.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Abashidze Street 34',
    addressLocality: 'Tbilisi',
    addressCountry: 'GE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '41.7151',
    longitude: '44.8271',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$$',
  areaServed: 'Georgia',
  serviceType: [
    'D1 Visa Assistance',
    'Residence Permit',
    'Company Registration',
    'Tax Optimization',
    'Banking Support',
    'IT Virtual Zone',
  ],
  sameAs: [
    'https://www.facebook.com/legalstaygeorgia',
    'https://www.instagram.com/legalstaygeorgia',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the D1 visa in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The D1 visa (temporary residence permit) allows foreigners to legally reside in Georgia for up to 1 year, renewable. Legal Stay Georgia handles the full application process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get a residence permit in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foreigners can obtain a Georgian residence permit through employment, company ownership, property ownership, or family reunification. Our team guides you through every step.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I register a company in Georgia as a foreigner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Georgia allows 100% foreign ownership of companies. You can register an LLC, individual enterprise, or IT Virtual Zone company. Legal Stay Georgia handles registration, documentation and compliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the IT Virtual Zone in Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The IT Virtual Zone is a Georgian tax incentive for IT companies — 0% corporate tax on foreign-sourced income. Legal Stay Georgia helps qualify and register your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I open a bank account in Georgia as a foreigner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Georgia has a straightforward banking system. Legal Stay Georgia assists both individuals and businesses with KYC/AML-compliant bank account opening.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to move to Georgia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost depends on your situation — residence permit fees, company registration, and legal support. Book a free consultation with Legal Stay Georgia to get a personalised quote.',
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Home />
    </>
  );
}
