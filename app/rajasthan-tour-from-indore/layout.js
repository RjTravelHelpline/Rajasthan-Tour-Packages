export const metadata = {
  title: 'Rajasthan Tour from Indore | Rajasthan Tour Packages',
  description:
    'Discover the splendor of Rajasthan with our tour from Indore. Tour majestic forts and palaces and immerse in local culture. Book your Rajasthan trip today.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-indore',
  },
  openGraph: {
    title: 'Rajasthan Tour from Indore | Rajasthan Tour Packages',
    description:
      'Discover the splendor of Rajasthan with our tour from Indore. Tour majestic forts and palaces and immerse in local culture. Book your Rajasthan trip today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-indore',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/indore-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Indore | Rajasthan Tour Packages',
    description:
      'Discover the splendor of Rajasthan with our tour from Indore. Tour majestic forts and palaces and immerse in local culture. Book your Rajasthan trip today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/indore-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
