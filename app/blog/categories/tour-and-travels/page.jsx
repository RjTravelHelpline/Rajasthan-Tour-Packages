import Breadcrumb from '@/components/Breadcrumb'
import { blogs } from '@/data/Blogs';
import { getBlogsByCategory } from '@/Utils/blog.util';
import { formatDate } from '@/Utils/util';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export const metadata = {
    title: 'Rajasthan Tour and Travel Guides | Rajasthan Tour Packages',
    description: 'Find Rajasthan Tour and Travel Guides for top destinations, expert itineraries, and travel tips. Plan your dream trip with Rajasthan Tour Packages today.',
    alternates: {
        canonical: "https://www.rajasthantourpackages.in/blog/categories/tour-and-travels",
    },
    twitter: {
        card: "summary_large_image",
        site: "@rajasthantourpackages",
        title: 'Rajasthan Tour and Travel Guides | Rajasthan Tour Packages',
        description: 'Find Rajasthan Tour and Travel Guides for top destinations, expert itineraries, and travel tips. Plan your dream trip with Rajasthan Tour Packages today.',
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
    },
    openGraph: {
        title: 'Rajasthan Tour and Travel Guides | Rajasthan Tour Packages',
        description: 'Find Rajasthan Tour and Travel Guides for top destinations, expert itineraries, and travel tips. Plan your dream trip with Rajasthan Tour Packages today.',
        url: "https://www.rajasthantourpackages.in/blog/categories/tour-and-travels",
        images: 'https://www.rajasthantourpackages.in/rajasthan-travel-helpline.png',
        site_name: 'Rajasthan Tour Packages',
        type: 'website',
        locale: 'en_US',
    },
};

const page = () => {
    const travelBlogs = getBlogsByCategory(blogs, "tour & travels")
    return (
        <>
            <div className="container-fluid mt-5 pt-5 bg-black">
            </div>
            <Breadcrumb breadcrumbKey="tourandtravels" />
            <div className="container-fluid px-0 py-5">
                <div className="container">
                    <div className="row">
                        <h1 className='text-center text-uppercase blog-subhead-gradient'>tour & travels</h1>
                        <p className='text-center fw-normal'>Embark on unforgettable journeys with travel guides, tips from adventure seekers.</p>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row py-2 d-flex align-items-stretch justify-content-center px-2 blogs">
                        <div className="row d-flex justify-content-center py-2">
                            {travelBlogs.map((blog) => {
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
