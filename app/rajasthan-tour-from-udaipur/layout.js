export const metadata = {
  title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
  description:
    "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur',
  },
  openGraph: {
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-udaipur',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Udaipur | Rajasthan Tour Packages',
    description:
      "Explore Rajasthan's regal splendor and cultural richness on a personalized tour from Udaipur. Let us take you on a memorable journey across the state.",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/udaipur-banner02.webp',
  },
};
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
