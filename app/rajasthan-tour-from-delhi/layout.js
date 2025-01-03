import { delhiFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
  description:
    'Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-delhi',
  },
  openGraph: {
    title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
    description:
      'Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-delhi',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Delhi Book Now | Rajasthan Tour Packages',
    description:
      'Embark on the Rajasthan Tour From Delhi. Our curated tour packages offer the perfect blend of heritage sites, colorful markets, and unforgettable experiences.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: delhiFaq.questions.map((faq) => ({
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
