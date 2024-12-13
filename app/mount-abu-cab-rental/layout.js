export const metadata = {
  title: 'Cab Rental Service for Mount Abu | Rajasthan Tour Packages',
  description:
    'For a Safety pick-up from your location in Rajasthan to Mount Abu Rajasthan-only hill station, visit Mount Abu Car Rental to hire a cab for our traveling needs.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/mount-abu-cab-rental',
  },
  openGraph: {
    title: 'Cab Rental Service for Mount Abu | Rajasthan Tour Packages',
    description:
      'For a Safety pick-up from your location in Rajasthan to Mount Abu Rajasthan-only hill station, visit Mount Abu Car Rental to hire a cab for our traveling needs.',
    url: 'https://www.rajasthantourpackages.in/mount-abu-cab-rental',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Cab Rental Service for Mount Abu | Rajasthan Tour Packages',
    description:
      'For a Safety pick-up from your location in Rajasthan to Mount Abu Rajasthan-only hill station, visit Mount Abu Car Rental to hire a cab for our traveling needs.',
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
