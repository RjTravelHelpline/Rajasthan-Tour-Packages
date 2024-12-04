import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: '03 Days Jodhpur Mewar Tour',
  description: "",
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/3days-jodhpur-mewar-tour',
  },
  openGraph: {
    title: '03 Days Jodhpur Mewar Tour',
    description: "",
    url: 'https://www.rajasthantourpackages.in/3days-jodhpur-mewar-tour',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: '03 Days Jodhpur Mewar Tour',
    description: "",
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const ThreeDaysJodhpurMewarTourPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_3daysjodhpurmewartour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">03 Days Jodhpur Mewar Tour</h1>
        </div>
      </div>
    </>
  );
};
export default ThreeDaysJodhpurMewarTourPackage