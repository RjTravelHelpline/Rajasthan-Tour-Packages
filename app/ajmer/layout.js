export const metadata = {
  title: 'Ajmer Adventure and Nature Tours | Rajasthan Tour Packages',
  description:
    "Experience the adventure and natural beauty of Ajmer. Explore one of India's most culturally vibrant cities with Rajasthan Tour Packages offering a unique journey.",
  keywords: [
    'Ajmer Tour Packages',
    'Ajmer Rajasthan Travel Guide',
    'Ajmer Sightseeing Tour',
    'Ajmer Pilgrimage Tour',
    'Things to Do in Ajmer',
    'Ajmer Sharif Dargah',
    'Ajmer Royal Heritage and Culture',
    'Ajmer Shopping and Markets',
    'Ajmer Adventure and Nature Tours',
    'Ajmer Offbeat Travel Spots',
    'Ajmer Best Time to Visit',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/ajmer',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Ajmer Adventure and Nature Tours | Rajasthan Tour Packages',
    description:
      "Experience the adventure and natural beauty of Ajmer. Explore one of India's most culturally vibrant cities with Rajasthan Tour Packages offering a unique journey.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/ajmer-banner.webp',
  },
  openGraph: {
    title: 'Ajmer Adventure and Nature Tours | Rajasthan Tour Packages',
    description:
      "Experience the adventure and natural beauty of Ajmer. Explore one of India's most culturally vibrant cities with Rajasthan Tour Packages offering a unique journey.",
    url: 'https://www.rajasthantourpackages.in/ajmer',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/ajmer-banner.webp',
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
