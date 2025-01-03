import { mountAbuFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
  description:
    "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-mount-abu',
  },
  openGraph: {
    title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
    description:
      "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-mount-abu',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Mount Abu | Rajasthan Tour Packages',
    description:
      "Begin your Rajasthan Tour from Mount Abu with the Rajasthan Tour Packages. Explore Rajasthan's regal charm and noteworthy points of interest. Book Now.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mountAbuFaq.questions.map((faq) => ({
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