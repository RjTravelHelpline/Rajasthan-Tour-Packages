import { vijayawadaFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Vijaywada | Rajasthan Tour Packages',
  description:
    'Rajasthan Tour from Vijayawada to the land of kings in Rajasthan tour packages. Find the royal forts, palaces, and colorful traditions of Rajasthan. Book now.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-vijaywada',
  },
  openGraph: {
    title: 'Rajasthan Tour From Vijaywada | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Vijayawada to the land of kings in Rajasthan tour packages. Find the royal forts, palaces, and colorful traditions of Rajasthan. Book now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-vijaywada',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/vijayawada-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Vijaywada | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Vijayawada to the land of kings in Rajasthan tour packages. Find the royal forts, palaces, and colorful traditions of Rajasthan. Book now.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/vijayawada-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vijayawadaFaq.questions.map((faq) => ({
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
