import { suratFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour From Surat | Rajasthan Tour Packages',
  description:
    "Discover Rajasthan's grandeur with a customized tour from Surat. Rajasthan Tour Packages offers an unforgettable blend of culture, history, and natural beauty.",
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-surat',
  },
  openGraph: {
    title: 'Rajasthan Tour From Surat | Rajasthan Tour Packages',
    description:
      "Discover Rajasthan's grandeur with a customized tour from Surat. Rajasthan Tour Packages offers an unforgettable blend of culture, history, and natural beauty.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-surat',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/surat-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Surat | Rajasthan Tour Packages',
    description:
      "Discover Rajasthan's grandeur with a customized tour from Surat. Rajasthan Tour Packages offers an unforgettable blend of culture, history, and natural beauty.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/surat-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: suratFaq.questions.map((faq) => ({
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
