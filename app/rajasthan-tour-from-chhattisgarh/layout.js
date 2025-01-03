import { chhattisgarhFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
  description:
    "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-chhattisgarh',
  },
  openGraph: {
    title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
    description:
      "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-chhattisgarh',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chhattisgarh-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Chattisgarh | Rajasthan Tour Packages',
    description:
      "Enjoy the Rajasthan Tour from Chhattisgarh's regal charm, historic sites, and vibrant local culture. Get your expertly curated and confident tour package today.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chhattisgarh-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: chhattisgarhFaq.questions.map((faq) => ({
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