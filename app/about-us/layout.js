export const metadata = {
  title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
  description:
    'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/about-us',
  },
  openGraph: {
    title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
    description:
      'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
    url: 'https://www.rajasthantourpackages.in/about-us',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'About Us: Your Guide to Exploring | Rajasthan Tour Packages',
    description:
      'Learn more about us and how we help you explore Rajasthan’s heritage, culture, and attractions. Book your dream tour at Rajasthan Tour Packages for a memorable.',
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
