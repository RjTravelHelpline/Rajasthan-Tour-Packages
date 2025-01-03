import { cochinFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
  description:
    "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-cochin',
  },
  openGraph: {
    title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
    description:
      "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-cochin',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/cochin-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Cochin | Rajasthan Tour Packages',
    description:
      "Uncover the wonders of the Rajasthan Tour from Cochin with a meticulously planned tour highlighting the state's rich history and stunning landscapes. Book now.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/cochin-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cochinFaq.questions.map((faq) => ({
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
