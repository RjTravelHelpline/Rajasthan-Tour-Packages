export const metadata = {
  title: 'Delhi Sightseeing City Tour | Rajasthan Tour Packages',
  description:
    'Explore Delhi with a guided city tour. Discover the best tourist spots, including historical landmarks, vibrant markets, and rich cultural heritage.',
  keywords: [
    'Delhi Tour Packages',
    'Delhi Sightseeing Tour',
    'Delhi to Rajasthan Tour',
    'Delhi Tourism',
    'Historical Places in Delhi',
    'Delhi City Tour',
    'Delhi Monuments Tour',
    'Rajasthan Tour from Delhi',
    'Delhi Heritage Tour',
    'Cultural Tours in Delhi',
    'Delhi Day Trips and Excursions',
    'Local Food Tour in Delhi',
    'Best Places to Visit in Delhi',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/delhi',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Delhi Sightseeing City Tour | Rajasthan Tour Packages',
    description:
      "Explore Delhi's famous attractions, historical sites, markets, and culture with a guided city tour.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
  },
  openGraph: {
    title: 'Delhi Sightseeing City Tour | Rajasthan Tour Packages',
    description:
      "Explore Delhi's famous attractions, historical sites, markets, and culture with a guided city tour.",
    url: 'https://www.rajasthantourpackages.in/delhi',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/delhi-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
};
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
