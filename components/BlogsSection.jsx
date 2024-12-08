"use client";
import SlickSlider from './SlickSlider';
import { blogs, getLatestBlogs } from '@/data/Blogs';
import Link from 'next/link';
import Image from 'next/image';
import { ExploreAll } from './ExploreAll';

const BlogsSection = () => {
  const latestBlogs = getLatestBlogs(blogs);
  const visibleBlogs = latestBlogs.slice(0, 4);

  return (
    <>
      <div className="container-fluid py-5 position-relative">
        <div className="container blogs mb-5">
          <div className="row py-2 px-2 d-flex justify-content-center align-items-center">
            <div className="d-flex-justify-content-center align-items-center">
              {/* <hr style={{ borderColor: 'var(--color-tertary)' }} /> */}
              <h2 className="text-center text-capitalize home-head web-title fw-normal">
                latest <span className="fw-bold">blogs </span>
              </h2>
              <p className="text-center text-capitalize" >
                Stay updated with travel tips, stories, and insights from Rajasthan
              </p>
              {/* <hr style={{ borderColor: 'var(--color-tertary)' }} /> */}
            </div>
          </div>
          <div className="row d-flex justify-content-center py-2">
            <SlickSlider settings={{ slidesToShow: 3, autoplay: false }}>
              {visibleBlogs.map((blog) => {
                const visibleDescription =
                  blog.description.split(' ').slice(0, 20).join(' ') + '...';
                return (
                  <div
                    className={`col-lg-6 col-md-6 col-sm-12 px-2  overflow-auto py-2 d-flex justify-content-between align-items-stretch`}
                    key={blog.date}
                  >
                    <Link href={`/blog/${blog.slug}`} className='w-100'>
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
                          <p className="text-muted w-auto blog-author mb-0 text-capitalize">
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
          <ExploreAll text="more insights" href="/blog" />
        </div>
      </div>
    </>
  );
};

export default BlogsSection;
