export const metadata = {
  title: 'Mount Abu Heritage and History | Rajasthan Tour Packages',
  description:
    "Explore the historical temples and natural beauty of Mount Abu, Rajasthan's only hill station. Book your Mount Abu heritage tour with Rajasthan Tour Packages.",
  keywords: [
    'Mount Abu Tour Packages',
    'Mount Abu Hill Station Travel',
    'Mount Abu Sightseeing Tour',
    'Mount Abu Travel Experience',
    'Rajasthan Tour Packages',
    'Mount Abu Attractions Guide',
    'Hidden Gems of Mount Abu',
    'Mount Abu Temples and Culture',
    'Mount Abu Heritage and History',
    'Mount Abu Nature Walks',
    'Mount Abu Eco-Tourism',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/mount-abu',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Mount Abu Heritage and History | Rajasthan Tour Packages',
    description:
      "Explore the historical temples and natural beauty of Mount Abu, Rajasthan's only hill station. Book your Mount Abu heritage tour with Rajasthan Tour Packages.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner02.webp',
  },
  openGraph: {
    title: 'Mount Abu Heritage and History | Rajasthan Tour Packages',
    description:
      "Explore the historical temples and natural beauty of Mount Abu, Rajasthan's only hill station. Book your Mount Abu heritage tour with Rajasthan Tour Packages.",
    url: 'https://www.rajasthantourpackages.in/mount-abu',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/mount-abu-banner02.webp',
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
