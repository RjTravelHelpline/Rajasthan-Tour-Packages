export const metadata = {
  title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
  description:
    'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/10-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
    url: 'https://www.rajasthantourpackages.in/10-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan 10-Day Travel Itinerary | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan’s destinations and landmarks, and visit the state’s main cities in 10 days. Visit the Rajasthan Tour for your 10-Da Rajasthan Tour Package.',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
