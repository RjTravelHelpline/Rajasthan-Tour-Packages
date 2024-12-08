import BlogsSection from "@/components/BlogsSection";
import DaysPack from "@/components/DaysPack";
import Gallery from "@/components/Gallery";
import HomeCarousel from "@/components/HomeCarousel";
import PackagesByCities from "@/components/PackagesByCities";
import Packages from "@/components/PopularPackages";
import ReadMoreToggle from "@/components/ReadMore";
import Reviews from "@/components/Reviews";
import Script from "next/script";

export const metadata = {
  title: 'Best Rajasthan Tours and Travels | Rajasthan Tour Packages',
  description: 'Begin our famous Rajasthan Tours and Travels. Tour places, deserts, and treasures of culture by instant booking customized packages. Your royal adventure awaits.',
  keywords: ["Rajasthan Tours and Travels", "Rajasthan Tour Packages", "Popular Tour Packages", "Rajasthan tour by days", "Rajasthan trip", "Rajasthan tour package for families", "Rajasthan Tour from the United Kingdom"],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in",
  },
  openGraph: {
    title: 'Best Rajasthan Tours and Travels | Rajasthan Tour Packages',
    description: 'Begin our famous Rajasthan Tours and Travels. Tour places, deserts, and treasures of culture by instant booking customized packages. Your royal adventure awaits.',
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
    description: 'Begin our famous Rajasthan Tours and Travels. Tour places, deserts, and treasures of culture by instant booking customized packages. Your royal adventure awaits.',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};
const homeData = {
  heading: ``,
  content: [
    `Explore the diverse and culturally rich regions of Rajasthan, a
              land of vibrant traditions, majestic forts, and stunning
              landscapes. Our
              <span className="fw-bold"> Rajasthan tour packages</span> cater to
              various interests, ensuring an unforgettable journey for every
              traveler. Our Rajasthan tour packages are affordable and 
              <span className="fw-bold">
                flexible, catering to families and individuals
              </span>
              . Our meticulously planned itineraries are crafted to make the
              most of your time, ensuring a smooth and hassle-free experience.
              With various options available, you can personalize your trip to
              match your preferences and interests, giving you complete control
              over your travel plans.`,
    `Experience the royal treatment with our private 
                  <span className="fw-bold">tour packages to Rajasthan</span>,
                  where personalized attention is our top priority. This allows
                  you to savor this royal state&apos;s incredible sights and sounds
                  at your own pace. Our expert guides will be by your side,
                  sharing their deep knowledge of each destination&apos;s rich
                  history, culture, and traditions, making you feel valued and
                  important. We understand your time is precious, so we aim to
                  offer maximum experiences in minimum time. Whether you want to
                  explore the iconic landmarks of Jaipur, immerse yourself in
                  the vibrant culture of Udaipur, witness the architectural
                  wonders of Jodhpur, discover the ancient history of Pushkar,
                  or experience the colorful charm of Jaisalmer, our
                  <span className="fw-bold">Rajasthan tour packages</span> cover
                  it all.`,
    ` Join us for an unforgettable journey through Rajasthan, where
                  you can create lifelong memories and discover the magic of
                  this incredible region. Let us help you experience the best of
                  Rajasthan with our tailored 
                  <span className="fw-bold">
                    tour packages for families and individuals
                  </span>
                  , offering a perfect blend of adventure, culture, and
                  relaxation.`,

  ],
};
const Home = () => {
  return (
    <>
      {/* Using next/script for JSON-LD */}
      <HomeCarousel />
      <div className="container-fluid bg-tertary-down pt-5">
        <div className="container home px-0">
          <div className="col col-12 d-flex justify-content-start flex-column align-items-center position-relative">
            <h1 className="text-center mb-4 fw-normal home-heading web-title">
              Experience Rajasthan with{' '}
              <span className="fw-bold"> Our Tailormade Tour Packages</span>
            </h1>
            <p
              className="text-justify home-para px-2"
              dangerouslySetInnerHTML={{ __html: homeData.content[0] }}
            />
            <ReadMoreToggle className="text-justify home-para px-2" tag="div" contentArray={homeData.content.slice(1)} />
            <div className="py-2"></div>
          </div>
        </div>
      </div>
      <Packages />
      <DaysPack />
      <PackagesByCities />
      <Reviews />
      <Gallery />
      <BlogsSection />
      <Script type="application/ld+json" id="travel-agency-schema">
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
      <Script type="application/ld+json" id="website-schema">
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


export default Home;