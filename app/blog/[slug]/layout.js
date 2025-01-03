import { blogs } from '@/data/Blogs';

// Generate static params for dynamic routing
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each dynamic route (blog post)
export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: 'Blog not found',
      description: 'This blog does not exist.',
    };
  }
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
  };
}

// Layout component to render the children and structured data script
export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
