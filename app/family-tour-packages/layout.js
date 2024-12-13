export const metadata = {
  title: 'Perfect Family Tour Getaways | Rajasthan Tour Packages',
  description:
    'Explore Rajasthan with your family by choosing the best family-friendly tour packages that will bring you to most iconic sights and fun activities for kids.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/family-tour-packages',
  },
  openGraph: {
    title: 'Perfect Family Tour Getaways | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan with your family by choosing the best family-friendly tour packages that will bring you to most iconic sights and fun activities for kids.',
    url: 'https://www.rajasthantourpackages.in/family-tour-packages',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Perfect Family Tour Getaways | Rajasthan Tour Packages',
    description:
      'Explore Rajasthan with your family by choosing the best family-friendly tour packages that will bring you to most iconic sights and fun activities for kids.',
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
