import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Golden Triangle Tour 5 Days Package | Rajasthan Tour Packages',
  description:
    "Get on a trip to India's iconic destinations at your 5-Day Golden Triangle Tour, featuring Delhi, Agra and Jaipur. Plan our trip now at Rajasthan Tour Packages.",
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/5days-golden-triangle-tour',
  },
  openGraph: {
    title: 'Golden Triangle Tour 5 Days Package | Rajasthan Tour Packages',
    description:
      "Get on a trip to India's iconic destinations at your 5-Day Golden Triangle Tour, featuring Delhi, Agra and Jaipur. Plan our trip now at Rajasthan Tour Packages.",
    url: 'https://www.rajasthantourpackages.in/5days-golden-triangle-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Golden Triangle Tour 5 Days Package | Rajasthan Tour Packages',
    description:
      "Get on a trip to India's iconic destinations at your 5-Day Golden Triangle Tour, featuring Delhi, Agra and Jaipur. Plan our trip now at Rajasthan Tour Packages.",
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
