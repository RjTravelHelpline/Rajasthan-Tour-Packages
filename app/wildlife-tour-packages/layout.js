export const metadata = {
  title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
  description:
    'Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/wildlife-tour-packages',
  },
  openGraph: {
    title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.',
    url: 'https://www.rajasthantourpackages.in/wildlife-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Wildlife Tour Adventures | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan’s Wildlife at our Wildlife Tour Packages. Rajasthan Tour Packages offers to explore wildlife and nature tours at the best wildlife destinations.',
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
