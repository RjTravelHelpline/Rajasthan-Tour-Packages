import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Jaisalmer Tour Package at Desert Safari | Rajasthan Tour Packages',
  description:
    'Immerse yourself in Jaisalmer with our tour package. Find golden forts, desert landscapes, and luxurious accommodations. Book your unique desert adventure now.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/3days-jaisalmer-desert-safari-tour',
  },
  openGraph: {
    title: 'Jaisalmer Tour Package at Desert Safari | Rajasthan Tour Packages',
    description:
      'Immerse yourself in Jaisalmer with our tour package. Find golden forts, desert landscapes, and luxurious accommodations. Book your unique desert adventure now.',
    url: 'https://www.rajasthantourpackages.in/3days-jaisalmer-desert-safari-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaisalmer Tour Package at Desert Safari | Rajasthan Tour Packages',
    description:
      'Immerse yourself in Jaisalmer with our tour package. Find golden forts, desert landscapes, and luxurious accommodations. Book your unique desert adventure now.',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: tour_faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
export default function Layout({ children }) {
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
