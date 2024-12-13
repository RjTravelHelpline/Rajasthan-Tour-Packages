export const metadata = {
  title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
  description:
    "Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani King's touch of the place. Rajasthan Tour Packages is for you to book our excellent trip with us.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/4days-jaipur-udaipur-tour',
  },
  openGraph: {
    title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
    description:
      "Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani King's touch of the place. Rajasthan Tour Packages is for you to book our excellent trip with us.",
    url: 'https://www.rajasthantourpackages.in/4days-jaipur-udaipur-tour',
    images:
      'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Jaipur & Udaipur 4 Days Tour | Rajasthan Tour Packages',
    description:
      "Indulge in the 4-Day Jaipur Udaipur Tour to enjoy the Rajasthani King's touch of the place. Rajasthan Tour Packages is for you to book our excellent trip with us.",
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
