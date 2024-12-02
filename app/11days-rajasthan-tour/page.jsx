import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'Grand Rajasthan 11 Days Tour | Rajasthan Tour Packages',
  description: 'Discover the best of Rajasthan in 11 days with our comprehensive tour. Rajasthan Tour Packages seeks a rich history, a gleaming culture, and lots more.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/11days-rajasthan-tour',
  },
  openGraph: {
    title: 'Grand Rajasthan 11 Days Tour | Rajasthan Tour Packages',
    description: 'Discover the best of Rajasthan in 11 days with our comprehensive tour. Rajasthan Tour Packages seeks a rich history, a gleaming culture, and lots more.',
    url: 'https://www.rajasthantourpackages.in/11days-rajasthan-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Grand Rajasthan 11 Days Tour | Rajasthan Tour Packages',
    description: 'Discover the best of Rajasthan in 11 days with our comprehensive tour. Rajasthan Tour Packages seeks a rich history, a gleaming culture, and lots more.',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const ElevenDaysRajasthanTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_11daysrajasthantour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">11 days rajasthan tour</h1>
        </div>
      </div>
    </>
  );
};

export default ElevenDaysRajasthanTourPackage