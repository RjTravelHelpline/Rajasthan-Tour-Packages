export const metadata = {
  title: 'Luxury Tour Packages in Rajasthan | Rajasthan Tour Packages',
  description:
    'Experience the luxury of Rajasthan with our luxury tour packages, royal accommodations, private transfers, and bespoke itineraries for the royal traveler.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/luxury-tour-packages',
  },
  openGraph: {
    title: 'Luxury Tour Packages in Rajasthan | Rajasthan Tour Packages',
    description:
      'Experience the luxury of Rajasthan with our luxury tour packages, royal accommodations, private transfers, and bespoke itineraries for the royal traveler.',
    url: 'https://www.rajasthantourpackages.in/luxury-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Luxury Tour Packages in Rajasthan | Rajasthan Tour Packages',
    description:
      'Experience the luxury of Rajasthan with our luxury tour packages, royal accommodations, private transfers, and bespoke itineraries for the royal traveler.',
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
