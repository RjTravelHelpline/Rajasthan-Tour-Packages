export const metadata = {
  title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
  description:
    'Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
  },
  openGraph: {
    title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
    description:
      'Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.',
    url: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
    description:
      'Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.',
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
