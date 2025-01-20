import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Jaisalmer Tour Package For 02 Days | Rajasthan Tour Packages',
  description:
    'Book a 2-day Jaisalmer tour package from Rajasthan Tour Packages to explore forts, desert dunes, and cultural wonders in Jaisalmer, all its best features.',
  keywords: [
  '02 Days Jaisalmer Tour Package', 'Jaisalmer Camel Safari', 'Jaisalmer Tour Package', 'Jaisalmer Desert Tour', 'Golden City', 'Jaisalmer city', 'Places of Jaisalmer', 'Jaipur or Delhi'
  ],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/2days-jaisalmer-tour-package',
  },
  openGraph: {
    title: 'Jaisalmer Tour Package For 02 Days | Rajasthan Tour Packages',
    description:
      'Book a 2-day Jaisalmer tour package from Rajasthan Tour Packages to explore forts, desert dunes, and cultural wonders in Jaisalmer, all its best features.',
    url: 'https://www.rajasthantourpackages.in/2days-jaisalmer-tour-package',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaisalmer Tour Package For 02 Days | Rajasthan Tour Packages',
    description:
      'Book a 2-day Jaisalmer tour package from Rajasthan Tour Packages to explore forts, desert dunes, and cultural wonders in Jaisalmer, all its best features.',
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
