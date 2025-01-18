import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
  description:
    'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/10days-rajasthan-vacation-tour',
  },
  openGraph: {
    title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
    url: 'https://www.rajasthantourpackages.in/10days-rajasthan-vacation-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
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
