import { odishaFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
  description:
    'Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha',
  },
  openGraph: {
    title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
    description:
      'Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-odisha',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/odisha-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Odisha | Rajasthan Tour Packages',
    description:
      'Embark on a Rajasthan Tour from Odisha and yourself in its timeless beauty, historic sites, and cultural treasures. Book your tailored tour package today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/odisha-banner.webp',
  },
};
export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: odishaFaq.questions.map((faq) => ({
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
