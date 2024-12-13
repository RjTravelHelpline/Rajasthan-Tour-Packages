export const metadata = {
  title: 'Agra Cab Rental for Sightseeing | Rajasthan Tour Packages',
  description:
    'Make comfortable cab availability for a tour around Agra for the famous Taj Mahal, Agra Fort, and other places of interest, and hire our professional drivers.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/agra-cab-rental',
  },
  openGraph: {
    title: 'Agra Cab Rental for Sightseeing | Rajasthan Tour Packages',
    description:
      'Make comfortable cab availability for a tour around Agra for the famous Taj Mahal, Agra Fort, and other places of interest, and hire our professional drivers.',
    url: 'https://www.rajasthantourpackages.in/agra-cab-rental',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Agra Cab Rental for Sightseeing | Rajasthan Tour Packages',
    description:
      'Make comfortable cab availability for a tour around Agra for the famous Taj Mahal, Agra Fort, and other places of interest, and hire our professional drivers.',
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
