export const metadata = {
  title: 'Things to Do in Jodhpur Tourism | Rajasthan Tour Packages',
  description:
    'Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.',
  keywords: [
    'Jodhpur Tourism',
    'Things to Do in Jodhpur',
    'Jodhpur Sightseeing',
    'Jodhpur Travel Guide',
    'Jodhpur Attractions',
    'Museums in Jodhpur',
    'Art Galleries in Jodhpur',
    'Jodhpur Fairs and Festivals',
    'Excursions from Jodhpur',
    'Shopping in Jodhpur',
    'Local Cuisine in Jodhpur',
    'Restaurants in Jodhpur',
    'Heritage Sites in Jodhpur',
  ],
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jodhpur',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rajasthantourpackages',
    title: 'Things to Do in Jodhpur Tourism | Rajasthan Tour Packages',
    description:
      'Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.',
    images:
      'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner02.webp', // Add image URL if needed
  },
  openGraph: {
    title: 'Things to Do in Jodhpur Tourism | Rajasthan Tour Packages',
    description:
      'Learn about Jodhpur Fort sporting and leisure activities, city markets, and more. Check out Rajasthan Tour Packages for the ideal planning of our Jodhpur tour.',
    url: 'https://www.rajasthantourpackages.in/jodhpur',
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/jodhpur-banner02.webp', // Add image URL if needed
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
