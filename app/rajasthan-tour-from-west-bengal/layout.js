import { westbengalFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
  description:
    "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-west-bengal',
  },
  openGraph: {
    title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
    description:
      "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-west-bengal',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/west-bengal-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from West Bengal | Rajasthan Tour Packages',
    description:
      "Find the best Rajasthan Tour From Jaipur. Our expertly outlined visits offer a profound jump into the state's illustrious legacy and social abundance.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/west-bengal-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: westbengalFaq.questions.map((faq) => ({
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
