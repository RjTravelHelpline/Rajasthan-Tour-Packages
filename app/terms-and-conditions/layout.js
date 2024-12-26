export const metadata = {
  title: 'Terms and Conditions | Rajasthan Tour Packages',
  description:
    'Review the Terms and Conditions for using Rajasthan Tour Packages. Know about our policies and booking conditions along with services for perfect travelling.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/terms-and-conditions',
  },
  openGraph: {
    title: 'Terms and Conditions | Rajasthan Tour Packages',
    description:
      'Review the Terms and Conditions for using Rajasthan Tour Packages. Know about our policies and booking conditions along with services for perfect travelling.',
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
    description:
      'Review the Terms and Conditions for using Rajasthan Tour Packages. Know about our policies and booking conditions along with services for perfect travelling.',
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
