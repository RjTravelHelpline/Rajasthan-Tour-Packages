import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
  description: "Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
  },
  openGraph: {
    title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
    description: "Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.",
    url: 'https://www.rajasthantourpackages.in/jodhpur-cab-rental',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Jodhpur Cab Hire Services | Rajasthan Tour Packages',
    description: "Book a Jodhpur Cab Rental to Explore the Blue City Safely. Learn about the best of Rajasthan Tour Packages and find its history, culture, and much more.",
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const JodhpurCabRental = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="jodhpurCab" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">jodhpur cab rental</h1>
        </div>
      </div>
    </>
  );
};

export default JodhpurCabRental;
