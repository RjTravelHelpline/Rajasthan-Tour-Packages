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
    siteName: 'Rajasthan Tour Packages',
    type: 'website',
  },
}
const TenDaysRajasthanCulinaryTour = () => {
  return (
    <>
      <Breadcrumb breadcrumbKey="_10daysrajasthanculinarytour" />
      <div className="container-fluid px-0 py-4 bg-black text-white">
        <div className="row">
          <h1 className="text-5">10 days rajasthan culinary tour</h1>
        </div>
      </div>
    </>
  )
}

export default TenDaysRajasthanCulinaryTour