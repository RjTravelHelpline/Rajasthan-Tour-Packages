import { chandigarhFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
  description:
    'Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural feel, and luxury accommodations. Plan your Rajasthan holiday from Chandigarh now.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-chandigarh',
  },
  openGraph: {
    title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
    description:
      'Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural feel, and luxury accommodations. Plan your Rajasthan holiday from Chandigarh now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-chandigarh',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chandigarh-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Chandigarh | Rajasthan Tour Packages',
    description:
      'Rajasthan with our tour packages from Chandigarh. Enjoy iconic forts, cultural feel, and luxury accommodations. Plan your Rajasthan holiday from Chandigarh now.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chandigarh-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: chandigarhFaq.questions.map((faq) => ({
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