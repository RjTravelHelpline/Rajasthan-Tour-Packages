export const metadata = {
  title: 'Ajmer Cab Rental for Easy Travel | Rajasthan Tour Packages',
  description:
    'If you looking for a car to hire in Ajmer to visit Dargah Sharif, Pushkar, or nearby places our rental car services provided by us will help you to trip safely.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
  },
  openGraph: {
    title: 'Ajmer Cab Rental for Easy Travel | Rajasthan Tour Packages',
    description:
      'If you looking for a car to hire in Ajmer to visit Dargah Sharif, Pushkar, or nearby places our rental car services provided by us will help you to trip safely.',
    url: 'https://www.rajasthantourpackages.in/ajmer-cab-rental',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Ajmer Cab Rental for Easy Travel | Rajasthan Tour Packages',
    description:
      'If you looking for a car to hire in Ajmer to visit Dargah Sharif, Pushkar, or nearby places our rental car services provided by us will help you to trip safely.',
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
