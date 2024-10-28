import SlickSlider from "@/components/SlickSlider";
import { blogs, getBlogsByCategory, getLatestBlogs } from "@/data/Blogs";
import Image from "next/image";
import Link from "next/link";


// Define blog categories with icons
// const blogCategory = [
//     {
//         name: 'Tour & Travels',
//         icon: <FaPlaneDeparture className="blog-cat-icon" />,
//     },
//     {
//         name: 'Food',
//         icon: <FaKitchenSet className="blog-cat-icon" />,
//     },
//     {
//         name: 'Wildlife',
//         icon: <FaCat className="blog-cat-icon" />,
//     },
//     {
//         name: 'History & Culture',
//         icon: <FaLandmark className="blog-cat-icon" />,
//     },
//     {
//         name: 'Fair & Festivals',
//         icon: <FaPersonRifle className="blog-cat-icon" />,
//     },
//     {
//         name: 'News & Updates',
//         icon: <FaLandmark className="blog-cat-icon" />,
//     },
// ];

const Blogs = () => {
    const latestBlogs = getLatestBlogs(blogs);
    const travelBlogs = getBlogsByCategory(blogs, "tour & travels")
    const foodBlogs = getBlogsByCategory(blogs, "food")
    return (
        <>
            <div className="container-fluid bg-black blog-header text-white py-5">
                <div className="row">
                    <h2 className=" text-center logo text-capitalize">
                        rajasthan tour packages
                    </h2>
                    <h1 className="text-center text-capitalize">blog</h1>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container blogs">
                    <div className="row px-2">
                        <h3 className="text-center text-uppercase">latest <span className='color-tertary'>insights</span></h3>
                    </div>
                    <div className="row d-flex justify-content-center py-2">
                        <SlickSlider settings={{ slideszToShow: 3 }}>
                            {latestBlogs.slice(0, 4).map((blog) => {
                                const visibleDescription =
                                    blog.description.split(' ').slice(0, 5).join(' ') + '...';
                                return (
                                    <div
                                        className={`col-lg-6 col-md-6 col-sm-12 px-2  mb-3 overflow-auto py-2 d-flex justify-content-between align-items-stretch`}
                                        key={blog.date}
                                    >
                                        <Link href={`/blog/${blog.slug}`}>
                                            <div className="blog-card d-flex flex-column justify-content-between rounded-4 w-100 p-2">
                                                <div className="blog-image-container w-100 mb-3">
                                                    <Image
                                                        src={blog.image}
                                                        alt={blog.heading}
                                                        className="img-fluid"
                                                        width={800}
                                                        height={600}
                                                    />
                                                </div>
                                                <p className="blog-category mb-0">{blog.category}</p>
                                                <h3 className="blog-heading">{blog.heading}</h3>
                                                <p className="mb-2">{visibleDescription}</p>
                                                <div className="row d-flex justify-content-start w-100 align-items-center">
                                                    <p className="text-muted w-auto blog-author mb-0">
                                                        {blog.author}
                                                    </p>
                                                    <p className="text-muted w-auto px-0 blog-dot mb-0">
                                                        ▪
                                                    </p>
                                                    <p className="text-muted w-auto blog-date mb-0">
                                                        {blog.date}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </SlickSlider>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container blogs">
                    <div className="row px-2">
                        <h3 className="text-center text-uppercase">latest from <span className='color-tertary'>tour & travels</span></h3>
                    </div>
                    <div className="row d-flex justify-content-center py-2">
                        {travelBlogs.map((blog) => {
                            const visibleDescription =
                                blog.description.split(' ').slice(0, 5).join(' ') + '...';
                            return (
                                <div
                                    className={`col-12 col-lg-6 col-md-6 col-sm-12 px-2 mb-3 overflow-auto py-2 d-flex justify-content-center`}
                                    key={blog.date}
                                >
                                    <Link href={`/blog/${blog.slug}`}>
                                        <div className="blog-card w-100 d-flex flex-column justify-content-between rounded-4 w-100 p-2">
                                            <div className="blog-image-container w-100 mb-3">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.heading}
                                                    className="img-fluid"
                                                    width={800}
                                                    height={600}
                                                />
                                            </div>
                                            <p className="blog-category mb-0">{blog.category}</p>
                                            <h3 className="blog-heading">{blog.heading}</h3>
                                            <p className="mb-2">{visibleDescription}</p>
                                            <div className="row d-flex justify-content-start w-100 align-items-center">
                                                <p className="text-muted w-auto blog-author mb-0">
                                                    {blog.author}
                                                </p>
                                                <p className="text-muted w-auto px-0 blog-dot mb-0">
                                                    ▪
                                                </p>
                                                <p className="text-muted w-auto blog-date mb-0">
                                                    {blog.date}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container blogs">
                    <div className="row px-2">
                        <h3 className="text-center text-uppercase">latest from <span className='color-tertary'>food</span>
                        </h3>
                    </div>
                    <div className="row d-flex justify-content-center py-2">
                        {foodBlogs.map((blog) => {
                            const visibleDescription =
                                blog.description.split(' ').slice(0, 5).join(' ') + '...';
                            return (
                                <div
                                    className={`col-lg-4 col-md-6 col-sm-12 px-2  mb-3 overflow-auto py-2 d-flex justify-content-between align-items-stretch`}
                                    key={blog.date}
                                >
                                    <Link href={`/blog/${blog.slug}`}>
                                        <div className="blog-card d-flex flex-column justify-content-between rounded-4 w-100 p-2">
                                            <div className="blog-image-container w-100 mb-3">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.heading}
                                                    className="img-fluid"
                                                    width={800}
                                                    height={600}
                                                />
                                            </div>
                                            <p className="blog-category mb-0">{blog.category}</p>
                                            <h3 className="blog-heading">{blog.heading}</h3>
                                            <p className="mb-2">{visibleDescription}</p>
                                            <div className="row d-flex justify-content-start w-100 align-items-center">
                                                <p className="text-muted w-auto blog-author mb-0">
                                                    {blog.author}
                                                </p>
                                                <p className="text-muted w-auto px-0 blog-dot mb-0">
                                                    ▪
                                                </p>
                                                <p className="text-muted w-auto blog-date mb-0">
                                                    {blog.date}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
