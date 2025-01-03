import { maharashtraFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour from Maharashtra | Rajasthan Tour Packages',
  description:
    'Rajasthan Tour from Maharashtra to explore the royal palace, desert adventures, and vibrant festivals. You can just book your customized tour package today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-maharashtra',
  },
  openGraph: {
    title: 'Rajasthan Tour from Maharashtra | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Maharashtra to explore the royal palace, desert adventures, and vibrant festivals. You can just book your customized tour package today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-maharashtra',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/maharashtra-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Maharashtra | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Maharashtra to explore the royal palace, desert adventures, and vibrant festivals. You can just book your customized tour package today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/maharashtra-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: maharashtraFaq.questions.map((faq) => ({
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
