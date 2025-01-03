import { agraFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
  description:
    'Take a Rajasthan tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. Book your personalized tour package now.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-agra',
  },
  openGraph: {
    title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
    description:
      'Take a Rajasthan tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. Book your personalized tour package now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-agra',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
    description:
      'Take a Rajasthan tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. Book your personalized tour package now.',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: agraFaq.questions.map((faq) => ({
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
