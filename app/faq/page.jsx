import Faq from "@/components/Faq";
import { homeFaq } from "@/data/faqData";
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
