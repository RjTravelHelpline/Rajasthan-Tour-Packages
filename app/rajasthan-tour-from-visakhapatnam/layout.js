import { vishakhapatnamFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour From Visakhapatnam | Rajasthan Tour Packages',
  description:
    'Rajasthan Tour Packages helps you to travel from Vishakhapatnam to the heart of Rajasthan. Find state value as well as royalty, culture, and natural resources.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-visakhapatnam',
  },
  openGraph: {
    title: 'Rajasthan Tour From Visakhapatnam | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour Packages helps you to travel from Vishakhapatnam to the heart of Rajasthan. Find state value as well as royalty, culture, and natural resources.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-visakhapatnam',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/visakhapatnam-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Visakhapatnam | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour Packages helps you to travel from Vishakhapatnam to the heart of Rajasthan. Find state value as well as royalty, culture, and natural resources.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/visakhapatnam-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vishakhapatnamFaq.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <div>
      <main>{children}</main>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </div>
  );
}
