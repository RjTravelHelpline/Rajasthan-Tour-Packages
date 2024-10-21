"use client";
import Breadcrumb from "@/components/Breadcrumb";
import { allCitiesImages } from "@/data/imageData";
import { Carousel } from "react-bootstrap";

const Jaipur = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jaipur" />
      {/* banner */}
      <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allCitiesImages.jaipur.jaipurBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">jaipur</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container px-0 py-5 days-container overview destination">
        <div className="row d-flex justify-content-start align-items-start days-overview px-2">
          <div className="col-12 col-lg-9 col-sm-12 px-0 insider">
            <h2 className="text-capitalize text-center">
              <span className="fw-normal">about</span> jaipur
            </h2>
            <p className="text-justify home-para px-3 px-3">
              Jaipur, the vibrant capital of Rajasthan, is renowned for its
              regal history, stunning architecture, and rich cultural heritage.
              Known as the Pink City due to its distinctive pink-hued buildings,
              Jaipur offers an unforgettable experience for travelers. Discover
              why Jaipur is a must-visit destination with our tailored Jaipur
              Tour Packages.
            </p>
            <p className="home-para px-3">
              Historical Attractions: Jaipur is home to several iconic landmarks
              that reflect its royal past. The Amber Fort, with its stunning
              blend of Hindu and Mughal architecture, stands majestically on a
              hill. The City Palace, a magnificent complex of palaces,
              courtyards, and gardens, showcases the grandeur of the erstwhile
              royal family. Don’t miss the Hawa Mahal (Palace of Winds), an
              architectural marvel with its intricately designed façade.
            </p>
            <p className="home-para px-3">
              Cultural Experiences: Jaipur’s vibrant bazaars offer a treasure
              trove of handicrafts, textiles, and traditional Rajasthani
              jewelry. The bustling Johari Bazaar and Bapu Bazaar are perfect
              for shopping enthusiasts. Immerse yourself in local traditions by
              attending a lively Rajasthani folk dance or music performance.
              Modern Attractions: For a taste of contemporary Jaipur, visit the
              Jantar Mantar, an astronomical observatory that blends science and
              art. The Rambagh Palace, now a luxury hotel, provides a glimpse
              into royal life with its opulent design and serene surroundings.
            </p>
            <p className="home-para px-3">
              Culinary Delights: Jaipur’s food scene is as diverse as its
              attractions. Savor traditional Rajasthani dishes like dal bati
              churma and gatte ki sabzi at local eateries and upscale
              restaurants alike. Our Jaipur Travel Packages offer a
              comprehensive exploration of this enchanting city, combining
              historical tours, cultural experiences, and leisure activities.
              Whether you’re here for a short visit or an extended stay, Jaipur
              promises a rich and memorable journey. Book your Jaipur tour today
              and experience the charm of the Pink City.
            </p>
          </div>

          <div className="col-lg-3 col-sm-12 col-md-12 side-nav">
            <div className="sidebar-menu w-100">
              <h2 className="text-capitalize">quick links</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a href="#about">about jaipur</a>
                </li>
                <li className="list-group-item">
                  <a href="#historical-attractions">Jaipur Sightseeing</a>
                </li>
                <li className="list-group-item">
                  <a href="#cultural-experiences">Museums & Art Galleries</a>
                </li>
                <li className="list-group-item">
                  <a href="#modern-attractions">Fairs & Festivals</a>
                </li>
                <li className="list-group-item">
                  <a href="#culinary-delights">Jaipur Excursions</a>
                </li>
                <li className="list-group-item">
                  <a href="#culinary-delights">Shopping in Jaipur</a>
                </li>
                <li className="list-group-item">
                  <a href="#culinary-delights">Restaurants & Local Cuisine</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-9 col-sm-12 px-0 insider">
            <h2 className="text-capitalize text-center">
              <span className="fw-normal">about</span> jaipur
            </h2>
            <p className="text-justify home-para px-3 px-3">
              Jaipur, the vibrant capital of Rajasthan, is renowned for its
              regal history, stunning architecture, and rich cultural heritage.
              Known as the Pink City due to its distinctive pink-hued buildings,
              Jaipur offers an unforgettable experience for travelers. Discover
              why Jaipur is a must-visit destination with our tailored Jaipur
              Tour Packages.
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-start align-items-start days-overview px-2"></div>
      </div>

      {/* packages
      <div className="container packages">
        <div className="row d-flex justify-content-center align-items-stretch my-5">
          <h2 className="text-capitalize">
            jaipur <span className="fw-normal">tour packages</span>
          </h2>
          <div className="row py-4 d-flex align-items-stretch px-2">
            {visibleItems.map((pkg, index) => (
              <TourPackages key={index} pkg={pkg} />
            ))}
          </div>
          <div className="row d-flex w-100 justify-content-center align-items-center">
            <button
              onClick={toggleShowAll}
              className="more-btn bg-transparent d-flex justify-content-center align-items-center gap-2"
            >
              {showAll ? (
                <>
                  Show less <MdExpandLess />
                </>
              ) : (
                <>
                  View all <MdExpandMore />
                </>
              )}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Jaipur;
