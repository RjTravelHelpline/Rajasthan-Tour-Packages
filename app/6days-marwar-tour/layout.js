export const metadata = {
  title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
  description:
    'Enjoy a 6-day marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other marwar places. For your marwar tour, contact Rajasthan Tour Packages.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
  },
  openGraph: {
    title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description:
      'Enjoy a 6-day marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other marwar places. For your marwar tour, contact Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/6days-marwar-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Marwar Rajasthan 6 Days Tour | Rajasthan Tour Packages',
    description:
      'Enjoy a 6-day marwar Tour to discover the royalties of Jodhpur, Jaisalmer, and other marwar places. For your marwar tour, contact Rajasthan Tour Packages.',
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
