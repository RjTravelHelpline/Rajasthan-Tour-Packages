import Breadcrumb from "@/components/Breadcrumb"

export const metadata = {
  title: 'Rajasthan Culinary Tour for 10-Days | Rajasthan Tour Packages',
  description: 'Learn more about Rajasthan food tourism through the Rajasthan Culinary Tour which is a 10-day tour exploring traditional foods, classes, and food markets.',
  alternates: {
    canonical: 'https://www.rajasthantourpackages.in/10days-rajasthan-culinary-tour',
  },
  openGraph: {
    title: "Rajasthan Culinary Tour for 10-Days | Rajasthan Tour Packages",
    description: 'Learn more about Rajasthan food tourism through the Rajasthan Culinary Tour which is a 10-day tour exploring traditional foods, classes, and food markets.',
    url: 'https://www.rajasthantourpackages.in/10days-rajasthan-culinary-tour',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    site_name: 'Rajasthan Tour Packages',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@rajasthantourpackages",
    title: "Rajasthan Culinary Tour for 10-Days | Rajasthan Tour Packages",
    description: 'Learn more about Rajasthan food tourism through the Rajasthan Culinary Tour which is a 10-day tour exploring traditional foods, classes, and food markets.',
    images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
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