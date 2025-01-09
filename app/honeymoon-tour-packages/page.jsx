import Breadcrumb from "@/components/Breadcrumb";
import ItineraryAccordion from "@/components/ItineraryAccordion";
import TourCarousel from "@/components/TourCarousel";
import { destinationCovered, tourItinerary } from "@/data/Days Data/honeymoonTourData";
import { allCitiesImages } from "@/data/imageData";
import { Link } from "@/Utils/util";
import { FaStarOfLife } from "react-icons/fa";

const HoneyMoonTourPackage = () => {
    const images = [
        {
            src: allCitiesImages.jaipur.jaipurHoneymoon.src,
            alt: allCitiesImages.jaipur.jaipurBanner02.alt,
            title: allCitiesImages.jaipur.jaipurBanner02.title,
        },
    ];
    const content = [
        {
            duration: '',
            title: 'Rajasthan Honeymoon Tour Packages',
        },
    ];
    return (
        <>
            <Breadcrumb breadcrumbKey="honeymoonTour" />
            {/* banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <TourCarousel images={images} content={content} />
            </div>
            <div className="container-fluid px-0 pt-4">
                <div className="container days-container overview">
                    <div className="row d-flex justify-content-center align-items-center days-overview px-2 days-highlights">
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-bold web-title"
                            > overview</h3>
                            <p
                                className="home-para px-3"
                            >
                                Rajasthan with its forts, palace, rich colour, and that dessert feel has always been one of the most attractive honeymoon destinations.  Whether you are picturing yourself wandering through the empty dunes of the desert or living like kings and queens of Rajasthan, <strong>Rajasthan honeymoon packages</strong> cover everything to give you an idealized honeymoon tour. This is a land of kings more than a land of history and recessed strengths that create the perfect paradise for two on a romantic vacation, etc
                            </p>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"

                            > Why Rajasthan for <strong>Honeymoon</strong>?</h3>
                            <p className="px-3 mb-0">Rajasthan represents something magical and majestic. Here are some reasons why Rajasthan  with {Link('Rajasthans Majestic Forts', 'https://www.rajasthantourpackages.in/blog/rajasthans-majestic-forts-royal-history')} is an ideal honeymoon destination:</p>
                            <hr />
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Romantic Palaces and Heritage Hotels</strong>Give those hotels the magical fairy tale look evocative of the fairy tale settings of the Lake Palace in Udaipur or the Rambagh Palace in Jaipur.
                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Desert Adventures</strong>Immerse your senses with a camel ride through the desert with lovely evening camp and comfortable overnight accommodation in the Thar Desert.

                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Scenic Beauty</strong>This is why Rajasthan is not only rich with grey scenes like scrubby fields or abandoned buildings but also has significantly more beautiful and exotic places like lakes, forests, or castles.

                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Rich Cultural Experiences </strong>
                                        Taste folk music and dance shows and eat Rajasthani food to make the trip more of a honeymoon.

                                    </span>
                                </p>
                            </div>

                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"

                            > <strong>Top Destinations</strong> to visit</h3>
                            <ol>
                                <li className="px-2">
                                    <p className="web-title fw-bold text-black"><strong>Udaipur City of Lakes</strong></p>
                                    <p>The natural setting of lakes in and around Udaipur and the city&lsquo;s tremendous architecture make it among the best honeymoon destinations. Find the Lake Palace&lsquo;s interiors, take a boat tour of Lake Pichola, or appreciate City Palace. Visit Saheliyon Ki Bari garden meant for royal ladies, and end the evening with a light dinner around the lake. Explore {Link('Places to Visit in Udaipur', 'https://www.rajasthantourpackages.in/udaipur')} for a complete experience.</p>
                                </li>
                                <li className="px-2">
                                    <p className="web-title fw-bold text-black"><strong>Jaisalmer Golden City</strong></p>
                                    <p>In essence, Jaisalmer presents any tourist&lsquo;s desire for an adventure fix coupled with a romantic feel. Fun activities include taking a luxurious desert camp in Sam Sand Dunes, being transported from one destination to the next by camel, and watching the sunset. It would help if you did not visit {Link('Jaisalmer Fort', 'https://www.rajasthantourpackages.in/jaisalmer')}, which is masterminded, and the Gadisar Lake looks very beautiful.
                                    </p>
                                </li>
                                <li className="px-2">
                                    <p className="web-title fw-bold text-black"><strong>Jaipur Pink City</strong></p>
                                    <p>Jaipur is a perfect blend of royalty with the touch of contemporary facilitation. Tourist sites that should make the nightlife memorable include Amer Fort, Hawa Mahal, and City Palace. Visit a shopping center for {Link('Jaipur sightseeing tours', 'https://www.rajasthantourpackages.in/jaipur')}, souvenirs, self-made small knick-knacks, and gems, or grab a lovers’ couple massage at one of the city‘s luxurious hotels.
                                    </p>
                                </li>
                                <li className="px-2">
                                    <p className="web-title fw-bold text-black"><strong>Mount Abu Hill Station of Rajasthan</strong></p>
                                    <p>Mount Abu is the only hill station in Rajasthan. that provides a better climate and greenery option. Said attractions are a boat ride in Nakki Lake, visiting the boating site at Dilwara temples, and watching the sunset at Honeymoon Point. {Link('Mount Abu Hill Station Travel', 'https://www.rajasthantourpackages.in/mount-abu')} offers an unforgettable experience amidst its serene beauty.
                                    </p>
                                </li>
                                <li className="px-2">
                                    <p className="web-title fw-bold text-black"><strong>Pushkar and Ajmer</strong></p>
                                    <p>For religious couples, {Link('Pushkar and Ajmer', 'https://www.rajasthantourpackages.in/ajmer')} are the correct places to visit. I believe that my spiritual perception can gain some comfort in the serene vistas of Pushkar and its boating lake and confronting the world’s only temple of Lord Brahma, located in this city. Similarly, the blessing of Ajmer’s Dargah Sharif makes any spiritual soul sleep in the shade of its blessings.This experience can be enhanced by opting for a {Link('3 Days Jaipur Ajmer Pushkar Tour', 'https://www.rajasthantourpackages.in/3days-jaipur-ajmer-pushkar-tour')} to explore the spiritual essence of these destinations.</p>
                                </li>
                            </ol>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"

                            > <strong>Popular Activities</strong> in visit</h3>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Stay in Luxury Heritage Hotels</strong>You can touch royalty by staying at hotels converted from palaces, and many people prefer this kind of accommodation.
                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Private Desert Safaris</strong>You can take a sunset camel ride and Sand sliders, take interesting cultural programs and dinner at night in the desert.
                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Hot Air Balloon Rides</strong>See the forts and palace of Jaipur from a bird’s eye view when you are up, up in a Hot Air Balloon.
                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Cultural Evenings</strong>Experience real folk music and dance shows along with Rajasthan&lsquo;s royal dressing sense and Rajasthan&lsquo;s richest traditional food.
                                    </span>
                                </p>
                                <p className="home-para px-2 text-black py-1">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Couple’s Spa and Wellness Sessions</strong>Experience Ayurveda at the new luxurious spas in Rajasthan.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 text-black days-highlights">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            ><strong>Customized</strong> Options</h3>
                            <p className="px-3">Honeymoon makers can select a broad assortment of modest Rajasthan honeymoon packages or receive them customised according to their needs and financial plans. Popular options include:
                            </p>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="home-para px-2 py-1 text-black">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title fw-bold d-block">Luxury Honeymoon Packages</strong>
                                        Spend nights in historic luxury accommodations, dine under the stars, and have personal tours of the desert.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 text-black">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title fw-bold d-block">Budget-Friendly Honeymoon Packages</strong>Experience Rajasthan’s beauty at its finest, or get your money back.  It includes housing, tourist attractions, and the most frequent tourist attractions.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 text-black">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title fw-bold d-block">Adventure Honeymoon Packages</strong>Make your trip a little adventurous and enjoy sunset tours on the Mehrangarh Fort Zipline, camping in the desert and trekking in Mount Abu.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 days-highlights text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"

                            >  <strong>Best Time</strong> to Visit</h3>
                            <p className="px-3 home-para">
                                The best time to visit Rajasthan for a honeymoon is during the winter since the climate is a favourite of tourists. The weather during this time is also good. It does not rain. Hence, one can tour the sites without worrying about the Uganda sky opening up and pouring down on them while having interesting things to do outside.
                            </p>
                            <h4 className="fw-semibold web-title px-3">
                                How to Choose the Perfect Rajasthan Honeymoon Package
                            </h4>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="home-para px-2 py-1 bg-white">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Identify Your Interests: </strong>When it comes to choosing your vacation, you have the option to go for a luxurious trip, an adventurous one, or a cultural one; choose your package wisely.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white" >
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Duration of Stay: </strong>Typically, packages are for 3 to 10 days. Select a time to take you through the most important places without rushing.</span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white" >
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Budget: </strong>Rajasthan honeymoon packages are available in all categories, from the cheapest to the most expensive.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white" >
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Inclusions: </strong>Make sure that the package entails accommodation, feeding, sightseeing and transport so as not to bother with any of these.
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-11 col-sm-12 px-0 insider days-highlights mb-3 text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"
                            >Suggested <strong>Itinerary</strong>
                            </h3>
                            <div className="w-100">
                                <p className="px-3">7-Day Romantic Rajasthan Honeymoon Itinerary</p>
                                <p className="px-3 text-capitalize fw-bold web-title">
                                    {destinationCovered.title}
                                </p>
                            </div>
                            <div className="destination-covered d-flex align-items-center gap-1 section-03 overflow-auto px-3">
                                {destinationCovered.destinations.map((item, index) => (
                                    <p className="d-inline mb-0" key={index}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                            <div className="row mt-3 d-flex justify-content-center align-items-center accordion">
                                <div className="col-12 col-sm-12 d-flex justify-content-center align-items-center px-4">
                                    <ItineraryAccordion tourItinerary={tourItinerary} />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-11 col-sm-12 insider px-0 mb-3 days-highlights text-black">
                            <h3
                                className="text-capitalize px-3 mb-3 text-center fw-normal web-title"

                            >  Why <strong>Book with Us</strong>?</h3>
                            <div className="w-100 px-2 days-highlights-pts">
                                <p className="home-para px-2 py-1 bg-white">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Tailor-Made Itineraries</strong>We deal with flexible prices depending on your preferred package
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Expert Guidance</strong>Our team of local experts ensures you explore the {Link('best rajasthan tour package', 'https://www.rajasthantourpackages.in/')}.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">Seamless Planning</strong>You will only need to focus on attending the events, and we will solve all other issues.
                                    </span>
                                </p>
                                <p className="home-para px-2 py-1 bg-white">
                                    <span className="me-2">
                                        <FaStarOfLife className="icon" />
                                    </span>
                                    <span>
                                        <strong className="web-title d-block">24/7 Assistance</strong>We’re available round the clock to assist with your queries.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HoneyMoonTourPackage;