export const metadata = {
  title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
  description:
    'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
  keywords: [
    'Rajasthan Tour Package From Bangalore',
    'Rajasthan Tour From Bangalore',
    'Rajasthan Honeymoon Packages',
    'honeymoon tour packages',
  ],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-bangalore',
  },
  openGraph: {
    title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
    description:
      'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-bangalore',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/bangalore-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour Package from Bangalore | Rajasthan Tour Packages',
    description:
      'Learn the beauty of the Rajasthan tour package from Bangalore. Enjoy royal experiences, cultural sights, and luxury stays. Book your Rajasthan tour today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/bangalore-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
