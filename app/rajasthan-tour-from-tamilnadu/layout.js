import { tamilnaduFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Tamil Nadu | Rajasthan Tour Packages',
  description:
    'Experience the magic of Rajasthan from Tamil Nadu with Rajasthan Tour Packages. Visit iconic forts, palaces, and cultural hubs in this royal destination.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-tamilnadu',
  },
  openGraph: {
    title: 'Rajasthan Tour From Tamil Nadu | Rajasthan Tour Packages',
    description:
      'Experience the magic of Rajasthan from Tamil Nadu with Rajasthan Tour Packages. Visit iconic forts, palaces, and cultural hubs in this royal destination.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-tamilnadu',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/tamilnadu-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Tamil Nadu | Rajasthan Tour Packages',
    description:
      'Experience the magic of Rajasthan from Tamil Nadu with Rajasthan Tour Packages. Visit iconic forts, palaces, and cultural hubs in this royal destination.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/tamilnadu-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tamilnaduFaq.questions.map((faq) => ({
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
