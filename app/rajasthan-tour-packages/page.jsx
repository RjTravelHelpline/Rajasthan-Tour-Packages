import {
  _02DaysToursData,
  _03DaysToursData,
  _04DaysToursData,
  _05DaysToursData,
  _06DaysToursData,
  _07DaysToursData,
  _08DaysToursData,
  _09DaysToursData,
  _10DaysToursData,
  _11To15DaysToursData,
} from "@/data/data"
import Breadcrumb from '@/components/Breadcrumb';
import RTPNav from '@/components/RTPNav';
import { TourPackageSection } from '@/components/TourPackageSection';

export const metadata = {
  title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
  description: 'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/rajasthan-tour-packages",
  },
  openGraph: {
    title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
    description: 'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
    url: "https://www.rajasthantourpackages.in/rajasthan-tour-packages",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Book Rajasthan Travel Packages | Rajasthan Tour Packages',
    description: 'Get lost in Rajasthan with our Rajasthan travel packages. Find majestic forts, luxurious places, and carefully customized experiences. Book an ideal trip today.',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
};

const RajasthanTourPackages = () => {

  return (
    <>
      <Breadcrumb breadcrumbKey="tourByDaysHome" />

      {/* header */}
      <div className="container-fluid bg-black text-white py-5">
        <div className="row">
          <h1 className="sec-subhead">
            {' '}
            <span className="d-block fw-normal fs-5 color-tertary text-uppercase">
              Rajasthan
            </span>
            Tour packages
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <RTPNav />

      {/* Navigation Links */}
      <div className="container-fluid px-0">
        <div className="row tour-packages-nav">
          {["02", "03", "04", "05", "06", "07", "08", "09", "10", "11-15"].map((day, index) => (
            <a href={`#${day}-days`} key={index}>
              {day} <span className="fw-normal">days</span>
            </a>
          ))}
        </div>
        <TourPackageSection days="02" tourData={_02DaysToursData} />
        <TourPackageSection days="03" tourData={_03DaysToursData} />
        <TourPackageSection days="04" tourData={_04DaysToursData} />
        <TourPackageSection days="05" tourData={_05DaysToursData} />
        <TourPackageSection days="06" tourData={_06DaysToursData} />
        <TourPackageSection days="07" tourData={_07DaysToursData} />
        <TourPackageSection days="08" tourData={_08DaysToursData} />
        <TourPackageSection days="09" tourData={_09DaysToursData} />
        <TourPackageSection days="10" tourData={_10DaysToursData} />
        <TourPackageSection days="11-15" tourData={_11To15DaysToursData} />
      </div>

      {/* bread crumb */}

    </>
  );
};

export default RajasthanTourPackages;
