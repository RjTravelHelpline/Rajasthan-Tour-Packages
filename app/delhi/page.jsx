import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import Breadcrumb from '../../../components/Breadcrumb';
import useShowAll from '../../../components/Utility/useShowAll';
import TourPackages from '../../../components/TourPackages';
import { Helmet } from 'react-helmet';
import { delhiTourPackagesData } from '../../../assets/data/data';
import { Carousel } from 'react-bootstrap';
import { allStatesImages } from '../../../assets/data/imageData';

const Delhi = () => {
  // show all component
  const { visibleItems, showAll, toggleShowAll } = useShowAll(
    delhiTourPackagesData
  );
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href="https://www.rajasthantourpackages.in/delhi"
        />
        {/* Google Tag Manager script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GT-T9L6NNGZ"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-T9L6NNGZ');
          `}
        </script>
      </Helmet>
      <Breadcrumb breadcrumbKey="delhi" />
      {/* banner */}
      <div className="container-fluid home-banner destination-banner position-relative px-0">
        <Carousel fade pause={false} controls={false}>
          <Carousel.Item>
            <img
              src={allStatesImages.delhi.delhiBanner.src}
              alt="Home Banner"
            />
            <Carousel.Caption>
              <h1 className="text-capitalize">delhi</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* packages */}
      <div className="container packages">
        <div className="row d-flex justify-content-center align-items-stretch my-5">
          <h2 className="text-capitalize">
            delhi <span className="fw-normal">tour packages</span>
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
      </div>
    </>
  );
};

export default Delhi;
