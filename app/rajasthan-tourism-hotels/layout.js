export const metadata = {
  title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
  description:
    'Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.',
  keywords: [''],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/rajasthan-tourism-hotels',
  },
  openGraph: {
    title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
    description:
      'Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.',
    url: 'https://www.rajasthantourpackages.in/rajasthan-tourism-hotels',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Explore Rajasthan Tourism Hotels | Rajasthan Tour Packages',
    description:
      'Find the best Rajasthan tourism hotels for comfortable and memorable tourist accommodations with genuine hospitality and modern comforts throughout the state.',
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
