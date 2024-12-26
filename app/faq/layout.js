export const metadata = {
  title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
  description:
    'Find answers to frequently asked questions about Rajasthan Tour Packages. Obtain details of booking, tours, services and many other things to make our tour.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/faq',
  },
  openGraph: {
    title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
    description:
      'Find answers to frequently asked questions about Rajasthan Tour Packages. Obtain details of booking, tours, services and many other things to make our tour.',
    url: 'https://www.rajasthantourpackages.in/faq',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
    description:
      'Find answers to frequently asked questions about Rajasthan Tour Packages. Obtain details of booking, tours, services and many other things to make our tour.',
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
