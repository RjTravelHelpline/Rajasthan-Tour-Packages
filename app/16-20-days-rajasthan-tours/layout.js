export const metadata = {
  title: '',
  description: '',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/16-20-days-rajasthan-tours',
  },
  openGraph: {
    title: '',
    description: '',
    url: 'https://www.rajasthantourpackages.in/16-20-days-rajasthan-tours',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: '',
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
