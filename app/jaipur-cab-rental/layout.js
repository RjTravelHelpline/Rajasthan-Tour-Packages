export const metadata = {
  title: 'Jaipur Cab Rental Services | Rajasthan Tour Packages',
  description:
    'Hire a taxi in Jaipur to have a comfortable and convenient travel. Rajasthan Tour Packages Book Jaipur Cab Rental Services for Safe transportation in the city.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaipur-cab-rental',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur Cab Rental Services | Rajasthan Tour Packages',
    description:
      'Hire a taxi in Jaipur to have a comfortable and convenient travel. Rajasthan Tour Packages Book Jaipur Cab Rental Services for Safe transportation in the city.',
    images: 'https://www.rajasthantourpackages.in/Images/Card/jaipur.webp',
  },
  openGraph: {
    title: 'Jaipur Cab Rental Services | Rajasthan Tour Packages',
    description:
      'Hire a taxi in Jaipur to have a comfortable and convenient travel. Rajasthan Tour Packages Book Jaipur Cab Rental Services for Safe transportation in the city.',
    url: 'https://www.rajasthantourpackages.in/jaipur-cab-rental',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Card/jaipur.webp',
      },
    ],
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
