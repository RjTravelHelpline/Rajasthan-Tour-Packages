export const metadata = {
  title: 'Royal Rajasthan 7-day Tour Itinerary | Rajasthan Tour Packages',
  description:
    'Embark on a 7 Days Royal Rajasthan Tour. Visit the palace and forts and heritage site. Book your royal Rajasthan journey with Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/7days-royal-rajasthan-tour',
  },
  openGraph: {
    title: 'Royal Rajasthan 7-day Tour Itinerary | Rajasthan Tour Packages',
    description:
      'Embark on a 7 Days Royal Rajasthan Tour. Visit the palace and forts and heritage site. Book your royal Rajasthan journey with Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/7days-royal-rajasthan-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '07 days royal rajasthan tour',
    description: '',
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
