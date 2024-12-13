export const metadata = {
  title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
  description:
    'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
  },
  openGraph: {
    title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
    description:
      'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
    url: 'https://www.rajasthantourpackages.in/heritage-hotels-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Heritage Hotels Tour Packages | Rajasthan Tour Packages',
    description:
      'Experience Rajasthan’s Heritage Hotels with our Heritage Hotels Tour Packages. Feel the royal and historical touch of Rajasthan with Rajasthan Tour Packages now.',
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
