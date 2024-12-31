import dynamic from 'next/dynamic';

// Dynamically import the components
const BlogsSection = dynamic(() => import('@/components/BlogsSection'), { ssr: false });
const DaysPack = dynamic(() => import('@/components/DaysPack'), { ssr: false });
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
const PackagesByCities = dynamic(() => import('@/components/PackagesByCities'), { ssr: false });
const Packages = dynamic(() => import('@/components/PopularPackages'), { ssr: false });
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: false });
const HomeHero = dynamic(() => import('@/components/HomeHero'), { ssr: false });
import HomeCarousel from "@/components/HomeCarousel";
import Script from 'next/script';


export const metadata = {
  title: 'Best Rajasthan Tours and Travels | Rajasthan Tour Packages',
  description: 'Indulge travel in Rajasthan’s history from our list of tour packages for families and friends. Experience the perfect Rajasthan Tours and Travels for a trip.',
  keywords: ["Rajasthan Tours and Travels", "Rajasthan Tour Packages", "Popular Tour Packages", "Rajasthan tour by days", "Rajasthan trip", "Rajasthan tour package for families", "Rajasthan Tour from the United Kingdom"],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in",
  },
  openGraph: {
    title: 'Best Rajasthan Tours and Travels | Rajasthan Tour Packages',
    description: 'Indulge travel in Rajasthan’s history from our list of tour packages for families and friends. Experience the perfect Rajasthan Tours and Travels for a trip.',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    url: "https://www.rajasthantourpackages.in",
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Best Rajasthan Tours and Travels | Rajasthan Tour Packages',
    description: 'Indulge travel in Rajasthan’s history from our list of tour packages for families and friends. Experience the perfect Rajasthan Tours and Travels for a trip.',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

const Page = () => {
  return (
    <>
      {/* Using next/script for JSON-LD */}
      <HomeCarousel />
      <HomeHero />
      <Packages />
      <DaysPack />
      <PackagesByCities />
      <Reviews />
      <Gallery />
      <BlogsSection />
      <Script type="application/ld+json" id="travel-agency-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "Rajasthan Tour Packages",
          "image": "https://www.rajasthantourpackages.in/assets/rajasthan-travel-revisedy-COjnY8SE.webp",
          "@id": "",
          "url": "https://www.rajasthantourpackages.in/",
          "telephone": "+91-9024-337-038",
          "priceRange": "2000-5000 INR",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "G-18, City Plaza, Jhotwara Road, Bani Park",
            "addressLocality": "Jaipur",
            "postalCode": "302016",
            "addressCountry": "IN",
            "addressRegion": "Rajasthan"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.9355858,
            "longitude": 75.7920494
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "06:00",
              "closes": "23:00"
            }
          ]
        })}
      </Script>
      <Script type="application/ld+json" id="website-schema" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Rajasthan Tour Packages",
          "url": "https://www.rajasthantourpackages.in/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.rajasthantourpackages.in/{search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </Script>
    </>
  );
}


export default Page;