export const metadata = {
  title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
  description:
    'Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/popular-tour-packages',
  },
  openGraph: {
    title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
    description:
      'Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.',
    url: 'https://www.rajasthantourpackages.in/popular-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Popular Tour Packages for Travel | Rajasthan Tour Packages',
    description:
      'Discover the most popular Rajasthan Tour Packages. Check out Rajasthan Tour Packages and enjoy a wonderful vacation to the most famous places of interest.',
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
