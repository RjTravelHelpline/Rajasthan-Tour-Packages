import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: 'Plan a 10 Day Honeymoon Trip | Rajasthan Tour Packages',
  description: 'Fantasise your honeymoon trip with a 10-day Rajasthan tour. Rajasthan Tour Packages can help you to visit places with romantic beauty and essential attractions.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/10days-rajasthan-honeymoon-tour',
  },
  openGraph: {
    title: 'Plan a 10 Day Honeymoon Trip | Rajasthan Tour Packages',
    description: 'Fantasise your honeymoon trip with a 10-day Rajasthan tour. Rajasthan Tour Packages can help you to visit places with romantic beauty and essential attractions.',
    url: 'https://www.rajasthantourpackages.in/10days-rajasthan-honeymoon-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: 'Plan a 10 Day Honeymoon Trip | Rajasthan Tour Packages',
    description: 'Fantasise your honeymoon trip with a 10-day Rajasthan tour. Rajasthan Tour Packages can help you to visit places with romantic beauty and essential attractions.',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const TenDaysRajasthanHoneymoonPackage = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_10daysrajasthanhoneymoontour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">10 days rajasthan honeymoon tour</h1>
        </div>
      </div>
    </>
  )
}

export default TenDaysRajasthanHoneymoonPackage;
