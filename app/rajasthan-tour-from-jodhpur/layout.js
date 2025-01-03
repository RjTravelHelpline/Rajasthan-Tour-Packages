import { jodhpurFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
  description:
    "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-jodhpur',
  },
  openGraph: {
    title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
    description:
      "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-jodhpur',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Jodhpur | Rajasthan Tour Packages',
    description:
      "Connect Rajasthan Visit Bundles for a surprising visit from Jodhpur. Reveal Rajasthan's illustrious legacy, grand fortifications, and immortal conventions.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: jodhpurFaq.questions.map((faq) => ({
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

