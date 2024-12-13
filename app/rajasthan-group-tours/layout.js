export const metadata = {
  title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
  description:
    'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-group-tours',
  },
  openGraph: {
    title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
    description:
      'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-group-tours',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Group Tour Packages for Rajasthan | Rajasthan Tour Packages',
    description:
      'Enjoy memorable group tour packages for Rajasthan. Discover royal palaces, vibrant culture, and comfortable facilities. Plan your group adventure today.',
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
