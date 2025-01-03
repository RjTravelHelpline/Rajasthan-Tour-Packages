import { andhraPradeshFaq } from "@/data/faqData";
import Script from "next/script";

export const metadata = {
  title: 'Rajasthan Tour from Andhra Pradesh | Rajasthan Tour Packages',
  description:
    'Rajasthan Tour from Andhra Pradesh with Rajasthan Tour Packages. Enjoy an immersive experience of the royal palaces, historic forts, and vibrant culture.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-andhra-pradesh',
  },
  openGraph: {
    title: 'Rajasthan Tour from Andhra Pradesh | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Andhra Pradesh with Rajasthan Tour Packages. Enjoy an immersive experience of the royal palaces, historic forts, and vibrant culture.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-andhra-pradesh',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/andhra-pradesh-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Andhra Pradesh | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Andhra Pradesh with Rajasthan Tour Packages. Enjoy an immersive experience of the royal palaces, historic forts, and vibrant culture.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/andhra-pradesh-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: andhraPradeshFaq.questions.map((faq) => ({
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
