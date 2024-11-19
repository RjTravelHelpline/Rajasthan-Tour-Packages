import Comment from '@/components/CommentSection';
import SearchBar from '@/components/SearchBar';
import { blogCategories, blogs, getBlogsByCategory } from '@/data/Blogs';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaFacebook, FaInstagram, FaShare, FaTwitter, FaUser, FaWhatsapp } from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';

export const metadata = {
    title: 'Rajasthan Wildlife Trails for Adventurers | Rajasthan Tour Packages',
    description: "Check out exciting wildlife tours in Rajasthan with Rajasthan Tour Packages. Explore Ranthambore, Sariska and lots more for a close glimpse of the wild.",
};


export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}
const BlogPost = ({ params }) => {

    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) {
        return <p>Blog not found</p>;
    }
    const filteredBlogs = getBlogsByCategory(blogs, blog.category)
    return (
        <>
            <div className="container-fluid py-4 blog-slug mt-5 pt-5 px-0">
                <div className="container px-0 d-flex justify-content-center align-items-center w-100 days-container overview destination">
                    <div className="row d-flex justify-content-center align-items-start px-0 w-100">
                        <div className="col-lg-8 col-md-12 col-sm-12 px-sm-0 px-md-0 px-lg-2">
                            <div className="insider px-3">
                                <div className="slug-image-container mb-2">
                                    <Image
                                        src={blog.image}
                                        alt={blog.heading}
                                        width={1500}
                                        height={600}
                                    />
                                </div>
                                <hr />
                                <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                                    <p className="w-auto blog-author mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5'><FaUser /></span>{blog.author}</p>
                                    <p className="text-black w-auto px-0 blog-dot mb-0">▪</p>
                                    <p className="w-auto blog-date mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5'><FaCalendarDays /></span>{blog.date}</p>
                                </div>
                                <h1>{blog.heading}</h1>
                                <hr style={{ borderColor: 'var(--color-black)' }} />
                                <div className='blog-content-slug'>
                                    {blog.more}
                                </div>
                            </div>
                            <div className="insider px-3 mt-3">
                                <Comment selectedBlog={blog.heading} />
                            </div>
                            <div className="insider px-3 mt-3">
                                <div className="bg-tertary-down mt-3 py-2 rounded-4 d-flex flex-column justify-content-center align-items-center">
                                    <span className="color-tertary">
                                        <FaShare />
                                    </span>
                                    <h3 className='text-center text-capitalize fw-normal'>share this<span className="fw-bold">blog</span></h3>
                                    </div>
                                    <div className="col">
                                        <div className="rounded-4 py-4 social-icons d-flex justify-content-center gap-3">
                                            {/* Facebook */}
                                            <a
                                                href={`https://www.facebook.com/sharer/sharer.php?u=https://rajasthantourpackages/blog/${blog.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border rounded-5 border-black text-black p-3 d-flex"
                                            >
                                                <FaFacebook />
                                            </a>

                                            {/* Instagram */}
                                            <a
                                                href={`https://www.instagram.com/?url=https://rajasthantourpackages/blog/${blog.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border rounded-5 border-black text-black p-3 d-flex"
                                            >
                                                <FaInstagram />
                                            </a>

                                            {/* Twitter */}
                                            <a
                                                href={`https://twitter.com/intent/tweet?url=https://rajasthantourpackages/blog/${blog.slug}&text=Check+this+out!`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border rounded-5 border-black text-black p-3 d-flex"
                                            >
                                                <FaTwitter />
                                            </a>

                                            {/* WhatsApp */}
                                            <a
                                                href={`https://api.whatsapp.com/send?text=Check+out+this+blog!+https://rajasthantourpackages/blog/${blog.slug}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="border rounded-5 border-black text-black p-3 d-flex"
                                            >
                                                <FaWhatsapp />
                                            </a>

                                            {/* Mail */}
                                            <a
                                                href={`mailto:?subject=Check+out+this+blog&body=https://rajasthantourpackages/blog/${blog.slug}`}
                                                className="border rounded-5 border-black text-black p-3 d-flex"
                                            >
                                                <FaEnvelope />
                                            </a>
                                        </div>
                                    </div>
                                    <hr />
                                    <h4 className='my-2 text-center text-capitalize'><Link href="https://rajasthantourpackages.in/contact-us" style={{ textDecoration: 'underline', color: 'var(--color-tertary)', fontWeight: 'bold' }}>contact us
                                    </Link></h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-ms-12 col-sm-12 side-nav px-sm-0 px-md-0 px-lg-2">
                                <div className="sidebar-menu w-100 z-9999 mb-3 search-sidebar flex-column">
                                    <p className='mb-0 text-uppercase'><span className='blog-subhead-gradient d-inline'>{blog.category}</span></p>
                                    <h2 className="text-capitalize py-1">search</h2>
                                    <SearchBar blogs={filteredBlogs} styles="rounded-4 w-100 p-3" placeholder="search here" />
                                </div>
                                <div className="sidebar-menu mb-3 w-100 z-9999 flex-column">
                                    <h2 className="text-capitalize py-1">popular <span className="fw-normal d-inline">insights</span></h2>
                                    <ul className="list-group list-group-flush w-100">
                                        {filteredBlogs.slice(0, 3).map((item, index) => (
                                            <li key={index} className="list-group-item hovered-link">
                                                <Link className='w-100 px-0 d-flex border-0 ' href={`${item.slug}`}>{item.heading}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar-menu w-100 z-9999 flex-column">
                                    <h2 className="text-capitalize py-1">categories</h2>
                                    <ul className="p-0 w-100 d-flex justify-content-start flex-wrap align-items-center gap-2">
                                        {blogCategories.map((item, index) => (
                                            <li key={index} className="list-group-item">
                                                <Link className='w-100 d-flex border-0' href={`/blog/categories${item.path}`}> <span className="color-tertary me-1">•</span> {item.text}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default BlogPost;
