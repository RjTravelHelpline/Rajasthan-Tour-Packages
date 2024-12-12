export const metadata = {
  title: 'Rajasthan 5-Day Travel Package | Rajasthan Tour Packages',
  description:
    'Enjoy an amazing 5-day Rajasthan tour emphasizing famous destinations and landmarks. Book an exclusive trip to the well-known sites of Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/5days-rajasthan-tour-package',
  },
  openGraph: {
    title: 'Rajasthan 5-Day Travel Package | Rajasthan Tour Packages',
    description:
      'Enjoy an amazing 5-day Rajasthan tour emphasizing famous destinations and landmarks. Book an exclusive trip to the well-known sites of Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/5days-rajasthan-tour-package',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan 5-Day Travel Package | Rajasthan Tour Packages',
    description:
      'Enjoy an amazing 5-day Rajasthan tour emphasizing famous destinations and landmarks. Book an exclusive trip to the well-known sites of Rajasthan Tour Packages.',
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
