import { udaipurFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
  description:
    "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur',
  },
  openGraph: {
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: udaipurFaq.questions.map((faq) => ({
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