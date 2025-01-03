import { jaisalmerFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
  description:
    'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer',
  },
  openGraph: {
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description:
      'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description:
      'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: jaisalmerFaq.questions.map((faq) => ({
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
