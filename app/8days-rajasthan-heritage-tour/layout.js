export const metadata = {
  title: 'Rajasthan Heritage Tour for 8 Days | Rajasthan Tour Packages',
  description:
    "Rajasthan's Historic wonders and vibrant culture of Rajasthan on this 8-day tour where you get to Find the most important historical landmarks of the region.",
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/8days-rajasthan-heritage-tour',
  },
  openGraph: {
    title: 'Rajasthan Heritage Tour for 8 Days | Rajasthan Tour Packages',
    description:
      "Rajasthan's Historic wonders and vibrant culture of Rajasthan on this 8-day tour where you get to Find the most important historical landmarks of the region.",
    url: 'https://www.rajasthantourpackages.in/8days-rajasthan-heritage-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Rajasthan Heritage Tour for 8 Days | Rajasthan Tour Packages',
    description:
      "Rajasthan's Historic wonders and vibrant culture of Rajasthan on this 8-day tour where you get to Find the most important historical landmarks of the region.",
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
