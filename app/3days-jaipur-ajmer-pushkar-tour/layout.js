import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: '3 Days Jaipur Ajmer & Pushkar Tour | Rajasthan Tour Packages',
  description:
    'Experience the Jaipur Ajmer Pushkar Tour today to explore Jaipur landmarks, Ajmer Sharif Dargah, and Pushkar Lake, and book your Rajasthan tour package now.',
  keywords: [
    'Jaipur Ajmer Pushkar Tour Package',
    'Pushkar Lake',
    '3 Days Jaipur Ajmer Pushkar Tour',
    'Ajmer Sharif Dargah',
    'Pushkar Market',
    'jaipur package for 3 days',
    'ajmer tour package',
    '3 days trip from jaipur',
    'Ajmer Sharif Dargah',
    'Jhalana Leopard Park',
    'Pushkar fair',
    'Rajasthani handicraft',
  ],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/3days-jaipur-ajmer-pushkar-tour',
  },
  openGraph: {
    title: '3 Days Jaipur Ajmer & Pushkar Tour | Rajasthan Tour Packages',
    description:
      'Experience the Jaipur Ajmer Pushkar Tour today to explore Jaipur landmarks, Ajmer Sharif Dargah, and Pushkar Lake, and book your Rajasthan tour package now.',
    url: 'https://www.rajasthantourpackages.in/3days-jaipur-ajmer-pushkar-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '3 Days Jaipur Ajmer & Pushkar Tour | Rajasthan Tour Packages',
    description:
      'Experience the Jaipur Ajmer Pushkar Tour today to explore Jaipur landmarks, Ajmer Sharif Dargah, and Pushkar Lake, and book your Rajasthan tour package now.',
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
