export const metadata = {
  title: 'Terms and Conditions | Rajasthan Tour Packages',
  description: '',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Rajasthan Tour Packages',
    description: '',
    url: 'https://www.rajasthantourpackages.in/terms-and-conditions',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Terms and Conditions | Rajasthan Tour Packages',
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
