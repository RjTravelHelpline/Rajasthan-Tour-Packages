import { BlogDataSection } from "@/components/BlogDataSection";
import HorizontalScrollBlogs from "@/components/HorizontalScrollBlogs";
import RTPNav from "@/components/RTPNav";
import SearchBar from "@/components/SearchBar";
import { blogs, getBlogsByCategory, getLatestBlogs } from "@/data/Blogs";
import { FaUtensils, FaPaw, FaLandmark, FaTheaterMasks, FaPlane, FaNewspaper } from "react-icons/fa";


const Blogs = () => {
    const latestBlogs = getLatestBlogs(blogs);
    const travelBlogs = getBlogsByCategory(blogs, "tour & travels")
    const foodBlogs = getBlogsByCategory(blogs, "food")
    const historyBlogs = getBlogsByCategory(blogs, "history & culture")
    const wildlifeBlogs = getBlogsByCategory(blogs, "wildlife")
    const festivalsBlogs = getBlogsByCategory(blogs, "fair & festivals")
    const newsBlogs = getBlogsByCategory(blogs, "news & updates")

    return (
        <>
            <div className="container-fluid bg-black blog-header text-white pt-5 pt-5">
                <div className="row py-3 mt-5 d-flex justify-content-center align-items-center">
                    <h1 className="text-center text-uppercase blog-head mb-3">blog</h1>
                </div>
                <div className="row py-3 justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-10 px-4">
                        <SearchBar blogs={blogs} />
                    </div>
                </div>
                <div className="row">
                    <HorizontalScrollBlogs blogs={latestBlogs} />
                </div>
            </div>
            <RTPNav />
            <div className="container-fluid px-0">
                <div className="row tour-packages-nav blog-data-nav">
                    <a href="#from-food">
                        <FaUtensils className="me-1 color-tertary icon" /> Food
                    </a>
                    <a href="#from-wildlife">
                        <FaPaw className="me-1 color-tertary icon" /> Wildlife
                    </a>
                    <a href="#from-history-and-culture">
                        <FaLandmark className="me-1 color-tertary icon" /> History & Culture
                    </a>
                    <a href="#from-fair-and-festivals">
                        <FaTheaterMasks className="me-1 color-tertary icon" /> Fair & Festivals
                    </a>
                    <a href="#from-tour-and-travels">
                        <FaPlane className="me-1 color-tertary icon" /> Tour & Travels
                    </a>
                    <a href="#from-news-and-updates">
                        <FaNewspaper className="me-1 color-tertary icon" /> News & Updates
                    </a>
                </div>
                <BlogDataSection category="food" Data={foodBlogs} />
                <BlogDataSection category="wildlife" Data={wildlifeBlogs} />
                <BlogDataSection category="history-and-culture" Data={historyBlogs} />
                <BlogDataSection category="fair-and-festivals" Data={festivalsBlogs} />
                <BlogDataSection category="tour-and-travels" Data={travelBlogs} />
                <BlogDataSection category="news-and-updates" Data={newsBlogs} />
            </div>
        </>
    );
};

export default Blogs;
