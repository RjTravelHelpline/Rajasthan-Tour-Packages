import { blogs } from '@/data/Blogs';
import { dateIso } from '@/Utils/blog.util';
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}
export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  const dateIsoFormated = dateIso(blog.date);

  if (!blog) {
    return {
      title: blog.title.slice(0, 4) + '...',
      description: blog.description.slice(0, 25) + '...',
    };
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.rajasthantourpackages.in/blog/${blog.slug}`,
    },
    headline: blog.metaTitle,
    description: blog.metaDescription,
    image: blog.image,
    author: {
      '@type': 'Organization',
      name: 'Rajasthan Tour Packages',
      url: 'https://www.rajasthantourpackages.in/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rajasthan Tour Packages',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.rajasthantourpackages.in/_next/image?url=%2Frajasthan-travel-helpline.png&w=640&q=75',
      },
    },
    datePublished: dateIsoFormated,
    dateModified: dateIsoFormated,
  };

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: blog.canonical,
    },
    keywords: blog.keywords,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      url: `https://www.rajasthantourpackages.in/blog/${blog.slug}`,
      images: [blog.image],
      site_name: 'Rajasthan Tour Packages',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image],
      site: '@rajasthantourpackages',
    },
    structuredData: JSON.stringify(blogSchema),
  };
}
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
