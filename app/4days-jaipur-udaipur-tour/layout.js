import Script from 'next/script';
import { tour_faqs } from './data';

export const metadata = {
  title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
  description:
    'Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani Kings touch of the place. Rajasthan Tour Packages is for you to book our excellent trip at us.',
  keywords: [
    '04 Days Jaipur Udaipur tour',
    'Jaipur- Udaipur tour package',
    'Jaipur- Udaipur tour',
    'City of Lakes',
    'tour for Jaipur and Udaipur',
    'Jaipur Udaipur tour guide',
    'Jaipur-Udaipur trip',
    'best itinerary for Jaipur-Udaipur',
    '4-day Jaipur Udaipur tour package',
    'best time to visit Jaipur and Udaipur',
    'Jaipur udaipur tour package for 4 days',
    'Chokhi Dhani Village',
    'Jaipur',
    'Udaipur',
    'Bikaner',
    'Rajasthani cuisine',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/4days-jaipur-udaipur-tour',
  },
  openGraph: {
    title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
    description:
      'Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani Kings touch of the place. Rajasthan Tour Packages is for you to book our excellent trip at us.',
    url: 'https://www.rajasthantourpackages.in/4days-jaipur-udaipur-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
    description:
      'Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani Kings touch of the place. Rajasthan Tour Packages is for you to book our excellent trip at us.',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: tour_faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};
export default function Layout({ children }) {
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
