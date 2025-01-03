import { karnatakaFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour Packages from Karnataka | Rajasthan Tour Packages',
  description:
    'Experience Rajasthan royal palaces, desert adventure and cultural heritage. Book your customized Rajasthan tour from Karnataka today for an unforgettable trip.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-karnataka',
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Karnataka | Rajasthan Tour Packages',
    description:
      'Experience Rajasthan royal palaces, desert adventure and cultural heritage. Book your customized Rajasthan tour from Karnataka today for an unforgettable trip.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-karnataka',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/karnataka-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour Packages from Karnataka | Rajasthan Tour Packages',
    description:
      'Experience Rajasthan royal palaces, desert adventure and cultural heritage. Book your customized Rajasthan tour from Karnataka today for an unforgettable trip.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/karnataka-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: karnatakaFaq.questions.map((faq) => ({
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