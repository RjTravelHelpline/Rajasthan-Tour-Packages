import Breadcrumb from '@/components/Breadcrumb'
import { blogs, getBlogsByCategory } from '@/data/Blogs';
import { formatDate } from '@/Utils/util';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Find Rajasthan History and Culture | Rajasthan Tour Packages',
    description: 'Discover the history and the colourful culture of Rajasthan. Rajasthan Tour Packages make you aware of the rich heritage and traditions of this royal place.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/blog/categories/history-and-culture",
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Find Rajasthan History and Culture | Rajasthan Tour Packages',
        description: 'Discover the history and the colourful culture of Rajasthan. Rajasthan Tour Packages make you aware of the rich heritage and traditions of this royal place.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
    openGraph: {
        title: 'Find Rajasthan History and Culture | Rajasthan Tour Packages',
        description: 'Discover the history and the colourful culture of Rajasthan. Rajasthan Tour Packages make you aware of the rich heritage and traditions of this royal place.',
        url: "https://www.rajasthantourpackages.in/blog/categories/history-and-culture",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
};

const page = () => {
    const historyBlogs = getBlogsByCategory(blogs, "history & culture")
    return (
        <>
            <div className="container-fluid mt-5 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="historyandculture" />
            <div className="container-fluid px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase blog-subhead-gradient'>history & culture</h1>
                        <p className='text-center fw-normal'>Delve into the rich tapestry of history, traditions, and cultural experiences from different regions.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-2 d-flex align-items-stretch justify-content-center px-2 blogs">
                        <div className="row d-flex justify-content-center py-2">
                            {historyBlogs.map((blog) => {
                                const visibleDescription =
                                    blog.description.split(' ').slice(0, 5).join(' ') + '...';
                                return (
                                    <div
                                        className={`col-12 col-lg-6 col-md-6 col-sm-12 px-0 overflow-auto d-flex justify-content-center py-2 px-2`}
                                        key={blog.date}
                                    >
                                        <Link href={`/blog/${blog.slug}`} className="w-100 mb-1 p-2 px-2 rounded-4" style={{ border: '1px solid #dbdbdb4f', backgroundColor: 'rgb(251,214,200)' }}>
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
                                                    {formatDate(blog.date)}
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
            </div>
        </>
    )
}

export default page
