export const metadata = {
  title: 'Rajasthan Tour for 11-15 Days | Rajasthan Tour Packages',
  description:
    'Get an in-depth tour of Rajasthan with our 11-15 Days Rajasthan Tour Package and find the forts, palaces, deserts, and other cultural attractions in the region.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan Tour for 11-15 Days | Rajasthan Tour Packages',
    description:
      'Get an in-depth tour of Rajasthan with our 11-15 Days Rajasthan Tour Package and find the forts, palaces, deserts, and other cultural attractions in the region.',
    url: 'https://www.rajasthantourpackages.in/11-15-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour for 11-15 Days | Rajasthan Tour Packages',
    description:
      'Get an in-depth tour of Rajasthan with our 11-15 Days Rajasthan Tour Package and find the forts, palaces, deserts, and other cultural attractions in the region.',
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
