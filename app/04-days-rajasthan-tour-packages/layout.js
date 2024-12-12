export const metadata = {
  title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
  description:
    'Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
  },
  openGraph: {
    title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
    description:
      'Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.',
    url: 'https://www.rajasthantourpackages.in/04-days-rajasthan-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour Packages for 4 Days | Rajasthan Tour Packages',
    description:
      'Experience the top of the line Rajasthan Tour Packages in 4 days with a tour of Rajasthan’s forts, palaces, and bazaars for an incredible cultural tour.',
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
