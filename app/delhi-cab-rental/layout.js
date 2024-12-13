export const metadata = {
  title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
  description:
    'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
  },
  openGraph: {
    title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
    description:
      'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
    url: 'https://www.rajasthantourpackages.in/delhi-cab-rental',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Delhi Cab Rental for Your Travel | Rajasthan Tour Packages',
    description:
      'Car rent in Delhi covering beautiful city Tours, airport transfer services in Delhi, or Out station travel as per comfort in cabs with professional drivers.',
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
