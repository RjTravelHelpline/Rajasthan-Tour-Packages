import { telanganaFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Telangana | Rajasthan Tour Packages',
  description:
    "Rajasthan prize on a visit from Telangana at Rajasthan Visit Bundles. Investigate antiquated fortifications, grand royal residences, and colourful festivals.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-telangana',
  },
  openGraph: {
    title: 'Rajasthan Tour From Telangana | Rajasthan Tour Packages',
    description:
      "Rajasthan prize on a visit from Telangana at Rajasthan Visit Bundles. Investigate antiquated fortifications, grand royal residences, and colourful festivals.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-telangana',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/telangana-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Telangana | Rajasthan Tour Packages',
    description:
      "Rajasthan prize on a visit from Telangana at Rajasthan Visit Bundles. Investigate antiquated fortifications, grand royal residences, and colourful festivals.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/telangana-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: telanganaFaq.questions.map((faq) => ({
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