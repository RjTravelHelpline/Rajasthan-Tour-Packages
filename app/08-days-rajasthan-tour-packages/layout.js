export const metadata = {
  title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
  description:
    'Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/08-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
    description:
      'Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.',
    url: 'https://www.rajasthantourpackages.in/08-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '8-Day Rajasthan Travel Plan | Rajasthan Tour Packages',
    description:
      'Discover the rich history of Rajasthan on this 8-day tour, including a city tour, palace and forts. Rajasthan Tour Packages you to plan for your Rajasthan tour.',
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
