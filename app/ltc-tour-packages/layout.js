export const metadata = {
  title: 'LTC-empanel flights and train | Rajasthan Tour Packages',
  description:
    'LTC-approved tour packages for Rajasthan and get a comfortable tour without compromising on leisure, accommodation, and Leave Travel Concession rules.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/ltc-tour-packages',
  },
  openGraph: {
    title: 'LTC-empanel flights and train | Rajasthan Tour Packages',
    description:
      'LTC-approved tour packages for Rajasthan and get a comfortable tour without compromising on leisure, accommodation, and Leave Travel Concession rules.',
    url: 'https://www.rajasthantourpackages.in/ltc-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'LTC-empanel flights and train | Rajasthan Tour Packages',
    description:
      'LTC-approved tour packages for Rajasthan and get a comfortable tour without compromising on leisure, accommodation, and Leave Travel Concession rules.',
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
