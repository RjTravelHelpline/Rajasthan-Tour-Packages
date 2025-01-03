import { bikanerFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Bikaner | Rajasthan Tour Packages',
  description:
    'Uncover Rajasthans rich heritage from Bikaner with Rajasthan Tour Packages. Explore ancient forts, vibrant markets, and royal legacies across the state.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-bikaner',
  },
  openGraph: {
    title: 'Rajasthan Tour From Bikaner | Rajasthan Tour Packages',
    description:
      'Uncover Rajasthans rich heritage from Bikaner with Rajasthan Tour Packages. Explore ancient forts, vibrant markets, and royal legacies across the state.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-bikaner',
    images:
      "https://www.rajasthantourpackages.in/Images/Banners/bikaner-banner.webp';",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Bikaner | Rajasthan Tour Packages',
    description:
      'Uncover Rajasthans rich heritage from Bikaner with Rajasthan Tour Packages. Explore ancient forts, vibrant markets, and royal legacies across the state.',
    images:
      "https://www.rajasthantourpackages.in/Images/Banners/bikaner-banner.webp';",
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: bikanerFaq.questions.map((faq) => ({
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