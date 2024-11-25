import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";

export const metadata = {
  title: '02-05 Days Rajasthan Tour Packages',
  description: "",
  keywords: [''],
  alternates: {
    canonical: "https://www.rajasthantourpackages.in/02-05-days-rajasthan-tours",
  },
  openGraph: {
    title: '02-05 Days Rajasthan Tour Packages',
    description: '',
    url: "https://www.rajasthantourpackages.in/02-05-days-rajasthan-tours",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
};


const Two_Five_Days_RajasthanTours = () => {
  const images = [
    {
      src: allCitiesImages.jaipur.jaipurBanner01.src,
      alt: allCitiesImages.jaipur.jaipurBanner01.alt,
      title: allCitiesImages.jaipur.jaipurBanner01.title
    },
  ];

  const content = [
    {
      duration: null,
      title: '02-05 days rajasthan tours',
      subhead: null
    },
  ];
  return (
    <>
      <Breadcrumb breadcrumbKey="_02_05Days" />
      <div className="container-fluid home-banner days-banner-container destination-banner">
        <TourCarousel images={images} content={content} />
      </div>
    </>
  );
};

export default Two_Five_Days_RajasthanTours;
