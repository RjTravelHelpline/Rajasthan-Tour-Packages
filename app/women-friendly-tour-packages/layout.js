export const metadata = {
  title: 'Women-Friendly Tour Packages | Rajasthan Tour Packages',
  description:
    'Discover Rajasthan with women-friendly travel packages, safe transportation or guided tours, and cultural activities for single travelers or in a group.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/women-friendly-tour-packages',
  },
  openGraph: {
    title: 'Women-Friendly Tour Packages | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan with women-friendly travel packages, safe transportation or guided tours, and cultural activities for single travelers or in a group.',
    url: 'https://www.rajasthantourpackages.in/women-friendly-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Women-Friendly Tour Packages | Rajasthan Tour Packages',
    description:
      'Discover Rajasthan with women-friendly travel packages, safe transportation or guided tours, and cultural activities for single travelers or in a group.',
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
