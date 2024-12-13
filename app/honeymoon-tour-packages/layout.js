export const metadata = {
  title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
  description:
    'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/honeymoon-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
    description:
      'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
    url: 'https://www.rajasthantourpackages.in/honeymoon-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Honeymoon Packages | Rajasthan Tour Packages',
    description:
      'Celebrate your love with our Rajasthan honeymoon packages. Enjoy romantic stays, stunning palaces, and unique experiences. Plan your dream getaway today.',
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
