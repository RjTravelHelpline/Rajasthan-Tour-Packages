export const metadata = {
  title: 'Rajasthan Trip from Pune | Book Now | Rajasthan Tour Packages',
  description:
    'Embark on a Rajasthan trip from Pune. Enjoy royal forts, rich culture, and luxurious stays. Plan your royal adventure with our tailored packages. Book today.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-pune',
  },
  openGraph: {
    title: 'Rajasthan Trip from Pune | Book Now | Rajasthan Tour Packages',
    description:
      'Embark on a Rajasthan trip from Pune. Enjoy royal forts, rich culture, and luxurious stays. Plan your royal adventure with our tailored packages. Book today.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-pune',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/pune-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Trip from Pune | Book Now | Rajasthan Tour Packages',
    description:
      'Embark on a Rajasthan trip from Pune. Enjoy royal forts, rich culture, and luxurious stays. Plan your royal adventure with our tailored packages. Book today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/pune-banner.webp',
  },
};
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
