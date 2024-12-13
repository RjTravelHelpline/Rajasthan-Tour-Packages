export const metadata = {
  title: 'Contact Us for Your Rajasthan Trip | Rajasthan Tour Packages',
  description:
    'Please feel free to contact us for Rajasthan tours. For the best travel tips and to plan the perfect Rajasthan vacation, contact Rajasthan Tour Packages now.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/contact-us',
  },
  openGraph: {
    title: 'Contact Us for Your Rajasthan Trip | Rajasthan Tour Packages',
    description:
      'Please feel free to contact us for Rajasthan tours. For the best travel tips and to plan the perfect Rajasthan vacation, contact Rajasthan Tour Packages now.',
    url: 'https://www.rajasthantourpackages.in/contact-us',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Contact Us for Your Rajasthan Trip | Rajasthan Tour Packages',
    description:
      'Please feel free to contact us for Rajasthan tours. For the best travel tips and to plan the perfect Rajasthan vacation, contact Rajasthan Tour Packages now',
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
