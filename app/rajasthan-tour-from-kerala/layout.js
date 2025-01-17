import { keralaFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
  description:
    'Indulge in our royal heritage of Rajasthan tours from Kerala. Find historic cities, own a desert safari, and savour the vital culture with our curated packages.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-kerala',
  },
  openGraph: {
    title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
    description:
      'Indulge in our royal heritage of Rajasthan tours from Kerala. Find historic cities, own a desert safari, and savour the vital culture with our curated packages.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-kerala',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kerala-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour Packages from Kerala | Rajasthan Tour Packages',
    description:
      'Indulge in our royal heritage of Rajasthan tours from Kerala. Find historic cities, own a desert safari, and savour the vital culture with our curated packages.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kerala-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: keralaFaq.questions.map((faq) => ({
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