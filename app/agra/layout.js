export const metadata = {
  title: 'Popular Attractions in Agra | Rajasthan Tour Packages',
  description:
    "Explore Agra's famous attractions including the Taj Mahal, Agra Fort, Fatehpur Sikri, and more. Book your Agra sightseeing tour and uncover the city's rich heritage.",
  keywords: [
    'Agra Sightseeing Package',
    'Taj Mahal Day Tour',
    'Agra Rajasthan Tour Package',
    'Heritage Tour Agra',
    'Delhi Agra Rajasthan Tour',
    'Local Tour Guide in Agra',
    'Popular Attractions in Agra',
    'Agra Jaipur Tour Package',
    'Agra City Tour with Transfer',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/agra',
  },
  openGraph: {
    title: 'Popular Attractions in Agra | Rajasthan Tour Packages',
    description:
      "Explore Agra's famous attractions including the Taj Mahal, Agra Fort, Fatehpur Sikri, and more. Book your Agra sightseeing tour and uncover the city's rich heritage.",
    url: 'https://www.rajasthantourpackages.in/agra',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/agra-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Popular Attractions in Agra | Rajasthan Tour Packages',
    description:
      "Explore Agra's famous attractions including the Taj Mahal, Agra Fort, Fatehpur Sikri, and more. Book your Agra sightseeing tour and uncover the city's rich heritage.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/agra-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
