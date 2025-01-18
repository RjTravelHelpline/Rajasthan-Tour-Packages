import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
  description:
    'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
  keywords: [
    '03-days Rajasthan tour packages',
    'Rajasthan itinerary for 3 days',
    '3-days Rajasthan trip',
    'Udaipur City Palace',
    'Mehrangarh Fort',
    '03-days Rajasthan tour',
    'rajasthan trip plan',
    'Udaipur Trip Cost for 3 Days',
    'Honeymoon Packages for Udaipur',
    'places to visit in rajasthan in 3 days',
    'rajasthan trip plan for 3 days',
    '3 days trip in rajasthan',
    '3-day Rajasthan itinerary',
  ],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
    url: 'https://www.rajasthantourpackages.in/03-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Enjoy 03 Days Getaway in Rajasthan | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan heritage destinations in 3 days. Explore the most significant cities and famous historical places with Rajasthan Tour Packages quickly.',
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
