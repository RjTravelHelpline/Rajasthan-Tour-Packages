export const metadata = {
  title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
  description:
    'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer',
  },
  openGraph: {
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description:
      'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-jaisalmer',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour From Jaisalmer | Rajasthan Tour Packages',
    description:
      'Explore the vast beauty of Rajasthan from Jaisalmer with Rajasthan Tour Packages. Enjoy desert adventures, historical forts, and rich cultural experiences.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jaisalmer-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
