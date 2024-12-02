
import Faq from "@/components/Faq";
import { homeFaq } from "@/data/faqData";
export const metadata = {
    title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
    description: '',
    alternates: {
        canonical: 'https://www.rajasthantourpackages.in/faq',
    },
    openGraph: {
        title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
        description: '',
        url: 'https://www.rajasthantourpackages.in/faq',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Common Asked Questions | FAQ | Rajasthan Tour Packages',
        description: '',
        image: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
}

const Faqs = () => {
    return (
        <>
            <div className="container-fluid px-0 py-4 bg-black text-white">
                <div className="row">
                    <h1 className="text-5 text-center">FAQs</h1>
                    <p className="text-center">common asked questions</p>
                </div>
            </div>
            <div className="container faq py-2">
                <div className="row mt-5 d-flex justify-content-center w-100">
                    <Faq faqs={homeFaq.questions} />
                </div>
            </div>
        </>
    );
};

export default Faqs;
