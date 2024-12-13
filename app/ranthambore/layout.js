export const metadata = {
  title: "Ranthambore National Park | Rajasthan Tour Packages",
  description: "Exploring the vast beauty of Ranthambore National Park. Find the best Rajasthan Tour Packages and enjoy tiger safaris, scenic landscapes, and rich wildlife.",
  keywords: [
    "Ranthambore National Park",
    "Ranthambore Safari",
    "Ranthambore Hotels",
    "Ranthambore Wildlife",
    "Ranthambore Sightseeing",
    "Ranthambore Fort",
    "Things to do in Ranthambore",
    "Ranthambore Travel Guide",
    "Best Time to Visit Ranthambore",
    "Ranthambore Restaurants",
    "Local Cuisine in Ranthambore",
    "Ranthambore Fairs and Festivals"
  ],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/ranthambore",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "Ranthambore National Park | Rajasthan Tour Packages",
    description: "Exploring the vast beauty of Ranthambore National Park. Find the best Rajasthan Tour Packages and enjoy tiger safaris, scenic landscapes, and rich wildlife.",
    images: 'https://www.rajasthantourpackages.in/Images/Banners/ranthambore-banner.webp',
  },
  openGraph: {
    title: "Ranthambore National Park | Rajasthan Tour Packages",
    description: "Exploring the vast beauty of Ranthambore National Park. Find the best Rajasthan Tour Packages and enjoy tiger safaris, scenic landscapes, and rich wildlife.",
    url: "https://www.rajasthantourpackages.in/ranthambore",
    images: [
      {
        url: 'https://www.rajasthantourpackages.in/Images/Banners/ranthambore-banner.webp',
      }
    ],
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  }
};
export default function Layout({ children }) {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  }
  