export const metadata = {
  title: 'Jaipur’s Heritage and Culture | Rajasthan Tour Packages',
  description:
    'Jaipur’s past and present are full of traditions, palaces and markets, forts and fairs. Book your Jaipur heritage tour today with Rajasthan Tour Packages.',
  keywords: [
    'Jaipur Tour Packages',
    'Amber Fort',
    'Hawa Mahal',
    'Jaipur sightseeing tours',
    'Rajasthan Tour Packages',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaipur',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur’s Heritage and Culture | Rajasthan Tour Packages',
    description:
      'Jaipur’s past and present are full of traditions, palaces and markets, forts and fairs. Book your Jaipur heritage tour today with Rajasthan Tour Packages.',
    images: 'https://www.rajasthantourpackages.in/Images/Card/jaipur.webp',
  },
  openGraph: {
    title: 'Jaipur’s Heritage and Culture | Rajasthan Tour Packages',
    description:
      'Jaipur’s past and present are full of traditions, palaces and markets, forts and fairs. Book your Jaipur heritage tour today with Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/jaipur',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Card/jaipur.webp',
      },
    ],
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
};
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
