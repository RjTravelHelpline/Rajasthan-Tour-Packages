export const metadata = {
  title: 'Rajasthan Cities Wise Tours in India | Rajasthan Tour Packages',
  description:
    "Find top cities at our Rajasthan Tour by Cities. Explore India's most popular cities, including Jaipur, Udaipur, and Jaisalmer, for a memorable experience.",
  keywords: [
    'Rajasthan Tour by Cities',
    'Rajasthan City Tours',
    'City Wise Tour',
    'Custom Rajasthan City Tour',
    'Rajasthan Multi-city Package',
    'City Wise Tour in India',
    'Best Cities to Visit in India',
    'Rajasthan City',
    'Cities to Visit in India',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-by-cities',
  },
  openGraph: {
    title: 'Rajasthan Cities Wise Tours in India | Rajasthan Tour Packages',
    description:
      "Find top cities at our Rajasthan Tour by Cities. Explore India's most popular cities, including Jaipur, Udaipur, and Jaisalmer, for a memorable experience.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-by-cities',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Cities Wise Tours in India | Rajasthan Tour Packages',
    description:
      "Find top cities at our Rajasthan Tour by Cities. Explore India's most popular cities, including Jaipur, Udaipur, and Jaisalmer, for a memorable experience.",
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
