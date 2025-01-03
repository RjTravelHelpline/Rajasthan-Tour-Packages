import { punjabFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Punjab | Rajasthan Tour Packages',
  description:
    'Leave on a Rajasthan Tour from Punjab with our comprehensive bundles. Find memorable, energetic culture and imperial royal residences. Book yours today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-punjab',
  },
  openGraph: {
    title: 'Rajasthan Tour from Punjab | Rajasthan Tour Packages',
    description:
      'Leave on a Rajasthan Tour from Punjab with our comprehensive bundles. Find memorable, energetic culture and imperial royal residences. Book yours today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-punjab',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/punjab-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Punjab | Rajasthan Tour Packages',
    description:
      'Leave on a Rajasthan Tour from Punjab with our comprehensive bundles. Find memorable, energetic culture and imperial royal residences. Book yours today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/punjab-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: punjabFaq.questions.map((faq) => ({
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