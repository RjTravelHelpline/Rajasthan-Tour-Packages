import { nagpurFaq } from '@/data/faqData';
import Script from 'next/script';

export const metadata = {
  title: 'Best Rajasthan Tour From Nagpur | Rajasthan Tour Packages',
  description:
    'Get the splendor of the Rajasthan Tour from Nagpur. Choose Rajasthan Tour Packages for a tailored travel Know rich in history, culture, and majestic landscapes.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-nagpur',
  },
  openGraph: {
    title: 'Best Rajasthan Tour From Nagpur | Rajasthan Tour Packages',
    description:
      'Get the splendor of the Rajasthan Tour from Nagpur. Choose Rajasthan Tour Packages for a tailored travel Know rich in history, culture, and majestic landscapes.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-nagpur',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/nagpur-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Best Rajasthan Tour From Nagpur | Rajasthan Tour Packages',
    description:
      'Get the splendor of the Rajasthan Tour from Nagpur. Choose Rajasthan Tour Packages for a tailored travel Know rich in history, culture, and majestic landscapes.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/nagpur-banner.webp',
  },
};

export default function Layout({ children }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nagpurFaq.questions.map((faq) => ({
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
