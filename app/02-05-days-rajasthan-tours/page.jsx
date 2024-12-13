import Breadcrumb from "@/components/Breadcrumb";
import TourCarousel from "@/components/TourCarousel";
import { allCitiesImages } from "@/data/imageData";



const Page = () => {
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

export default Page;
