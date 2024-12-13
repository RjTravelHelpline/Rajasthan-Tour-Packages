export const metadata = {
  title: 'Jaisalmer’s Golden Fort and Desert | Rajasthan Tour Packages',
  description:
    'Meet the desert of Jaisalmer, the great Golden Fort, and learn more about India. Visit Rajasthan Tour Packages for the best plans of our Jaisalmer tour today.',
  keywords: [
    'Golden City of Rajasthan',
    'Jaisalmer Fort',
    "Glory of Rajasthan's desert culture",
    'Visitor attractions in Jaisalmer',
    'Thar Heritage Museum',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jaisalmer',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaisalmer’s Golden Fort and Desert | Rajasthan Tour Packages',
    description:
      'Meet the desert of Jaisalmer, the great Golden Fort, and learn more about India. Visit Rajasthan Tour Packages for the best plans of our Jaisalmer tour today.',
    images:
      'https://www.rajasthantourpackages.in/Images/Card/jaisalmer-patwa-haweli.webp',
  },
  openGraph: {
    title: 'Jaisalmer’s Golden Fort and Desert | Rajasthan Tour Packages',
    description:
      'Meet the desert of Jaisalmer, the great Golden Fort, and learn more about India. Visit Rajasthan Tour Packages for the best plans of our Jaisalmer tour today.',
    url: 'https://www.rajasthantourpackages.in/jaisalmer',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Card/jaisalmer-patwa-haweli.webp',
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
