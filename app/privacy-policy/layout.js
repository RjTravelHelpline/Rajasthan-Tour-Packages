export const metadata = {
  title: 'Privacy Policy | Rajasthan Tour Packages',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Rajasthan Tour Packages',
    description: '',
    url: 'https://www.rajasthantourpackages.in/privacy-policy',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Privacy Policy | Rajasthan Tour Packages',
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
