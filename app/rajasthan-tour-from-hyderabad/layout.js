export const metadata = {
  title: 'Rajasthan Tour from Hyderabad | Rajasthan Tour Packages',
  description:
    "Immerse yourself in Rajasthan's majestic charm, iconic landmarks, and vibrant traditions. Book your Rajasthan Tour from Hyderabad with our exclusive packages..",
  keywords: [''],
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/rajasthan-tour-from-hyderabad',
  },
  openGraph: {
    title: 'Rajasthan Tour from Hyderabad | Rajasthan Tour Packages',
    description:
      "Immerse yourself in Rajasthan's majestic charm, iconic landmarks, and vibrant traditions. Book your Rajasthan Tour from Hyderabad with our exclusive packages..",
    url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-hyderabad',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/hyderabad-banner.webp',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Tour from Hyderabad | Rajasthan Tour Packages',
    description:
      "Immerse yourself in Rajasthan's majestic charm, iconic landmarks, and vibrant traditions. Book your Rajasthan Tour from Hyderabad with our exclusive packages..",
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/hyderabad-banner.webp',
  },
};

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
