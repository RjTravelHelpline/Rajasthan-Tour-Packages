export const metadata = {
  title: 'Kota History, Culture & Appeal | Rajasthan Tour Packages',
  description:
    'Plan your Kota tour at Rajasthan Tour Packages. We feature hard sightseeing and tour packages to find historic sites in attractions and cultural landmarks.',
  keywords: [
    'Kota Tour Packages',
    'Kota Tourism',
    'Kota Sightseeing Packages',
    'Rajasthan Tour Packages Kota',
    'Best Kota Tour Packages',
    'Kota Holiday Packages',
    'Kota Vacation Packages',
    'Places to visit in Kota',
    'Things to do in Kota',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/kota',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Kota History, Culture & Appeal | Rajasthan Tour Packages',
    description:
      'Plan your Kota tour at Rajasthan Tour Packages. We feature hard sightseeing and tour packages to find historic sites in attractions and cultural landmarks.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp',
  },
  openGraph: {
    title: 'Kota History, Culture & Appeal | Rajasthan Tour Packages',
    description:
      'Plan your Kota tour at Rajasthan Tour Packages. We feature hard sightseeing and tour packages to find historic sites in attractions and cultural landmarks.',
    url: 'https://www.rajasthantourpackages.in/kota',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/kota-banner.webp',
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
