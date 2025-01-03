import { kolkataFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
  description:
    'uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-kolkata',
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
    description:
      'uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-kolkata',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kolkata-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour Packages from Kolkata | Rajasthan Tour Packages',
    description:
      'uncover Rajasthan our tour packages from Kolkata. Enjoy majestic forts, rich culture, and luxury stays. Plan your royal adventure today with customized options.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kolkata-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kolkataFaq.questions.map((faq) => ({
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
