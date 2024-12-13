export const metadata = {
  title: 'Rajasthan Heritage 6 Days Tour | Rajasthan Tour Packages',
  description:
    "Get a 6-day Rajasthan Tour package and visit the best places. Rajasthan Tour Packages offers an opportunity to find Rajasthan's heritage, culture, and beauty.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/6days-rajasthan-tour',
  },
  openGraph: {
    title: 'Rajasthan Heritage 6 Days Tour | Rajasthan Tour Packages',
    description:
      "Get a 6-day Rajasthan Tour package and visit the best places. Rajasthan Tour Packages offers an opportunity to find Rajasthan's heritage, culture, and beauty.",
    url: 'https://www.rajasthantourpackages.in/6days-rajasthan-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Heritage 6 Days Tour | Rajasthan Tour Packages',
    description:
      "Get a 6-day Rajasthan Tour package and visit the best places. Rajasthan Tour Packages offers an opportunity to find Rajasthan's heritage, culture, and beauty.",
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
