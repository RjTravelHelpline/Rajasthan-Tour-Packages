import { rajkotFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour From Rajkot | Rajasthan Tour Packages',
  description:
    'Arrange your Rajasthan enterprise from Rajkot with Rajasthan Visit Bundles. Encounter illustrious royal residences, posts and dynamic cities when rulers arrive.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-rajkot',
  },
  openGraph: {
    title: 'Rajasthan Tour From Rajkot | Rajasthan Tour Packages',
    description:
      'Arrange your Rajasthan enterprise from Rajkot with Rajasthan Visit Bundles. Encounter illustrious royal residences, posts and dynamic cities when rulers arrive.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-rajkot',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/rajkot-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Rajkot | Rajasthan Tour Packages',
    description:
      'Arrange your Rajasthan enterprise from Rajkot with Rajasthan Visit Bundles. Encounter illustrious royal residences, posts and dynamic cities when rulers arrive.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/rajkot-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: rajkotFaq.questions.map((faq) => ({
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
