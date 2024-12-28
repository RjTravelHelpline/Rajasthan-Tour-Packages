import BlogsSection from "@/components/BlogsSection";
import DaysPack from "@/components/DaysPack";
import Gallery from "@/components/Gallery";
import HomeCarousel from "@/components/HomeCarousel";
import PackagesByCities from "@/components/PackagesByCities";
import Packages from "@/components/PopularPackages";
import ReadMoreToggle from "@/components/ReadMore";
import Reviews from "@/components/Reviews";
import Script from "next/script";
import { Col, Container } from "react-bootstrap";

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
const homeData = {
  heading: ``,
  content: [
    `Explore the diverse and culturally rich regions of Rajasthan, a land of vibrant traditions, majestic forts, and stunning landscapes. Our <strong>Rajasthan Tour Packages Explore Rajasthan with Us</strong> cater to various interests, ensuring an unforgettable journey for every traveler. Our 
    <a
      href='https://www.rajasthantourpackages.in/'
      target="_blank"
      rel="noopener noreferrer"
      class="anchor text-web fw-bold me-1"
    >
      Rajasthan Tour Packages 
    </a> 
    are affordable and <strong>Flexible, Catering To Families And Individuals</strong>. Our meticulously planned itineraries are crafted to make the most of your time, ensuring a smooth and hassle-free experience. With various options available, you can personalize your trip to match your preferences and interests, giving you complete control over your travel plans.`,
    `Experience the royal treatment with our private <strong>Tour Packages To Rajasthan</strong>, where personalized attention is our top priority. This allows you to savor this royal state's incredible sights and sounds at your own pace. Our expert guides will be by your side, sharing their deep knowledge of each destination's rich history, culture, and traditions, making you feel valued and important. We understand your time is precious, so we aim to offer maximum experiences in minimum time. Whether you want to explore the iconic landmarks of Jaipur, immerse yourself in the vibrant culture of Udaipur, witness the architectural wonders of Jodhpur, discover the ancient history of Pushkar, or experience the colorful charm of Jaisalmer, our 
    <a
      href='https://www.rajasthantourpackages.in/'
      target="_blank"
      rel="noopener noreferrer"
      class="anchor text-web fw-bold me-1"
    >
      Rajasthan Tours and Travels 
    </a> Packages cover it all.`,
    `Join us for an unforgettable journey through Rajasthan, where you can create lifelong memories and discover the magic of this incredible region. Let us help you experience the best of Rajasthan with our tailored <strong>Tour Packages For Families </strong> And Individuals , offering a perfect blend of adventure, culture, and relaxation.`,

  ],
};
const Home = () => {
  return (
    <>
      {/* Using next/script for JSON-LD */}
      <HomeCarousel />
      <section className="container-fluid bg-tertary-down pt-5">
        <Container className=" home px-0">
          <Col className="col-12 d-flex justify-content-start flex-column align-items-center position-relative">
            <h1 className="text-center mb-4 fw-normal home-heading web-title text-black">
              <span className="me-2">Rajasthan Tour Packages</span>
              <span className="fw-bold">Explore Rajasthan with Us</span>
            </h1>
            <p
              className="text-justify home-para px-2 text-black"
              dangerouslySetInnerHTML={{ __html: homeData.content[0] }}
            />
            <ReadMoreToggle className="text-justify home-para px-2 text-black" tag="div" contentArray={homeData.content.slice(1)} />
            <div className="py-2"></div>
          </Col>
        </Container>
      </section>
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