'use client'
import Bread from "@/components/Bread";
import HeroBanner from "@/components/HeroBanner";
import { FaStarOfLife } from "react-icons/fa";
import { faq } from "./data";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState } from "react";
import { Link } from "@/Utils/util";

const Page = () => {
  const breadcrumbItems = [
    { label: "Home", link: "/", active: false },
    { label: "rajasthan cab rental", link: "/rajasthan-cab-rental", active: false },
    { label: "jaipur cab rental", link: null, active: true },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };
  return (
    <>
      <HeroBanner
        slides={[
          { heading: "Jaipur Cab Rental", subheading: "Travel around Jaipur in Comfort and Style" }
        ]}
        backgroundImage="/Images/Banners/jaipur-banner.webp" />
      <Bread items={breadcrumbItems} />
      {/* bread crumb */}
      <div className="container-fluid px-0 pt-4 ">
        <div className="container days-container overview">
          <div className="row d-flex justify-content-center align-items-center days-overview px-2 days-highlights">
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-bold web-title"
              > overview</h2>
              <p
                className="home-para px-3"
              >
                Jaipur, the pink city, the city of Royale is one of the most colourful destinations of Rajasthan, which represents the traditions and cultural prosperity of the state. Jaipur Cab Rental aims to provide safe, comfortable and affordable cab services for exploring landmarks, markets and charming streets of the city for any type of traveller.
              </p>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              > Why Choose <strong>Jaipur Cab Rental</strong>?</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Wide Fleet Selection</strong>
                    At Jaipur Cab Rental the travelling requirement is met by different types of car rental services starting from small economy cars, huge cars, luxury cars, etc. Whether you’re travelling solo with family or in a group, we have the perfect cab for you.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Desert Adventures</strong>Immerse your senses with a camel ride through the desert with lovely evening camp and comfortable overnight accommodation in the Thar Desert.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Professional Drivers</strong>
                    All our drivers are professional, friendly and efficient and possess good knowledge of the routes and places to be visited in Jaipur. They also serve as informants with additional details of other places in the city and the historical and cultural significance of that place.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Customizable Packages</strong>
                    We have airport transfers, local transfers and full-day tours, city tours that are sufficiently flexible to ensure that our clients get the tour that they want. We provide the perfect itinerary whether you want to visit Amber Fort for a few hours or if you want to explore the identities of Jaipur on a more relaxed note.</span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Affordable Pricing </strong>
                    To add to that, Jaipur Cab Rental offers clients competitive prices for our services without any additional charges. The prices are, of course, quite sane and you can rent out our cars on an hourly, daily or package basis.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">24/7 Availability</strong>
                    Book your cab anytime, anywhere. To ensure services to the clients Jaipur Cab Rental is available 24/7. Booking through the website is very easy, and all our customers get to avoid the complicated process of booking their travel plans.
                  </span>
                </p>
                <p className="px-2">
                  Travel around Jaipur with ease and Safety using our trusted cab rental services. Book now and discover the best of Jaipur effortlessly.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >  <strong>Comprehensive </strong>Cab Services in Jaipur</h2>
              <p className="px-3">
                {Link('Cab Services in Jaipur', 'https://www.jaipurtaxiservice.com/jaipur-local-use/taxi-for-12-hours.html')} caters to a wide range of travel needs, including:
              </p>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Sightseeing</strong>
                    Book our expertly guided cars and visit Amber Fort, Hawa Mahal, Jantar Mantar, City Palace and more with our {Link('Jaipur sightseeing tours', 'https://www.rajasthantourpackages.in/jaipur')}.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Airport Transfers</strong>
                    Get an express Car rental service to and from Jaipur International Airport.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Outstation Trips</strong>
                    We also provide outstation Jaipur taxi services to visit tourist places like Ajmer Pushkar and Ranthambore.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Custom Packages</strong>
                    Flexibly plan your visit to the most interesting places to get the best trip of your dreams.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              ><strong>Top Attractions</strong> Covered by Jaipur Cab</h2>
              <div className="w-100 px-2 days-highlights-pts">
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Amber Fort</strong>
                    Take a look at the awesome structure and the natural landscape of this old prison.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Hawa Mahal</strong>
                    Tour the Wind Palace which has wonderful expensive carving work and has a lot of historical significance.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">City Palace</strong>
                    Visit the royal palace demonstrating the Royal architecture of Rajasthan.
                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Jantar Mantar</strong>
                    Go to the site which is now a UNESCO World Heritage one and see the ancient tools used to study space.

                  </span>
                </p>
                <p className="px-2 text-black py-1">
                  <span className="me-2">
                    <FaStarOfLife className="icon" />
                  </span>
                  <span>
                    <strong className="web-title d-block">Local Markets</strong>
                    Go to the site which is now a UNESCO World Heritage one and see the ancient tools used to study space.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
              <h2
                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
              >Explore <strong>Jaipur</strong> with Ease</h2>
              <p className="px-2 py-1">
                Travelling in this city and in the most famous places in Jaipur has never been so smooth. Hiring a car with <strong>Jaipur Cab Rental</strong> company means that you do not have to worry about your transport. Our services reflect all types of travel whether it is business, leisure, family, individual, adventure or group travel.
              </p>
              <p className="px-2 py-1">
                Book your trip with {Link('Jaipur Cab Rental', 'https://www.jaipurtaxiservice.com/jaipur-local-use/taxi-for-12-hours.html')} now to have the once-in-a-lifetime trip with Pink City. Book now and discover the best of Jaipur effortlessly with {Link('Rajasthan Tour and travel', 'https://www.rajasthantourpackages.in/')}.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* faq's */}
      <div className="container-fluid px-0 mt-4 section-03">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-sm-12">
              <h3 className="mb-4 text-center web-title">
                Frequently <span className="fw-normal">Asked Questions</span>
              </h3>
              <div className="faq cab-rental-accordion">
                <ol>
                  {faq.map((item, index) => (
                    <li key={index}>
                      <p
                        className="p-2 cursor-pointer web-title fw-bold d-flex align-items-center justify-content-between"
                        onClick={() => handleToggle(index)}
                      >
                        {item.question}
                        <span className="bg-tertary-down p-2 color-tertary d-flex align-items-center rounded-5">
                          {activeIndex === index ? <BiMinus /> : <BiPlus />}
                        </span>
                      </p>
                      <div
                        id={`faq-${index}`}
                        className={`${activeIndex === index ? "active" : "hidden"
                          }`}
                      ><p className="px-2">{activeIndex === index ? item.answer : ''}</p>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
