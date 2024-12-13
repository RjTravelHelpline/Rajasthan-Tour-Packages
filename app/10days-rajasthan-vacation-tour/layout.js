export const metadata = {
  title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
  description:
    'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/10days-rajasthan-vacation-tour',
  },
  openGraph: {
    title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
    url: 'https://www.rajasthantourpackages.in/10days-rajasthan-vacation-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '10 Days Rajasthan Vacation Tour | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan on our 10-day Vacation Tour, which covers major attractions and cultural highlights. Book now at Rajasthan Tour Packages for a memorable Tour.',
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
