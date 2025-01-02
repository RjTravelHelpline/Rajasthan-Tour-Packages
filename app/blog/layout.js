export const metadata = {
  title: 'Rajasthan Travel Blog & Tips | Rajasthan Tour Packages',
  description:
    'Stay updated at our Rajasthan Travel Blog & Tips. Get valuable guides and travel advice for find Rajasthan. Plan your next adventure at Rajasthan Tour Packages.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/blog',
  },
  openGraph: {
    title: 'Rajasthan Travel Blog & Tips | Rajasthan Tour Packages',
    description:
      'Stay updated at our Rajasthan Travel Blog & Tips. Get valuable guides and travel advice for find Rajasthan. Plan your next adventure at Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/blog',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Travel Blog & Tips | Rajasthan Tour Packages',
    description:
      'Stay updated at our Rajasthan Travel Blog & Tips. Get valuable guides and travel advice for find Rajasthan. Plan your next adventure at Rajasthan Tour Packages.',
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
