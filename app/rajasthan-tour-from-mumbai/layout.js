import { mumbaiFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Holiday Packages From Mumbai | Rajasthan Tour Packages',
  description:
    'Discover Rajasthan holiday packages from Mumbai. Take pleasure in luxurious stays, vibrant culture, and custom tours. Start your trip and book now today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-mumbai',
  },
  openGraph: {
    title: 'Rajasthan Holiday Packages From Mumbai | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan holiday packages from Mumbai. Take pleasure in luxurious stays, vibrant culture, and custom tours. Start your trip and book now today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-mumbai',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mumbai-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Holiday Packages From Mumbai | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan holiday packages from Mumbai. Take pleasure in luxurious stays, vibrant culture, and custom tours. Start your trip and book now today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mumbai-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mumbaiFaq.questions.map((faq) => ({
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