import Breadcrumb from '@/components/Breadcrumb';
import Faq from '@/components/Faq';
import { Vijayawada } from '@/data/tourByCitiesData';
import TourPackages from '@/components/TourPackages';
import { vijayawadaFaq } from '@/data/faqData';
import ReadMoreToggle from '@/components/ReadMore';
import TourCarousel from '@/components/TourCarousel';
import { allStatesImages } from '@/data/imageData';

export const metadata = {
    title: 'Rajasthan Tour From Vijaywada | Rajasthan Tour Packages',
    description:
        'Rajasthan Tour from Vijayawada to the land of kings at Rajasthan Tour Packages. Experience the royal forts, palaces, and colourful traditions of Rajasthan. Book Now.',
    keywords: [''],
    alternates: {
        canonical:
            'https://www.rajasthantourpackages.in/rajasthan-tour-from-vijaywada',
    },
    openGraph: {
        title: 'Rajasthan Tour From Vijaywada | Rajasthan Tour Packages',
        description:
            'Rajasthan Tour from Vijayawada to the land of kings at Rajasthan Tour Packages. Experience the royal forts, palaces, and colourful traditions of Rajasthan. Book Now.',
        url: 'https://www.rajasthantourpackages.in/rajasthan-tour-from-vijaywada',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        siteName: 'Rajasthan Tour Packages',
        type: 'website',
    },
};

const RajasthanPackageTourFromVijaywada = () => {
    const images = [
        { src: allStatesImages.vijayawada.vijayawadaBanner.src },
    ];
    const content = [
        {
            duration: '',
            title: 'Rajasthan Tour From vijayawada',
        },
    ];
    return (
        <>
            {/* bread crumb */}
            <Breadcrumb breadcrumbKey="rajasthanTourFromVijaywada" />
            {/* banner */}
            <div className="container-fluid home-banner days-banner-container destination-banner position-relative px-0">
                <TourCarousel images={images} content={content} />
            </div>
            {/* data */}
            <div className="container-fluid">
                <div className="container py-5">
                    <div className="row px-2">
                        <p className="home-para cities-para">
                            Experience the grandeur of Rajasthan with our{' '}
                            <span className="fw-bold">Rajasthan Tour from Vijayawada</span>.
                            This specially designed tour package offers a perfect combination
                            of historical exploration, cultural immersion, and luxury,
                            starting from the vibrant city of Vijayawada.
                            <ReadMoreToggle>
                                <>
                                    <span className="home-para d-block">
                                        Highlights of the{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>
                                    </span>
                                    <span className="home-para d-block">
                                        Our{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>{' '}
                                        includes:
                                    </span>
                                    <span className="home-para d-block">
                                        Jaipur: Begin your journey in the Pink City, visiting the
                                        grand Amber Fort, the opulent City Palace, and the iconic
                                        Hawa Mahal. Jaipur’s architectural marvels and vibrant
                                        culture set the stage for your adventure. Udaipur: Discover
                                        Udaipur, the City of Lakes, with its serene Lake Pichola,
                                        the luxurious Lake Palace, and the charming Jag Mandir.
                                        Udaipur’s romantic setting adds a touch of elegance to your
                                        tour. Jaisalmer: Explore the Golden City’s desert charm with
                                        its stunning sandstone architecture. Highlights include the
                                        Jaisalmer Fort and intricately designed havelis. Jodhpur:
                                        Experience the Blue City with its grand Mehrangarh Fort, the
                                        elegant Umaid Bhawan Palace, and bustling markets. Jodhpur’s
                                        rich culture and historical sites offer a memorable journey.
                                    </span>
                                    <span className="home-para d-block">
                                        Why Choose Our{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>
                                        ?
                                    </span>
                                    <span className="home-para d-block">
                                        Opting for our{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>{' '}
                                        means:
                                    </span>
                                    <span className="home-para d-block">
                                        Well-Curated Itinerary: A comprehensive tour covering
                                        Rajasthan’s top landmarks and cultural highlights. Comfort
                                        and Luxury: Premium accommodations, comfortable transport,
                                        and exceptional service throughout your journey. Expert
                                        Guides: Gain valuable insights from our knowledgeable guides
                                        about Rajasthan’s heritage and culture. Customizable
                                        Options: Tailor your{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>{' '}
                                        to fit your interests and preferences.
                                    </span>
                                    <span className="home-para d-block">
                                        Book your{' '}
                                        <span className="fw-bold">
                                            Rajasthan Tour from Vijayawada
                                        </span>{' '}
                                        today and explore the regal charm and cultural richness of
                                        Rajasthan. Our team ensures a seamless and unforgettable
                                        travel experience.
                                    </span>
                                </>{' '}
                            </ReadMoreToggle>
                            <span className="py-4 d-block"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* packages */}
            <div className="container-fluid section-02 py-4">
                <div className="container packages py-2">
                    <div className="row">
                        <h2 className="fw-normal text-capitalize">
                            Tour Packages from <span className="fw-bold">vijayawada</span>
                        </h2>
                    </div>
                    <div className="row py-4 d-flex align-items-stretch px-2">
                        {Vijayawada.map((pkg, index) => (
                            <TourPackages key={index} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </div>

            {/* faq's */}
            <div className="container-fluid px-0 section-03">
                <div className="container py-5">
                    <div className="row">
                        <h3 className="mb-4">
                            Frequently <span className="fw-normal">Asked Questions</span>
                        </h3>
                        <Faq faqs={vijayawadaFaq.questions} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RajasthanPackageTourFromVijaywada;
