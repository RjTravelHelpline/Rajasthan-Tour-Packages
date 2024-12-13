export const metadata = {
  title: 'Jodhpur Jaisalmer 3-Day Desert Tour | Rajasthan Tour Packages',
  description:
    'Jodhpur & Jaisalmer 3-day winter desert safari of the major attractions of the desert, palaces, and forts. Book your desert tour at Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/3days-jodhpur-jaisalmer-desert-tour',
  },
  openGraph: {
    title: 'Jodhpur Jaisalmer 3-Day Desert Tour | Rajasthan Tour Packages',
    description:
      'Jodhpur & Jaisalmer 3-day winter desert safari of the major attractions of the desert, palaces, and forts. Book your desert tour at Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/3days-jodhpur-jaisalmer-desert-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jodhpur Jaisalmer 3-Day Desert Tour | Rajasthan Tour Packages',
    description:
      'Jodhpur & Jaisalmer 3-day winter desert safari of the major attractions of the desert, palaces, and forts. Book your desert tour at Rajasthan Tour Packages.',
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
