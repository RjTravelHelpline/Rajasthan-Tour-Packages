import { bhubaneswarFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
  description:
    'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-bhubaneshwar',
  },
  openGraph: {
    title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-bhubaneshwar',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/bhubaneshwar-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Top Rajasthan Tours from Bhubaneswar | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan with tailored tours from Bhubaneswar. Discover Jaipur, Udaipur, and Jaisalmer with our customised Rajasthan tours. Book your adventure today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/bhubaneshwar-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: bhubaneswarFaq.questions.map((faq) => ({
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