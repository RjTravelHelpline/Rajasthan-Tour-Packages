export const metadata = {
  title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
  description:
    'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
    description:
      'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
    description:
      'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
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
