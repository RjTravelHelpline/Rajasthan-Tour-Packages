import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Jaipur Tour Package For 02 Days | Rajasthan Tour Packages',
  description:
    "Know Jaipur's vibrant culture and breathtaking architecture on our 2-Day Jaipur Tour Package that gives you unforgettable moments in Pink City. Book today.",
  keywords: [
    'Jaipur Tour Package', '02 Days Jaipur Tour Package', 'Jaipur Sightseeing Tour', 'Best Places to Visit in Jaipur', 'Jaipur Travel Guide', 'best places in Jaipur', '02 day Jaipur tour', 'Amber Fort', 'Jhalana Leopard Safari'
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/2days-jaipur-tour-package',
  },
  openGraph: {
    title: 'Jaipur Tour Package For 02 Days | Rajasthan Tour Packages',
    description:
      "Know Jaipur's vibrant culture and breathtaking architecture on our 2-Day Jaipur Tour Package that gives you unforgettable moments in Pink City. Book today.",
    url: 'https://www.rajasthantourpackages.in/2days-jaipur-tour-package',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur Tour Package For 02 Days | Rajasthan Tour Packages',
    description:
      "Know Jaipur's vibrant culture and breathtaking architecture on our 2-Day Jaipur Tour Package that gives you unforgettable moments in Pink City. Book today.",
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
