export const metadata = {
  title: 'Book Rajasthan Tour from Chennai | Rajasthan Tour Packages',
  description:
    'Take the Rajasthan tour from Chennai to learn about the lively heritage and rich culture. Find magnificent castles, desert landscapes and traditional art forms.',
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-chennai',
  },
  openGraph: {
    title: 'Book Rajasthan Tour from Chennai | Rajasthan Tour Packages',
    description:
      'Take the Rajasthan tour from Chennai to learn about the lively heritage and rich culture. Find magnificent castles, desert landscapes and traditional art forms.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-chennai',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chennai-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Book Rajasthan Tour from Chennai | Rajasthan Tour Packages',
    description:
      'Take the Rajasthan tour from Chennai to learn about the lively heritage and rich culture. Find magnificent castles, desert landscapes and traditional art forms.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/chennai-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
