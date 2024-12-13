export const metadata = {
  title: 'Wild and Historic Rajasthan 6-Day Tour | Rajasthan Tour Packages',
  description:
    'The 6-day Wild and Historic Rajasthan Tour lets clients Know the beauty of Rajasthan’s wildlife, forts, and palaces. Book our Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/6days-wild-and-historic-rajasthan-tour',
  },
  openGraph: {
    title: 'Wild and Historic Rajasthan 6-Day Tour | Rajasthan Tour Packages',
    description:
      'The 6-day Wild and Historic Rajasthan Tour lets clients Know the beauty of Rajasthan’s wildlife, forts, and palaces. Book our Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/6days-wild-and-historic-rajasthan-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Wild and Historic Rajasthan 6-Day Tour | Rajasthan Tour Packages',
    description:
      'The 6-day Wild and Historic Rajasthan Tour lets clients Know the beauty of Rajasthan’s wildlife, forts, and palaces. Book our Rajasthan Tour Packages.',
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
