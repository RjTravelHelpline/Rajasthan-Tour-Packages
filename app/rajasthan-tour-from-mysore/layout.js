import { mysoreFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour From Mysore | Rajasthan Tour Packages',
  description:
    'Embark on a mesmerizing journey from Mysore to Rajasthan. With Rajasthan Tour Packages, discover royal heritage, vibrant culture, and unforgettable experiences.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-mysore',
  },
  openGraph: {
    title: 'Rajasthan Tour From Mysore | Rajasthan Tour Packages',
    description:
      'Embark on a mesmerizing journey from Mysore to Rajasthan. With Rajasthan Tour Packages, discover royal heritage, vibrant culture, and unforgettable experiences.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-mysore',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mysore-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Mysore | Rajasthan Tour Packages',
    description:
      'Embark on a mesmerizing journey from Mysore to Rajasthan. With Rajasthan Tour Packages, discover royal heritage, vibrant culture, and unforgettable experiences.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mysore-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mysoreFaq.questions.map((faq) => ({
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