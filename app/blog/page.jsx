import { BlogDataSection } from "@/components/BlogDataSection";
import HorizontalScrollBlogs from "@/components/HorizontalScrollBlogs";
import RTPNav from "@/components/RTPNav";
import SearchBar from "@/components/SearchBar";
import { blogs } from "@/data/Blogs";
import { getBlogsByCategory } from "@/Utils/blog.util";
import { getLatestItems } from "@/Utils/util";
import { FaUtensils, FaPaw, FaLandmark, FaTheaterMasks, FaPlane, FaNewspaper } from "react-icons/fa";

const Blogs = () => {
    const latestBlogs = getLatestItems(blogs);
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
                    <h2 className="fw-normal text-center blog-subhead">Discover <span className="blog-subhead-gradient">Travel Tips</span>, <span className="blog-subhead-gradient">Trends</span>, and <span className="blog-subhead-gradient">Inspiring Journey</span> Stories.</h2>
                    <div className="col-12 col-lg-10 col-sm-10">
                        <hr />
                    </div>
                    <div className="row py-3 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-8 col-sm-10 px-4">
                            <SearchBar blogs={blogs} placeholder="search here for any eg. food, culture, wildlife etc." />
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <HorizontalScrollBlogs blogs={latestBlogs} />
                </div>
            </div>
            <RTPNav />
            <div className="container-fluid px-0">
                <div className="row tour-packages-nav blog-data-nav overflow-auto">
                    <a href="#from-food">
                        <FaUtensils className="me-1 color-tertary icon" /> Food
                    </a>
                    <a href="#from-wildlife">
                        <FaPaw className="me-1 color-tertary icon" /> Wildlife
                    </a>
                    <a href="#from-history-&-culture">
                        <FaLandmark className="me-1 color-tertary icon" /> History & Culture
                    </a>
                    <a href="#from-fair-&-festivals">
                        <FaTheaterMasks className="me-1 color-tertary icon" /> Fair & Festivals
                    </a>
                    <a href="#from-tour-&-travels">
                        <FaPlane className="me-1 color-tertary icon" /> Tour & Travels
                    </a>
                    <a href="#from-news-&-updates">
                        <FaNewspaper className="me-1 color-tertary icon" /> News & Updates
                    </a>
                </div>
                <BlogDataSection
                    category="food"
                    subhead="Delicious Discoveries"
                    icon={<FaUtensils />}
                    Data={foodBlogs.slice(0, 2)}
                />
                <BlogDataSection
                    category="wildlife"
                    subhead="Nature's Wonders"
                    icon={<FaPaw />}
                    Data={wildlifeBlogs.slice(0, 2)}
                />
                <BlogDataSection
                    category="history-&-culture"
                    subhead="Timeless Tales"
                    icon={<FaLandmark />}
                    Data={historyBlogs.slice(0, 2)}
                />
                <BlogDataSection
                    category="fair-&-festivals"
                    subhead="Festive Celebrations"
                    icon={<FaTheaterMasks />}
                    Data={festivalsBlogs.slice(0, 2)}
                />
                <BlogDataSection
                    category="tour-&-travels"
                    subhead="Wanderlust Diaries"
                    icon={<FaPlane />}
                    Data={travelBlogs.slice(0, 2)}
                />
                <BlogDataSection
                    category="news-&-updates"
                    subhead="Latest Updates"
                    icon={<FaNewspaper />}
                    Data={newsBlogs.slice(0, 2)}
                />
            </div>
        </>
    );
};

export default Blogs;
