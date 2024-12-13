export const metadata = {
  title: 'Rajasthan 12 Days Family Trip | Rajasthan Tour Packages',
  description:
    'Know a 12-day Rajasthan Family Trip and find the state’s attractions and cultural and historical sites. Book your family tour at Rajasthan Tour Packages now.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/12days-rajasthan-family-trip',
  },
  openGraph: {
    title: 'Rajasthan 12 Days Family Trip | Rajasthan Tour Packages',
    description:
      'Know a 12-day Rajasthan Family Trip and find the state’s attractions and cultural and historical sites. Book your family tour at Rajasthan Tour Packages now.',
    url: 'https://www.rajasthantourpackages.in/12days-rajasthan-family-trip',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan 12 Days Family Trip | Rajasthan Tour Packages',
    description:
      'Know a 12-day Rajasthan Family Trip and find the state’s attractions and cultural and historical sites. Book your family tour at Rajasthan Tour Packages now.',
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
