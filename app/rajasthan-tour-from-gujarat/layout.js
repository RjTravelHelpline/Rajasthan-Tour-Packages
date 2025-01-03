import { gujaratFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
  description:
    'Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-gujarat',
  },
  openGraph: {
    title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
    description:
      'Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-gujarat',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/gujarat-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Gujarat | Rajasthan Tour Packages',
    description:
      'Explore rich history and culture on a Rajasthan tour from Gujarat. Enjoy personalized itineraries that include iconic landmarks and immersive local experiences.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/gujarat-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gujaratFaq.questions.map((faq) => ({
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
