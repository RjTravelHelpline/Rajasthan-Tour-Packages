export const metadata = {
  title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
  description:
    'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-agra',
  },
  openGraph: {
    title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-agra',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Agra | Rajasthan Tour Packages',
    description:
      'Rajasthan Tour from Agra to explore historic landmarks, regal palaces, and unique cultural experiences. You can go ahead and book your personalized tour package now.',
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
