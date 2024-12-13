export const metadata = {
  title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
  description:
    'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages',
  },
  openGraph: {
    title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
    description:
      'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tourism-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Top Rajasthan Tourism Package | Rajasthan Tour Packages',
    description:
      'Experience the greatness of Rajasthan tourism packages. Get to know royal palaces, vibrant culture, and luxury rentals. Book your exceptional journey now.',
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
