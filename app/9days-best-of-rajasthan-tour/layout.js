export const metadata = {
  title: 'Best of Rajasthan 9-Day Exploration | Rajasthan Tour Packages',
  description:
    'Discover some of Rajasthan’s best cities in 9 days. See the famous forts, palaces and heritage buildings. You can book your 9-Day Best Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/9days-best-of-rajasthan-tour',
  },
  openGraph: {
    title: 'Best of Rajasthan 9-Day Exploration | Rajasthan Tour Packages',
    description:
      'Discover some of Rajasthan’s best cities in 9 days. See the famous forts, palaces and heritage buildings. You can book your 9-Day Best Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/9days-best-of-rajasthan-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Best of Rajasthan 9-Day Exploration | Rajasthan Tour Packages',
    description:
      'Discover some of Rajasthan’s best cities in 9 days. See the famous forts, palaces and heritage buildings. You can book your 9-Day Best Rajasthan Tour Packages.',
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
