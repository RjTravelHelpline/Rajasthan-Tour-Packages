import { coimbatoreFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Coimbatore | Rajasthan Tour Packages',
  description:
    'Depart the Rajasthan Tour from Coimbatore, which has majestic and historical landmarks, each with a to-tell and a culture. Book the Rajasthan tour package now.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-coimbatore',
  },
  openGraph: {
    title: 'Rajasthan Tour from Coimbatore | Rajasthan Tour Packages',
    description:
      'Depart the Rajasthan Tour from Coimbatore, which has majestic and historical landmarks, each with a to-tell and a culture. Book the Rajasthan tour package now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-coimbatore',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/coimbatore-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Coimbatore | Rajasthan Tour Packages',
    description:
      'Depart the Rajasthan Tour from Coimbatore, which has majestic and historical landmarks, each with a to-tell and a culture. Book the Rajasthan tour package now.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/coimbatore-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: coimbatoreFaq.questions.map((faq) => ({
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
