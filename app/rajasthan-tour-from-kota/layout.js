import { kotaFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
  description:
    "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-kota',
  },
  openGraph: {
    title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-kota',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Kota | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's royal heritage on a tour from Kota with Rajasthan Tour Packages. Discover vibrant cities, ancient palaces, and rich cultural experiences.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: kotaFaq.questions.map((faq) => ({
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
