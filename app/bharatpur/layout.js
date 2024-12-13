export const metadata = {
  title: 'Bharatpur Bird Sanctuary Tour | Rajasthan Tour Packages',
  description:
    'Bharatpur Bird Sanctuary is one of the best destinations for bird watching and wildlife lovers. Explore nature at its best with Rajasthan Tour Packages.',
  keywords: [
    'Bharatpur Bird Sanctuary Tour',
    'Bharatpur Travel Experience',
    'Keoladeo National Park Visit',
    'Bharatpur Wildlife Tour Packages',
    'Bharatpur Eco-Tourism and Nature Trails',
    'Bharatpur Local Cuisinez Tasting',
    'Bharatpur Family-Friendly Travel',
    'Bharatpur Shopping Guide and Souvenirs',
    'Bharatpur Cultural and Religious Sites',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/bharatpur',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Bharatpur Bird Sanctuary Tour | Rajasthan Tour Packages',
    description:
      'Bharatpur Bird Sanctuary is one of the best destinations for bird watching and wildlife lovers. Explore nature at its best with Rajasthan Tour Packages.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/bharatpur-banner.webp', // Add image URL if needed
  },
  openGraph: {
    title: 'Bharatpur Bird Sanctuary Tour | Rajasthan Tour Packages',
    description:
      'Bharatpur Bird Sanctuary is one of the best destinations for bird watching and wildlife lovers. Explore nature at its best with Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/bharatpur',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/bharatpur-banner.webp', // Add image URL if needed
      },
    ],
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
