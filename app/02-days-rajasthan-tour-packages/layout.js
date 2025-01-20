import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: '02 Days Rajasthan Tour Packages | Rajasthan Tour Packages',
  description:
    'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
  keywords: [
    'Rajasthan Trip for 02 Days', '02 Days Rajasthan Tour Package', 'Best destinations for 02 days Rajasthan tour', 'Rajasthani food', 'Jaisalmer Fort', '02 days Rajasthan tour', 'Amber Fort'
  ],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/02-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: '02 Days Rajasthan Tour Packages | Rajasthan Tour Packages',
    description:
      'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
    url: 'https://www.rajasthantourpackages.in/02-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '02 Days Rajasthan Tour Packages | Rajasthan Tour Packages',
    description:
      'It is possible to capture the spirit of Rajasthan in 2 days. Book your Rajasthan Tour Packages for a short and enjoyable trip to the most visited tourist place.',
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
