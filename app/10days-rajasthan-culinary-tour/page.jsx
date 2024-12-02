import Breadcrumb from "@/components/Breadcrumb"

export const metadata = {
  title: '10 days rajasthan culinary tour',
  description: '',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/10days-rajasthan-culinary-tour',
  },
  openGraph: {
    title: "10 days rajasthan culinary tour",
    description: '',
    url: 'https://www.rajasthantourpackages.in/10days-rajasthan-culinary-tour',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "10 days rajasthan culinary tour",
    description: '',
    image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
  },
}
const TenDaysRajasthanCulinaryTour = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_10daysrajasthanculinarytour" />
      <div className="container-fluid py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">10 days rajasthan culinary tour</h1>
        </div>
      </div>
    </>
  )
}

export default TenDaysRajasthanCulinaryTour