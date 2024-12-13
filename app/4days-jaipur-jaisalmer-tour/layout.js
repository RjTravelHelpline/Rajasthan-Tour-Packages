export const metadata = {
  title: 'Jaipur & Jaisalmer 4 Days Tour | Rajasthan Tour Packages',
  description:
    'Enjoy the best of its kind, Jaipur and Jaisalmer in Four Days Tour. Get acquainted with the history and beauty of Rajasthan through Rajasthan Tour Packages.',
  alternates: {
    canonical:
      'https://www.rajasthantourpackages.in/4days-jaipur-jaisalmer-tour',
  },
  openGraph: {
    title: 'Jaipur & Jaisalmer 4 Days Tour | Rajasthan Tour Packages',
    description:
      'Enjoy the best of its kind, Jaipur and Jaisalmer in Four Days Tour. Get acquainted with the history and beauty of Rajasthan through Rajasthan Tour Packages.',
    url: 'https://www.rajasthantourpackages.in/4days-jaipur-jaisalmer-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur & Jaisalmer 4 Days Tour | Rajasthan Tour Packages',
    description:
      'Enjoy the best of its kind, Jaipur and Jaisalmer in Four Days Tour. Get acquainted with the history and beauty of Rajasthan through Rajasthan Tour Packages.',
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
