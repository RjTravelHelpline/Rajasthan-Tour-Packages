import { ahmedabadFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Book Rajasthan Tour From Ahmedabad | Rajasthan Tour Packages',
  description:
    'Discover exclusive Rajasthan tour packages from Ahmedabad. Explore historic forts, vibrant markets, and rich cultural treasures on this memorable journey.',
  keywords: [],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-ahmedabad',
  },
  openGraph: {
    title: 'Book Rajasthan Tour From Ahmedabad | Rajasthan Tour Packages',
    description:
      'Discover exclusive Rajasthan tour packages from Ahmedabad. Explore historic forts, vibrant markets, and rich cultural treasures on this memorable journey.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/ahmedabad-banner.webp',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-ahmedabad',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Book Rajasthan Tour From Ahmedabad | Rajasthan Tour Packages',
    description:
      'Discover exclusive Rajasthan tour packages from Ahmedabad. Explore historic forts, vibrant markets, and rich cultural treasures on this memorable journey.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/ahmedabad-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ahmedabadFaq.questions.map((faq) => ({
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
