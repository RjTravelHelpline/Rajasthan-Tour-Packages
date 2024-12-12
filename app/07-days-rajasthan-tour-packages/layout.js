export const metadata = {
  title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
  description:
    '7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/07-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
    description:
      '7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.',
    url: 'https://www.rajasthantourpackages.in/07-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan 7-Day Travel Adventure | Rajasthan Tour Packages',
    description:
      '7-day guide on touring Rajasthan royalty-free with its forts, palace, and other highlights. You can book your 7-Day Rajasthan Tour Packages to make your tour.',
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
